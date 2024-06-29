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
import InternalRegistrationModal from "../Modals/InternalRegistrationModal";
import ViewModal from "../Modals/ViewModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    name: "Product 1",
    sequence: "Seq 1",
    additionalInfo: "Info 1",
    containerStart: "Start 1",
    sampleReference: "Ref 1",
    status: "DROPPED",
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
    name: "Product 2",
    sequence: "Seq 2",
    additionalInfo: "Info 2",
    containerStart: "Start 2",
    sampleReference: "Ref 2",
    status: "DROPPED",
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
    name: "Product 3",
    sequence: "Seq 3",
    additionalInfo: "Info 3",
    containerStart: "Start 3",
    sampleReference: "Ref 3",
    status: "REINITIATED",
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
    name: "Product 4",
    sequence: "Seq 4",
    additionalInfo: "Info 4",
    containerStart: "Start 4",
    sampleReference: "Ref 4",
    status: "APPROVED",
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
    name: "Product 5",
    sequence: "Seq 5",
    additionalInfo: "Info 5",
    containerStart: "Start 5",
    sampleReference: "Ref 5",
    status: "APPROVED",
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
    name: "Product 6",
    sequence: "Seq 6",
    additionalInfo: "Info 6",
    containerStart: "Start 6",
    sampleReference: "Ref 6",
    status: "APPROVED",
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
    name: "Product 7",
    sequence: "Seq 7",
    additionalInfo: "Info 7",
    containerStart: "Start 7",
    sampleReference: "Ref 7",
    status: "INITIATED",
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
    name: "Product 8",
    sequence: "Seq 8",
    additionalInfo: "Info 8",
    containerStart: "Start 8",
    sampleReference: "Ref 8",
    status: "REINITIATED",
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
    name: "Product 9",
    sequence: "Seq 9",
    additionalInfo: "Info 9",
    containerStart: "Start 9",
    sampleReference: "Ref 9",
    status: "APPROVED",
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
    name: "Product 10",
    sequence: "Seq 10",
    additionalInfo: "Info 10",
    containerStart: "Start 10",
    sampleReference: "Ref 10",
    status: "REJECTED",
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

const InternalRegistration = () => {
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
    return (
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData); // Set the data for ViewModal
    setIsViewModalOpen(true); // Open the ViewModal
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Product Name", accessor: "name" },
    { header: "Sequence No.", accessor: "sequence" },
    { header: "Additional Information", accessor: "additionalInfo" },
    { header: "Container Starting No.", accessor: "containerStart" },
    { header: "Sample Reference No.", accessor: "sampleReference" },
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
    setIsViewModalOpen(false);
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Material</h1>
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
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
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
        <div className="float-right">
          <ATMButton text="Add Internal" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
      />
      <InternalRegistrationModal
        visible={isModalOpen}
        closeModal={closeModal}
      />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
    </div>
  );
};

export default InternalRegistration;


