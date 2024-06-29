import {
  CButton,
  CCol,
  CFormCheck,
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
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function BussinessAssociate() {
  const [addModal, setAddModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [deleteId, setDeleteId] = useState(null);
  const recordsPerPage = 5;

  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "stmp1",
      code: "stm",
      city: "ahmedabad",
      state: "gujarat",
      country: "India",
      zip: "54255455",
      status: "APPROVED",
    },
    {
      id: 2,
      name: "ARZ ENT",
      code: "ARE",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      zip: "5253654",
      status: "APPROVED",
    },
    {
      id: 3,
      name: "test",
      code: "NA",
      city: "testing525",
      state: "Lab1",
      country: "test",
      zip: "25255488",
      status: "APPROVED",
    },
    {
      id: 4,
      name: "Alpha",
      code: "ALP",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      zip: "400001",
      status: "INITIATED",
    },
    {
      id: 5,
      name: "Beta",
      code: "BET",
      city: "Delhi",
      state: "Delhi",
      country: "India",
      zip: "110001",
      status: "REINITIATED",
    },
    {
      id: 6,
      name: "Gamma",
      code: "GAM",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      zip: "700001",
      status: "REJECTED",
    },
    {
      id: 7,
      name: "Delta",
      code: "DEL",
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
      zip: "700001",
      status: "APPROVED",
    },
    {
      id: 8,
      name: "Epsilon",
      code: "EPS",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      zip: "570001",
      status: "APPROVED",
    },
    {
      id: 9,
      name: "Zeta",
      code: "ZET",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      zip: "411001",
      status: "INITIATED",
    },
    {
      id: 10,
      name: "Eta",
      code: "ETA",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      zip: "302001",
      status: "APPROVED",
    },
    {
      id: 11,
      name: "Theta",
      code: "THE",
      city: "Lucknow",
      state: "Uttar Pradesh",
      country: "India",
      zip: "227001",
      status: "REJECTED",
    },
    {
      id: 12,
      name: "Iota",
      code: "IOT",
      city: "Chandigarh",
      state: "Punjab",
      country: "India",
      zip: "170001",
      status: "APPROVED",
    },
    {
      id: 13,
      name: "Kappa",
      code: "KAP",
      city: "Bhopal",
      state: "Madhya Pradesh",
      country: "India",
      zip: "462001",
      status: "REINITIATED",
    },
  ]);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    setCurrentPage(1);
  };

  const handleChartClick = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const handleDelete = () => {
    setTableData((prevData) => prevData.filter((item) => item.id !== deleteId));
    setRemoveModal(false);
    setDeleteId(null);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setRemoveModal(true);
  };

  const filteredData =
    selectedStatus === "All"
      ? tableData
      : tableData.filter((data) => data.status === selectedStatus);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Business Associate</h4>
        </div>
        <div className="mt-3 d-flex gap-4">
          <div className="chart-widgets w-100">
            <div className="row">
              <div
                className="col shadow p-3 m-3 rounded cursor-pointer"
                style={{
                  background:
                    "linear-gradient(25deg, #0250c5 0%, #d43f8d 100%)",
                }}
                onClick={() => handleChartClick("DROPPED")}
              >
                <div className="text-light fs-5">DROPPED</div>
                <div className="count fs-1 text-light fw-bolder">
                  {tableData.filter((data) => data.status === "DROPPED").length}
                </div>
              </div>
              <div
                className="col shadow p-3 m-3 rounded cursor-pointer"
                style={{
                  background:
                    "linear-gradient(25deg, #13517a 6% , #2A5298 50%)",
                }}
                onClick={() => handleChartClick("INITIATED")}
              >
                <div className="text-light fs-5">INITIATED</div>
                <div className="count fs-1 text-light fw-bolder">
                  {
                    tableData.filter((data) => data.status === "INITIATED")
                      .length
                  }
                </div>
              </div>
              <div
                className="col shadow p-3 m-3 rounded cursor-pointer"
                style={{
                  background: "linear-gradient(25deg, orange , #f7e05f )",
                }}
                onClick={() => handleChartClick("REINITIATED")}
              >
                <div className="text-light fs-5">REINITIATED</div>
                <div className="count fs-1 text-light fw-bolder">
                  {
                    tableData.filter((data) => data.status === "REINITIATED")
                      .length
                  }
                </div>
              </div>
              <div
                className="col shadow p-3 m-3 rounded cursor-pointer"
                style={{
                  background: "linear-gradient(27deg, green , #0fd850  )",
                }}
                onClick={() => handleChartClick("APPROVED")}
              >
                <div className="text-light fs-5">APPROVED</div>
                <div className="count fs-1 text-light fw-bolder">
                  {
                    tableData.filter((data) => data.status === "APPROVED")
                      .length
                  }
                </div>
              </div>
              <div
                className="col shadow p-3 m-3 rounded cursor-pointer"
                style={{ background: "linear-gradient(27deg ,red, #FF719A)" }}
                onClick={() => handleChartClick("REJECTED")}
              >
                <div className="text-light fs-5">REJECTED</div>
                <div className="count fs-1 text-light fw-bolder">
                  {
                    tableData.filter((data) => data.status === "REJECTED")
                      .length
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CRow className="mb-3">
            <CCol sm={3}>
              <CFormSelect
                value={selectedStatus}
                style={{ fontSize: "0.9rem" }}
                onChange={handleStatusChange}
                options={[
                  { value: "All", label: "All" },
                  { value: "INITIATED", label: "Initiated" },
                  { value: "APPROVED", label: "Approved" },
                  { value: "REJECTED", label: "Rejected" },
                  { value: "REINITIATED", label: "Reinitiated" },
                  { value: "DROPPED", label: "Dropped" },
                ]}
              />
            </CCol>
            <CCol sm={3}></CCol>
            <CCol sm={3}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton
                  className=" text-white"
                  style={{ background: "#4B49B6", fontSize: "0.9rem" }}
                  onClick={() => setAddModal(true)}
                >
                  Add Associate
                </CButton>
              </div>
            </CCol>
          </CRow>
        </div>
        <div
          className="rounded bg-white"
          style={{
            fontFamily: "sans-serif",
            fontSize: "0.9rem",
            boxShadow: "5px 5px 20px #5D76A9",
          }}
        >
          <CTable className="mb-0 table table-responsive">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                  className="text-center"
                >
                  <input type="checkbox" />
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  S NO.
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Business Associate Name
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Unique Code
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  City
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  State
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Country
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  ZIP code
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Status
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Actions
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {currentRecords.map((data, index) => (
                <CTableRow key={data.id}>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>
                    {indexOfFirstRecord + index + 1}
                  </CTableDataCell>
                  <CTableDataCell>{data.name}</CTableDataCell>
                  <CTableDataCell>{data.code}</CTableDataCell>
                  <CTableDataCell>{data.city}</CTableDataCell>
                  <CTableDataCell>{data.state}</CTableDataCell>
                  <CTableDataCell>{data.country}</CTableDataCell>
                  <CTableDataCell>{data.zip}</CTableDataCell>
                  <CTableDataCell>
                    <button
                      className={`py-1 px-3 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
                        data.status === "INITIATED"
                          ? "blue-700"
                          : data.status === "APPROVED"
                          ? "green-700"
                          : data.status === "REJECTED"
                          ? "red-700"
                          : data.status === "REINITIATED"
                          ? "yellow-500"
                          : data.status === "DROPPED"
                          ? "purple-700"
                          : "white"
                      }`}
                      style={{ fontSize: "0.6rem" }}
                    >
                      {data.status}
                    </button>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-3">
                      <Link to="/settings/bussinessAssociateDetails">
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                      <div
                        className="cursor-pointer"
                        onClick={() => handleDeleteClick(data.id)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </div>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-4">
          <div className="pagination">
            <button
              style={{ background: "#21516a", color: "white" }}
              className="btn mr-2"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt; &lt;
            </button>
            <button className="btn mr-2 bg-dark-subtle rounded-circle">
              {currentPage}
            </button>
            <button
              style={{ background: "#21516a", color: "white" }}
              className="btn mr-2"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt; &gt;
            </button>
          </div>
        </div>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
      {removeModal && (
        <DeleteModel
          visible={removeModal}
          closeModal={() => handleDeleteClick(false)}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}

const StatusModal = (_props) => {
  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
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
        />
        <CFormCheck
          className="mb-3"
          type="checkbox"
          id="checkbox2"
          label="Supplier"
        />
        <CFormCheck
          className="mb-3"
          type="checkbox"
          id="checkbox3"
          label="Manufacturer"
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
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={<>Address : Line 2</>}
          placeholder="Address : Line 2"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={<>Address : Line 3</>}
          placeholder="Address : Line 3"
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
          required
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton className="bg-info text-white">Submit</CButton>
      </CModalFooter>
    </CModal>
  );
};

const DeleteModel = (_props) => {
  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
    >
      <CModalHeader>
        <CModalTitle>Delete Business Associate</CModalTitle>
      </CModalHeader>
      <CModalBody>
        Do you want to delete this Business Associate <code>ARZ ENT</code>?
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton className="bg-danger text-white" onClick={_props.handleDelete}>
          Delete
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default BussinessAssociate;
