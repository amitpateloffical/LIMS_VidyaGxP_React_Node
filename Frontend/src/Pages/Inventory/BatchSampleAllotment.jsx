import {
  CButton,
  CCol,
  CFormInput,
  CModal,
  CForm,
  CModalFooter,
  CModalHeader,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
} from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useState } from "react";
import { Link } from "react-router-dom";

function BatchSampleAllotment() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [data, setData] = useState([
    {
      id: 1,
      BatchSampleID: "55",
      RegisteredOn: "55",
      status: "Active",
    },
    {
      id: 2,
      BatchSampleID: "55",
      RegisteredOn: "55",
      status: "Active",
    },
    {
      id: 3,
      BatchSampleID: "55",
      RegisteredOn: "55",
      status: "Active",
    },
    {
      id: 4,
      BatchSampleID: "55",
      RegisteredOn: "55",
      status: "Inactive",
    },
    {
      id: 5,
      BatchSampleID: "55",
      RegisteredOn: "55",
      status: "Inactive",
    },
    {
      id: 6,
      BatchSampleID: "55",
      RegisteredOn: "55",
      status: "Inactive",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const badgeStyle2 = { background: "green", color: "white", width: "110px" };
  const badgeStyle3 = { background: "red", color: "white", width: "110px" };

  const [search, setSearch] = useState("");

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);

  const filterData = () => {
    const filteredData =
      selectedStatus === "All"
        ? data
        : data.filter((item) => item.status === selectedStatus);
    return filteredData.filter((item) =>
      item.BatchSampleID.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredData = filterData();

  const nextPage = () =>
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(filteredData.length / pageSize))
    );
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setDeleteModal(false);
  };

  return (
    <>
      <div id="approval-page" className="m-5 mt-3">
     
          <div className="main-head">
          <h4 className="fw-bold ">BatchSample Allotment</h4>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100"></div>
          </div>
          <div>
            <CRow className="mb-3 mt-5">
              <CCol sm={3}>
                <CFormSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                  style={{ fontSize: "0.9rem" }}
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </CFormSelect>
              </CCol>
              <CCol sm={3}>
                <CFormInput
                  type="text"
                  style={{fontSize:'0.9rem'}}
                  placeholder="Search by Batch Sample ID"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </CCol>
              <CCol sm={6}>
                <div className="d-flex justify-content-end">
                  <CButton  style={{fontSize:'0.9rem'}} color="primary" onClick={() => setAddModal(true)}>
                    Batch Sample Allotment
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div
            className=" rounded bg-white"
            style={{
              fontFamily: "sans-serif",
              fontSize: "0.9rem",
              boxShadow: "5px 5px 20px #5D76A9",
            }}
          >
            <CTable
              align="middle"
              responsive
              className="mb-0    table-responsive"
            >
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
                    Batch Sample ID
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white" }}
                    scope="col"
                  >
                    Registered On
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
                {filteredData.slice(startIndex, endIndex).map((item, index) => (
                  <CTableRow key={item.id}>
                    <CTableHeaderCell className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                    <CTableDataCell>{item.BatchSampleID}</CTableDataCell>
                    <CTableDataCell>{item.RegisteredOn}</CTableDataCell>
                    <CTableDataCell >
                      <button
                        style={{
                          background:
                            item.status === "Active" ? "#15803d" : "#b91c1c",
                          color: "white",
                          width: "4rem",
                          fontSize: "0.6rem",
                          padding: "2px 7px",
                          borderRadius: "7px",
                        }}
                      >
                        {item.status}
                      </button>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to="/approval/1321">
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                        <div
                          className="cursor-pointer"
                          onClick={() => setAddModal(true)}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => setDeleteModal(item.id)}
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

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}

      {deleteModal && (
        <DeleteModal
          visible={deleteModal !== false}
          closeModal={() => setDeleteModal(false)}
          handleDelete={() => handleDelete(deleteModal)}
        />
      )}
    </>
  );
}

const StatusModal = (_props) => {
  return (
    <>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Batch Sample Allotment Registration</CModalTitle>
        </CModalHeader>

        <p className="ml-4">
          Add information and register new Batch Sample Allotment
        </p>
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Search By"
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Batch Sample ID"
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Registered On"
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Sample In-Charge"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
          </CForm>
        </div>

        <CModalFooter className="p-3">
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </>
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
        <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
          Delete Batch Sample Allotment
        </CModalTitle>
      </CModalHeader>
      <div
        className="modal-body"
        style={{
          fontSize: "1.2rem",
          fontWeight: "500",
          lineHeight: "1.5",
          marginBottom: "1rem",
          columnGap: "0px",
          border: "0px !important",
        }}
      >
        <p>Are you sure you want to delete this Batch Sample Allotment?</p>
      </div>
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
          onClick={_props.handleDelete}
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

export default BatchSampleAllotment;
