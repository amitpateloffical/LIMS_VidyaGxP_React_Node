const express = require("express");
const helmet = require("helmet");
const http = require("http");
const cors = require("cors");
const path = require("path");
const xlsx = require("xlsx");
const fs = require("fs-extra");
const pdfParse = require("pdf-parse");
const config = require("./config/config.json");
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.get('/', (req, res) => {
  res.send('Welcome to Lims Vidyagxp');
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "documents")));

// Define the manual headers
const predefinedHeaders = [
  "STP ID",
  "Product Name",
  "Batch Number",
  "Manufacture Date",
  "Expiry Date",
  "Active Ingredient Concentration",
  "Capsule Size",
  "Dissolution Test",
  "Hardness Test",
  "Moisture Content",
  "Uniformity of Dosage Unit",
  "Appearance",
  "Packaging Integrity",
  "Storage Condition",
  "Stability Testing",
  "File_Name"
];

// Ensure error and process folders exist
const errorFolder = path.join(__dirname, 'error');
const processFolder = path.join(__dirname, 'process');
fs.ensureDirSync(errorFolder);
fs.ensureDirSync(processFolder);

// Set to keep track of processed STP IDs
const processedSTPIDs = new Set();

// Function to extract data from PDF using pdf-parse
const extractDataFromPDF = async (pdfFilePath) => {
  try {
    if (!fs.existsSync(pdfFilePath)) {
      throw new Error(`File not found: ${pdfFilePath}`);
    }

    const dataBuffer = fs.readFileSync(pdfFilePath);
    const data = await pdfParse(dataBuffer);

    const extractedData = {};
    predefinedHeaders.forEach(header => {
      extractedData[header] = '';
    });
    extractedData['File_Name'] = path.basename(pdfFilePath);

    const text = data.text;
    console.log(`Text extracted from ${pdfFilePath} using pdf-parse:`, text);

    if (!text) {
      console.warn('No text extracted from PDF using pdf-parse. Falling back to pdfjs-dist.');
      return extractDataUsingPdfJs(pdfFilePath);
    }

    // Normalize and clean the text
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    console.log(`Normalized Text:`, normalizedText);

    // Improved key-value extraction pattern
    const keyValuePattern = new RegExp(
      `(${predefinedHeaders.join('|').replace(/ /g, '\\s*')})\\s*[:]?\\s*(.*?)(?=\\s*(${predefinedHeaders.join('|').replace(/ /g, '\\s*')})\\s*[:]?|$)`,
      'gi'
    );

    let match;
    while ((match = keyValuePattern.exec(normalizedText)) !== null) {
      const [, key, value] = match;
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();
      console.log(`Matched Key: ${trimmedKey}, Value: ${trimmedValue}`);
      if (predefinedHeaders.includes(trimmedKey)) {
        extractedData[trimmedKey] = trimmedValue;
      }
    }

    if (Object.keys(extractedData).length === 0) {
      console.warn(`No matching headers found in PDF: ${pdfFilePath}`);
    }

    return extractedData;
  } catch (err) {
    console.error('Error extracting data from PDF using pdf-parse:', err.message);
    return extractDataUsingPdfJs(pdfFilePath);
  }
};

// Function to extract data from PDF using pdfjs-dist (fallback)
const extractDataUsingPdfJs = async (pdfFilePath) => {
  try {
    if (!fs.existsSync(pdfFilePath)) {
      throw new Error(`File not found: ${pdfFilePath}`);
    }

    const dataBuffer = fs.readFileSync(pdfFilePath);
    const pdfjsLib = await import('pdfjs-dist/build/pdf');
    const loadingTask = pdfjsLib.getDocument({ data: dataBuffer });
    const pdfDocument = await loadingTask.promise;
    const numPages = pdfDocument.numPages;

    const extractedData = {};
    predefinedHeaders.forEach(header => {
      extractedData[header] = '';
    });
    extractedData['File_Name'] = path.basename(pdfFilePath);

    let textContent = '';
    for (let i = 1; i <= numPages; i++) {
      const page = await pdfDocument.getPage(i);
      const textContentFromPage = await page.getTextContent();
      textContent += textContentFromPage.items.map(item => item.str).join(' ') + ' ';
    }

    if (!textContent) {
      console.warn('No text extracted from PDF using pdfjs-dist.');
    }

    console.log(`Text extracted from ${pdfFilePath} using pdfjs-dist:`, textContent);

    const normalizedText = textContent.replace(/\s+/g, ' ').trim();
    console.log(`Normalized Text using pdfjs-dist:`, normalizedText);

    const keyValuePattern = new RegExp(
      `(${predefinedHeaders.join('|').replace(/ /g, '\\s*')})\\s*[:]?\\s*(.*?)(?=\\s*(${predefinedHeaders.join('|').replace(/ /g, '\\s*')})\\s*[:]?|$)`,
      'gi'
    );

    let match;
    while ((match = keyValuePattern.exec(normalizedText)) !== null) {
      const [, key, value] = match;
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();
      console.log(`Matched Key using pdfjs-dist: ${trimmedKey}, Value: ${trimmedValue}`);
      if (predefinedHeaders.includes(trimmedKey)) {
        extractedData[trimmedKey] = trimmedValue;
      }
    }

    return extractedData;
  } catch (err) {
    console.error('Error extracting data from PDF using pdfjs-dist:', err.message);
    return {};
  }
};

