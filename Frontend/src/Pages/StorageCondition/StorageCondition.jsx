import { useState } from "react";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    conditionCode: "CC1",
    storageCondition: "SC1",
    createdAt: "2023-01-01",
    status: "Active",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 2,
    conditionCode: "CC2",
    storageCondition: "SC2",
    createdAt: "2023-02-01",
    status: "Active",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 3,
    conditionCode: "CC3",
    storageCondition: "SC3",
    createdAt: "2023-03-01",
    status: "Inactive",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 4,
    conditionCode: "CC4",
    storageCondition: "SC4",
    createdAt: "2023-04-01",
    status: "Active",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 5,
    conditionCode: "CC5",
    storageCondition: "SC5",
    createdAt: "2023-05-01",
    status: "Inactive",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 6,
    conditionCode: "CC6",
    storageCondition: "SC6",
    createdAt: "2023-06-01",
    status: "Active",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 7,
    conditionCode: "CC7",
    storageCondition: "SC7",
    createdAt: "2023-07-01",
    status: "Inactive",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 8,
    conditionCode: "CC8",
    storageCondition: "SC8",
    createdAt: "2023-08-01",
    status: "Active",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 9,
    conditionCode: "CC9",
    storageCondition: "SC9",
    createdAt: "2023-09-01",
    status: "Inactive",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 10,
    conditionCode: "CC10",
    storageCondition: "SC10",
    createdAt: "2023-10-01",
    status: "Active",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
];

function StorageLocation() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [delModal, setDelModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.conditionCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const StatusModal = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>New Storage Condition</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput type="text" label="Name" placeholder="Storage Name" />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton color="primary">Add</CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Condition Code", accessor: "conditionCode" },
    { header: "Stability Storage Condition", accessor: "storageCondition" },
    { header: "Created At", accessor: "createdAt" },
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
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
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
    setViewModalData(false);
  };

  const DeleteModal = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Delete User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Are you sure you want to delete this storage?</p>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="secondary"
            onClick={_props.closeModal}
            style={{
              marginRight: "0.5rem",
              fontWeight: "500",
            }}
          >
            Cancel
          </CButton>
          <CButton
            color="danger"
            onClick={_props.confirmDelete}
            style={{
              fontWeight: "500",
              color: "white",
            }}
          >
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const handleDeleteConfirm = () => {
    setStorageConditions((prevConditions) =>
      prevConditions.filter((condition) => condition.id !== deleteId)
    );
    setDeleteModal(false);
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Storage Conditions</h4>
        </div>

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
          <div className="float-right">
            <ATMButton
              text="Add Storage Condition"
              color="blue"
              onClick={openModal}
            />
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
        />
      </div>

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} />
      )}
      {viewModalData && (
        <ViewModal visible={viewModalData} closeModal={closeViewModal} />
      )}
      {delModal && (
        <RemoveModal visible={delModal} closeModal={() => setDelModal(false)} />
      )}
      {deleteModal && (
        <DeleteModal
          visible={deleteModal}
          closeModal={() => setDeleteModal(false)}
          confirmDelete={handleDeleteConfirm}
        />
      )}
    </>
  );
}

export default StorageLocation;