import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function InvestigationCoa() {
  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: " #2A5298", color: "white", width: "110px" };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const [selectedStatus, setSelectedStatus] = useState("All");

  const pageSize = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([
    {
      id: 1,
      sampleType: "Petrochemical",
      productMaterial: "Hydraulic Oil",
      arNo: "ARPC0000001",
      genericName: "hyo",
      specificationCode: "HOS 234",
      status: "APPROVED",
    },
    {
      id: 2,
      sampleType: "Petrochemical",
      productMaterial: "Sacubitril",
      arNo: "ARPC0000002",
      genericName: "Polycaprolactone",
      specificationCode: "RPS-TSLV-00",
      status: "APPROVED",
    },
    {
      id: 3,
      sampleType: "Chemical",
      productMaterial: "Ethanol",
      arNo: "ARPC0000003",
      genericName: "ethyl",
      specificationCode: "ETH-123",
      status: "INITIATED",
    },
    {
      id: 4,
      sampleType: "Pharmaceutical",
      productMaterial: "Aspirin",
      arNo: "ARPC0000004",
      genericName: "acetylsalicylic",
      specificationCode: "ASP-567",
      status: "REJECTED",
    },
    {
      id: 5,
      sampleType: "Polymer",
      productMaterial: "Nylon",
      arNo: "ARPC0000005",
      genericName: "polyamide",
      specificationCode: "NYL-890",
      status: "APPROVED",
    },
    {
      id: 6,
      sampleType: "Metal",
      productMaterial: "Steel",
      arNo: "ARPC0000006",
      genericName: "ferrum",
      specificationCode: "STL-101",
      status: "REINITIATED",
    },
  ]);

  const startIndex = (currentPage - 1) * pageSize;
  const filteredData = selectedStatus === 'All' ? data : data.filter(item => item.status === selectedStatus);
  const endIndex = Math.min(startIndex + pageSize, filteredData.length);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));
  
  return (
    <>
      <div className="m-5 mt-3">
          <div className="main-head">
          <h4 className="fw-bold">Investigation Coa</h4>
          </div>
          <div>
            <CRow className="mb-3 mt-5">
              <CCol sm={2}>
                <CFormSelect
                  options={[
                    "Ar No.",
                    { label: "ARPC0000001" },
                    { label: "ARPC0000002" },
                    { label: "ARPC0000003" },
                  ]}
                  style={{fontSize:'0.9rem'}}
                />
              </CCol>
              <CCol sm={3}>
                <CFormSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus} style={{fontSize:'0.9rem'}}
                  options={[
                    "All",
                    { label: "Initiated", value: "INITIATED" },
                    { label: "Approved", value: "APPROVED" },
                    { label: "Rejected", value: "REJECTED" },
                    { label: "Reinitiated", value: "REINITIATED" },
                    { label: "Dropped", value: "DROPPED" },
                  ]}
                />
              </CCol>
            </CRow>
          </div>
            <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
            <CTable align="middle" responsive className="  ">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >S NO.</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Sample Type</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Product / Material</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >A.R No.</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Generic Name</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Specification Code</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Status</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredData.slice(startIndex, endIndex).map((item) => (
                  <CTableRow key={item.id} >
                    <CTableDataCell>{item.id}</CTableDataCell>
                    <CTableDataCell>{item.sampleType}</CTableDataCell>
                    <CTableDataCell>{item.productMaterial}</CTableDataCell>
                    <CTableDataCell>{item.arNo}</CTableDataCell>
                    <CTableDataCell>{item.genericName}</CTableDataCell>
                    <CTableDataCell>{item.specificationCode}</CTableDataCell>
                    <CTableDataCell>
                    <button  
                        className={`py-1 px-2 w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
                          item.status === "INITIATED"
                            ? "blue-700"
                            : item.status === "APPROVED"
                            ? "green-700"
                            : item.status === "REJECTED"
                            ? "red-700"
                            : item.status === "REINITIATED"
                            ? "yellow-500"
                            : item.status === "DROPPED"
                            ? "purple-700"
                            : "white"
                        }`} style={{fontSize:'0.6rem'}}
                      >
                        {item.status}
                      </button>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to="/stability/sample_LoginDetails">
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>

          <div className="d-flex justify-content-end align-items-center mt-4">
                        <div className="pagination">
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                                &gt;&gt;
                            </button>
                        </div>
                       
                    </div>
      </div>
    </>
  );
}

export default InvestigationCoa;
