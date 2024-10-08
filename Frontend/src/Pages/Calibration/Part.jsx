import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export default function Part() {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = {
    background: " #2A5298",
    color: "white",
    width: "110px",
  };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const StatusModal = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle> Add Calibration Type</CModalTitle>
        </CModalHeader>
        <p className="ms-3 m-2">Add information and add new calibration type</p>
        <CModalBody>
          <CFormInput
            label="Calibration Type"
            className="mb-3"
            type="text"
            placeholder="Calibration Type"
          />
          <CFormInput
            label="Calibration Type Prefix"
            className="mb-3"
            type="text"
            placeholder="Calibration Type Prefix"
          />

          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={_props.closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50">Submit</CButton>
          </div>
        </CModalBody>
      </CModal>
    );
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
          <p>Are you sure you want to delete this Calibration type?</p>
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

  const handleDeleteClick = (index) => {
    setDeleteId(index);
    setDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((_, index) => index !== deleteId)
    );
    setDeleteModal(false);
  };

  const [employees, setEmployees] = useState([
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INACTIVE",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INACTIVE",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INACTIVE",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INACTIVE",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const pageSize = 5;

  const filteredEmployees = employees.filter((employee) =>
    selectedStatus === "All"
      ? true
      : employee.status === selectedStatus.toUpperCase()
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  const deleteEmployee = () => {
    const newEmployees = employees.filter(
      (_, index) => index !== employeeToDelete
    );
    setEmployees(newEmployees);
    setDeleteModal(false);
  };

  const openDeleteModal = (index) => {
    setEmployeeToDelete(index);
    setDeleteModal(true);
  };

  const openEditModal = (index) => {
    setEmployeeToEdit({
      ...filteredEmployees[startIndex + index],
      index: startIndex + index,
    });
    setEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEmployeeToEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveEmployee = () => {
    const updatedEmployees = employees.map((employee, index) =>
      index === employeeToEdit.index ? { ...employeeToEdit } : employee
    );
    setEmployees(updatedEmployees);
    setEditModal(false);
  };

  const renderRows = () => {
    return filteredEmployees
      .slice(startIndex, endIndex)
      .map((employee, index) => (
        <tr key={index}>
          <td>{startIndex + index + 1}</td>
          <td>{employee.user}</td>
          <td>{employee.role}</td>
          <td>{employee.addedBy}</td>
          <td className="d-flex">
            <button
              style={{
                background:
                  employee.status === "ACTIVE" ? "#15803d" : "#b91c1c",
                color: "white",
                width: "4rem",
                fontSize: "0.6rem",
                padding: "2px 7px",
                borderRadius: "7px",
              }}
            >
              {employee.status}
            </button>
          </td>
          <td>
            <div className="d-flex gap-3">
              <div className="cursor-pointer" onClick={() => setAddModal(true)}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </div>
              <Link
                to="#"
                onClick={() => handleDeleteClick(startIndex + index)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </Link>
            </div>
          </td>
        </tr>
      ));
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextToLastPage = () => {
    setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
  };

  return (
    <>
      <div className="m-5 mt-3">
        <h4 className="fw-bold ">Calibrations Part</h4>

        <CRow className="d-flex justify-content-between mt-5 mb-3">
          <CCol sm={3}>
            <CFormSelect
              onChange={(e) => setSelectedStatus(e.target.value)}
              value={selectedStatus}
              className="border-2"
              style={{ fontSize: "0.9rem" }}
              options={[
                { label: "All", value: "All" },
                { label: "Active", value: "active" },
                { label: "Inactive", value: "inactive" },
              ]}
            />
          </CCol>

          <CCol sm={3}>
            <div className="d-flex justify-content-end">
              <CButton
                color="primary"
                style={{ fontSize: "0.9rem" }}
                onClick={() => setAddModal(true)}
              >
                Calibration Type
              </CButton>
            </div>
          </CCol>
        </CRow>

        {/* Employee table */}
        <div
          className=" rounded bg-white"
          style={{
            fontFamily: "sans-serif",
            fontSize: "0.9rem",
            boxShadow: "5px 5px 20px #5D76A9",
          }}
        >
          <table className="table table-responsive    text-xs">
            <thead>
              <tr>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  Sr.no.
                </th>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  Calibration Type
                </th>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  Calibration Prefix
                </th>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  Added On
                </th>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  Status
                </th>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-4">
          <div className="pagination">
            <button
              style={{ background: "#21516a", color: "white" }}
              className="btn mr-2"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              &lt;&lt;
            </button>
            <button className="btn mr-2 bg-dark-subtle rounded-circle">
              {currentPage}
            </button>
            <button
              style={{ background: "#21516a", color: "white" }}
              className="btn mr-2"
              onClick={nextPage}
              disabled={endIndex >= employees.length}
            >
              &gt;&gt;
            </button>
          </div>
        </div>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
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