// Function to save data to Excel
const saveDataToExcel = (data, headers, outputExcelPath) => {
  if (data.length === 0) {
    console.log("No data to save.");
    return;
  }

  const worksheetData = [headers];
  data.forEach(item => {
    const row = headers.map(header => item[header] || "");
    worksheetData.push(row);
  });

  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.aoa_to_sheet(worksheetData);

  // Set column widths to accommodate the headers and values
  const colWidths = headers.map(header => ({ wch: Math.max(header.length, 20) }));
  worksheet['!cols'] = colWidths;

  xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  try {
    xlsx.writeFile(workbook, outputExcelPath);
    console.log("Data successfully saved to Excel.");
  } catch (err) {
    console.error("Error saving Excel file:", err.message);
  }
};

// Function to process multiple PDF files
const processPDFs = async (pdfFilePaths, outputExcelPath) => {
  let allExtractedData = [];

  for (const pdfFilePath of pdfFilePaths) {
    try {
      console.log(`Processing file: ${pdfFilePath}`);
      const extractedData = await extractDataFromPDF(pdfFilePath);

      // Check for duplicates based on STP ID
      const stpId = extractedData["STP ID"];
      if (stpId && processedSTPIDs.has(stpId)) {
        console.warn(`Duplicate STP ID found: ${stpId}. Moving file to error folder.`);
        const destinationPath = path.join(errorFolder, path.basename(pdfFilePath));
        fs.moveSync(pdfFilePath, destinationPath, { overwrite: true });
        console.log(`Moved ${pdfFilePath} to ${errorFolder}`);
      } else {
        if (stpId) {
          processedSTPIDs.add(stpId);
        }
        if (Object.keys(extractedData).length === 0) {
          console.warn(`No data extracted from file: ${pdfFilePath}`);
          const destinationPath = path.join(errorFolder, path.basename(pdfFilePath));
          fs.moveSync(pdfFilePath, destinationPath, { overwrite: true });
          console.log(`Moved ${pdfFilePath} to ${errorFolder}`);
        } else {
          console.log("Extracted Data: ", extractedData);
          allExtractedData.push(extractedData);
          const destinationPath = path.join(processFolder, path.basename(pdfFilePath));
          fs.moveSync(pdfFilePath, destinationPath, { overwrite: true });
          console.log(`Moved ${pdfFilePath} to ${processFolder}`);
        }
      }
    } catch (error) {
      console.error(`Error processing file ${pdfFilePath}: ${error.message}`);
      const destinationPath = path.join(errorFolder, path.basename(pdfFilePath));
      fs.moveSync(pdfFilePath, destinationPath, { overwrite: true });
      console.log(`Moved ${pdfFilePath} to ${errorFolder}`);
    }
  }

  console.log("All Extracted Data: ", allExtractedData);
  saveDataToExcel(allExtractedData, predefinedHeaders, outputExcelPath);
};

// Paths to PDF files and output Excel file
const pdfFilePaths = [
   'C:\\Users\\ritik\\Documents\\GitHub\\LIMS_VidyaGxP_React_Node\\Backend\\src\\form_4.pdf',
  'C:\\Users\\ritik\\Documents\\GitHub\\LIMS_VidyaGxP_React_Node\\Backend\\src\\form_6.pdf',
  'C:\\Users\\ritik\\Documents\\GitHub\\LIMS_VidyaGxP_React_Node\\Backend\\src\\form_7.pdf',
];

const outputExcelPath = 'C:\\Users\\ritik\\Documents\\GitHub\\LIMS_VidyaGxP_React_Node\\Backend\\combined_data.xlsx';

// Start the server and process PDF files
const PORT = config.development.PORT || 3000;
server.listen(PORT, "0.0.0.0", async () => {
  try {
    console.log(`Server is running at port: ${PORT}`);
    await processPDFs(pdfFilePaths, outputExcelPath);
  } catch (e) {
    console.error("Error in server startup or PDF processing:", e.message || e);
  }
});
