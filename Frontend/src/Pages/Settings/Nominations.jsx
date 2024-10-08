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
import NominationModal from "../Modals/NominationModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";
import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import PDFDownload from "../PDFComponent/PDFDownload .jsx"

const initialData = [
  {
    checkbox: false,
    sno: 1,
    Analyst: "BA-001",
    TestTechnique: "BA-001",
    TotalExperience: "BA-001",
    PastExperience: "BA-001",
    JustificationforDirectNomination: "BA-001",
    AddedOn: "BA-001",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 2,
    Analyst: "BA-002",
    TestTechnique: "BA-002",
    TotalExperience: "BA-002",
    PastExperience: "BA-002",
    JustificationforDirectNomination: "BA-002",
    AddedOn: "BA-002",
    status: "Inactive",
  },
 
];


const Nominations = () => {
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


  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("INACTIVE");
  const [editModalData, setEditModalData] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

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
            <CModalTitle> Add Nominations</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p className="my-3 fs-6 fw-bold">
              {" "}
              Add information about Nominations.
            </p>
            <CFormSelect
              className="mb-3"
              label="Analyst"
              options={[
                { value: "Analyst", label: "Analyst" },
                { value: "Analyst Two", label: "Analyst Two" },
              ]}
              value={formData?.Analyst || ""}
              onChange={handleChange}
              name="Analyst"
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Employee ID"
              placeholder="Employee ID"
              value={formData?.EmployeeId || ""}
              onChange={handleChange}
              name="EmployeeId"
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Role/Title"
              placeholder="Role/Title"
              value={formData?.role || ""}
              onChange={handleChange}
              name="role"
            />
            <CFormSelect
              label="Test Technique"
              placeholder="Select"
              className="mb-3"
              options={[
                { value: "select", label: "Select" },
                { value: "Description", label: "Description" }]}
                value={formData?.TestTechnique || ""}
                onChange={handleChange}
                name="TestTechnique"
           
            />
            <CFormInput type="file" id="formFile" label="Training Documents" />
            <CFormInput
              type="text"
              className="mb-3"
              label="Total Experience / Work Area"
              placeholder="Total Experience / Work Area"
              value={formData?.TotalExperience || ""}
              onChange={handleChange}
              name="TotalExperience"
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Past Experience / Work Area"
              placeholder="Past Experience / Work Area"
              value={formData?.PastExperience || ""}
              onChange={handleChange}
              name="PastExperience"
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Justification for Direct Nomination"
              placeholder="Justification for Direct Nomination"
              value={formData?.JustificationforDirectNomination || ""}
              onChange={handleChange}
              name="JustificationforDirectNomination"
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleSave}>Add</CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  useEffect(() => {
    const counts = {
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
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
    return (
      row.JustificationforDirectNomination.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:  index + 1,
      Analyst: item["Analyst"] || "",
      TestTechnique: item["Test Technique"] || "",
      TotalExperience: item["Total Experience"] || "",
      PastExperience: item["Past Experience"] || "",
      JustificationforDirectNomination: item["Justification for Direct Nomination"] || "",
      AddedOn: item["Added On"] || "",
        status: item["Status"] || "",
      }));

      const concatenateData = [...updatedData];
      setData(concatenateData); // Update data state with parsed Excel data
      setIsModalsOpen(false); // Close the import modal after data upload
    };


  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Analyst", accessor: "Analyst" },
    { header: "Test Technique", accessor: "TestTechnique" },
    { header: "Total Experience", accessor: "TotalExperience" },
    { header: "Past Experience", accessor: "PastExperience" },
    { header: "Justification for Direct Nomination", accessor: "JustificationforDirectNomination" },
    { header: "Added On", accessor: "AddedOn" },
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

  const handleModalSubmit = (nomination) => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === nomination.sno ? nomination : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          Analyst:nomination.analyst,
          TestTechnique:nomination.testTechnique,
          TotalExperience: nomination.totalExperience,
          PastExperience: nomination.pastExperience,
          JustificationforDirectNomination:nomination.justification,
          AddedOn: currentDate,
          status: "Active",
        },
      ]);
    }
    closeModal();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Nominations</h1>
      {/* <div className="grid grid-cols-5 gap-4 mb-4">
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
      </div> */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "Active", label: "Active" },
              { value: "Inactive", label: "Inactive" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right flex gap-4">
          <PDFDownload columns={columns} data = {filteredData} title="Nomination Data" fileName="Nomination.pdf" />
        
        <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          <ATMButton text="Add Nominations" color="blue" onClick={openModal} />
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
      <NominationModal
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

export default Nominations;
