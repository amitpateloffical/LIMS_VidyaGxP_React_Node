import React, { useEffect, useState } from "react";
import "./Admin.css";
import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import Dropdown from "../../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../../components/ATM components/Button/ATMButton";
import Table from "../../../components/ATM components/Table/Table";
import ImportModal from "../../Modals/importModal";
import PDFDownload from "../../PDFComponent/PDFDownload ";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    employeeId: "EMP001",
    storageName: "Analyst 1",
    role: "Role 1",
    email: "analyst1@example.com",
    addedOn: "2024-01-01",
    attachment: "attachment",
    status: "Active",
    action: [],
  },
  {
    checkbox: false,
    sno: 2,
    employeeId: "EMP002",
    storageName: "Analyst 2",
    role: "Role 2",
    email: "analyst2@example.com",
    addedOn: "2024-01-02",
    attachment: "attachment",
    status: "Inactive",
    action: [],
  },
  {
    checkbox: false,
    sno: 3,
    employeeId: "EMP003",
    storageName: "Analyst 3",
    role: "Role 3",
    email: "analyst3@example.com",
    addedOn: "2024-01-03",
    attachment: "attachment",
    status: "Active",
    action: [],
  },
];

const Store = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("Inactive");
  const [editModalData, setEditModalData] = useState(null);
  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.storageName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Employee ID", accessor: "employeeId" },
    { header: "Analyst Name.", accessor: "storageName" },
    { header: "Role", accessor: "role" },
    { header: "Email.", accessor: "email" },
    { header: "Added On.", accessor: "addedOn" },
    { header: "attachment", accessor: "attachment" },
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
            className="cursor-pointer"
            onClick={() => onDeleteItem(row)}
          />
        </>
      ),
    },
  ];

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      employeeId: item["Employee Id"] || "",
      storageName: item["Storage Name"] || "",
      role: item["Role"] || "",
      email: item["Email"] || "",
      addedOn: item["Added On"] || "",
      attachment: item["Attachment"] || "", // Ensure field name matches your Excel data
      status: item["Status"] || "",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };

  const addNewStorageCondition = (newCondition) => {
    const nextStatus = lastStatus === "Active" ? "Inactive" : "Active";
    setData((prevData) => [
      ...prevData,
      {
        ...newCondition,
        sno: prevData.length + 1,
        checkbox: false,
        status: nextStatus,
      },
    ]);
    setLastStatus(nextStatus);
    setIsModalOpen(false);
  };
  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const handleAdd = () => {
      const newCondition = {
        employeeId: "EMP00",
        storageName: name,
        role: "Role 00",
        email: email,
        addedOn: new Date().toISOString().split("T")[0],
        attachment: "attachment",
        action: [],
      };
      onAdd(newCondition);
    };
    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Please Add User To fill This Details</p>
          <CFormInput
            className="mb-3"
            type="text"
            label="User Name"
            placeholder="UserName "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="Contact Number"
            placeholder="+91 0000000000 "
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="email"
            label="Gmail Address"
            placeholder="sample@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };
  const handleEditSave = (updatedData) => {
    const newData = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(newData);
    setEditModalData(null);
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);
    useEffect(() => {
      if (data) {
        setFormData(data);
      }
    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onSave(formData);
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Update User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="User Name"
            placeholder="UserName "
            value={formData?.storageName || ""}
            onChange={handleChange}
            name="storageName"
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="Contact Number"
            placeholder="+91 0000000000 "
            value={formData?.contact || ""}
            onChange={handleChange}
            name="contact"
          />
          <CFormInput
            className="mb-3"
            type="email"
            label="Gmail Address"
            placeholder="sample@gmail.com"
            value={formData?.email || ""}
            onChange={handleChange}
            name="email"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Address"
            placeholder="Address "
            value={formData?.address || ""}
            onChange={handleChange}
            name="address"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };


  return (
    <div className="m-5 mt-3">
      <div className="main-head">
        <h4 className=" fw-bold">Store / Employees</h4>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
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
        <PDFDownload columns={columns} data={filteredData} fileName="User_Store.pdf" title="User Management Store Data" />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add User" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onDelete={handleDelete}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        openEditModal={openEditModal}
      />

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewStorageCondition}
        />
      )}
      {isModalsOpen && (
        <ImportModal
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}

      {editModalData && (
        <EditModal
          visible={Boolean(editModalData)}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
};

export default Store;
