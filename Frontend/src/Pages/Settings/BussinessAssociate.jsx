import React, { useState, useEffect } from "react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import BUsinessAssociateModal from "../Modals/BUsinessAssociateModal";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import { CButton, CFormCheck, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import PDFDownload from "../PDFComponent/PDFDownload "
const initialData = [
  {
    checkbox: false,
    sno: 1,
    BusinessAssociateName: "Associate 1",
    UniqueCode: "BA-001",
    City: "City A",
    State: "State A",
    Country: "Country A",
    ZipCode: "12345",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    BusinessAssociateName: "Associate 2",
    UniqueCode: "BA-002",
    City: "City B",
    State: "State B",
    Country: "Country B",
    ZipCode: "23456",
    status: "INITIATED",
  },
];

const BussinessAssociate = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    DROPPED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
  });

  const [editModalData, setEditModalData] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);


  useEffect(() => {
    const counts = {
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "DROPPED") counts.DROPPED++;
      else if (item.status === "INITIATED") counts.INITIATED++;
      else if (item.status === "REINITIATED") counts.REINITIATED++;
      else if (item.status === "APPROVED") counts.APPROVED++;
      else if (item.status === "REJECTED") counts.REJECTED++;
    });

    setCardCounts(counts);
  }, [data]);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    const businessAssociateName = row.BusinessAssociateName || ""; // Ensure it's a string
    return (
      businessAssociateName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const [isModalsOpen, setIsModalsOpen] = useState(false);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Business Associate Name", accessor: "BusinessAssociateName" },
    { header: "Unique Code", accessor: "UniqueCode" },
    { header: "City", accessor: "City" },
    { header: "State", accessor: "State" },
    { header: "Country", accessor: "Country" },
    { header: "Zip Code", accessor: "ZipCode" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            key="delete"
            className="cursor-pointer"
          />
        </>
      ),
    },
  ];

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:  index + 1,
      BusinessAssociateName: item["Business Associate Name"] || "",
      UniqueCode: item["Unique Code"] || "",
      City: item["City"] || "",
      State: item["state"] || "",
      Country: item["Country"] || "",
      ZipCode: item["Zip Code"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  const handleModalSubmit = (bussinessAssociate) => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === bussinessAssociate.sno ? bussinessAssociate : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          BusinessAssociateName: bussinessAssociate.BusinessAssociateName,
          UniqueCode: bussinessAssociate.UniqueCode,
          City: bussinessAssociate.City,
          State: bussinessAssociate.State,
          Country: bussinessAssociate.Country,
          ZipCode: bussinessAssociate.ZipCode, 
          status: "DROPPED",
        },
      ]);
    }
    closeModal();
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditModalData(null);
  };

  const handleEditSave = (updatedData) => {
    const updatedList = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(updatedList);
    closeEditModal();
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      setFormData(data);
    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onSave(formData);
    };
    return (
      <div>
      <CModal
   alignment="center"
   visible={visible}
   onClose={closeModal}
   size="lg"
 >
   <CModalHeader>
     <CModalTitle>Add Business Associate</CModalTitle>
   </CModalHeader>
   <CModalBody>
     <CFormInput
       className="mb-3"
       type="text"
       label={
         <>
           Business Associate Name <span style={{ color: "red" }}>*</span>
         </>
       }
       placeholder="Business Associate Name"
       value={formData?.BusinessAssociateName||""}
       onChange={handleChange}
       name="BusinessAssociateName"
       required
     />

     <CFormInput
       className="mb-3"
       type="text"
       label={
         <>
           Unique Code <span style={{ color: "red" }}>*</span>
         </>
       }
       placeholder="Unique Code"
       value={formData?.UniqueCode||""}
       onChange={handleChange}
       name="UniqueCode"
       required
     />

     <label className="mb-2">
       Category Of Business Associate <span style={{ color: "red" }}>*</span>
     </label>

     <CFormCheck
className="mb-3"
type="checkbox"
id="checkbox1"
label="Customer"
checked={formData?.CategoryOfBussinessAssociate||""}
onChange={handleChange}
name="CategoryOfBussinessAssociate"
/>
<CFormCheck
className="mb-3"
type="checkbox"
id="checkbox2"
label="Supplier"
checked={formData?.CategoryOfBussinessAssociate||""}
onChange={handleChange}
name="CategoryOfBussinessAssociate"
/>
<CFormCheck
className="mb-3"
type="checkbox"
id="checkbox3"
label="Manufacturer"
checked={formData.CategoryOfBussinessAssociate||""}
onChange={handleChange}
name="CategoryOfBussinessAssociate"
/>

     <CFormInput
       className="mb-3"
       type="text"
       label={
         <>
           Contact Person <span style={{ color: "red" }}>*</span>
         </>
       }
       placeholder="Contact Person"
       value={formData?.ContactPerson||""}
       onChange={handleChange}
       name="ContactPerson"
       required
     />

     <CFormInput
       className="mb-3"
       type="text"
       label={
         <>
           Location <span style={{ color: "red" }}>*</span>
         </>
       }
       placeholder="Location"
       value={formData?.Location||""}
       onChange={handleChange}
       name="Location"
       required
     />

     <CFormInput
       className="mb-3"
       type="text"
       label={
         <>
           Address : Line 1 <span style={{ color: "red" }}>*</span>
         </>
       }
       placeholder="Address : Line 1"
       value={formData?.AddressLine1}
       onChange={handleChange}
       name="AddressLine1"
       required
     />

     <CFormInput
       className="mb-3"
       type="text"
       label={<>Address : Line 2</>}
       placeholder="Address : Line 2"
       value={formData?.AddressLine2}
       onChange={handleChange}
       name="AddressLine2"
       required
     />

     <CFormInput
       className="mb-3"
       type="text"
       label={<>Address : Line 3</>}
       placeholder="Address : Line 3"
       value={formData?.AddressLine3}
       onChange={handleChange}
       name="AddressLine3"
       required
     />

     <CFormInput
       className="mb-3"
       type="text"
       label={
         <>
           City <span style={{ color: "red" }}>*</span>
         </>
       }
       placeholder="City"
       value={formData?.City||""}
       onChange={handleChange}
       name="City"
       required
     />

     <CFormInput
       className="mb-3"
       type="text"
       label={
         <>
           State <span style={{ color: "red" }}>*</span>
         </>
       }
       placeholder="State"
       value={formData?.State||""}
       onChange={handleChange}
       name="State"
       required
     />

     <CFormInput
       className="mb-3"
       type="text"
       label={
         <>
           Country <span style={{ color: "red" }}>*</span>
         </>
       }
       placeholder="Country"
       value={formData?.Country||""}
       onChange={handleChange}
       name="Country"
       required
     />

     <CFormInput
       className="mb-3"
       type="text"
       label={
         <>
           ZIP / PIN <span style={{ color: "red" }}>*</span>
         </>
       }
       placeholder="ZIP / PIN"
       value={formData?.ZipCode||""}
       onChange={handleChange}
       name="ZipCode"
       required
     />

     <CFormInput
       className="mb-3"
       type="text"
       label={
         <>
           Phone <span style={{ color: "red" }}>*</span>
         </>
       }
       
       placeholder="Phone"
       value={formData?.Phone}
       onChange={handleChange}
       name="Phone"
       required
     />

     <CFormInput
       className="mb-3"
       type="text"
       label={
         <>
           Fax <span style={{ color: "red" }}>*</span>
         </>
       }
       placeholder="Fax"
       value={formData.Fax}
       onChange={handleChange}
       name="Fax"
       required
     />

     <CFormInput
       className="mb-3"
       type="text"
       label={
         <>
           Email <span style={{ color: "red" }}>*</span>
         </>
       }
       placeholder="Email"
       value={formData?.Email}
       onChange={handleChange}
       name="Email"
       required
     />
   </CModalBody>
   <CModalFooter>
     <CButton color="light" onClick={closeModal}>
       Back
     </CButton>
     <CButton className="bg-info text-white" onClick={handleSave}>Submit</CButton>
   </CModalFooter>
 </CModal>
   
 </div>
    )
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Business Associate</h1>
      <div className="grid grid-cols-5 gap-4 mb-4">
        <Card
          title="DROPPED"
          count={cardCounts.DROPPED}
          color="pink"
          onClick={() => handleCardClick("DROPPED")}
        />
        <Card
          title="INITIATED"
          count={cardCounts.INITIATED}
          color="blue"
          onClick={() => handleCardClick("INITIATED")}
        />
        <Card
          title="REINITIATED"
          count={cardCounts.REINITIATED}
          color="yellow"
          onClick={() => handleCardClick("REINITIATED")}
        />
        <Card
          title="APPROVED"
          count={cardCounts.APPROVED}
          color="green"
          onClick={() => handleCardClick("APPROVED")}
        />
        <Card
          title="REJECTED"
          count={cardCounts.REJECTED}
          color="red"
          onClick={() => handleCardClick("REJECTED")}
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "DROPPED", label: "DROPPED" },
              { value: "INITIATED", label: "INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "APPROVED", label: "APPROVED" },
              { value: "REJECTED", label: "REJECTED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right flex gap-4">
        <PDFDownload columns={columns} data={filteredData} fileName="Bussiness_Associate.pdf" title="Bussiness Associate Data" />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add Associate" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
        openEditModal={openEditModal}
      />
      <BUsinessAssociateModal
       visible={isModalOpen}
       closeModal={closeModal}
       handleSubmit={handleModalSubmit}
        />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
      {isModalsOpen && (
        <ImportModal
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
  {editModalOpen && (
        <EditModal
          visible={editModalOpen}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
};

export default BussinessAssociate;
