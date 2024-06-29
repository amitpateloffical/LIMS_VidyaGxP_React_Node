import {
  CButton,
  CCol,
  // CFormInput,
  // CFormSelect,
  CModal,
  CFormLabel,
  CFormInput,
  CForm,
  CContainer,
  // CFormCheck,
  CModalFooter,
  CModalHeader,
  // CDropdown,
  // CDropdownToggle,
  // CDropdownMenu,
  // CDropdownItem,
  // CDropdownDivider,
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
import React from 'react';

import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function EMCOATemplate() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [data, setData] = useState([
    {
      id: 1,
      ConfigurationType: "55",
      UniqueCode: "55",
      ReportTitle: "PRD",
      UpdatedAt: "PRD",

      status: "Active",
    },
    {
      id: 2,
      ConfigurationType: "55",
      UniqueCode: "55",
      ReportTitle: "PRD",
      UpdatedAt: "PRD",

      status: "Active",
    },

    {
      id: 3,
      ConfigurationType: "55",
      UniqueCode: "55",
      ReportTitle: "PRD",
      UpdatedAt: "PRD",
      status: "Active",
    },
    {
      id: 4,
      ConfigurationType: "55",
      UniqueCode: "55",
      ReportTitle: "PRD",
      UpdatedAt: "PRD",

      status: "Inactive",
    },
    {
      id: 5,
      ConfigurationType: "55",
      UniqueCode: "55",
      ReportTitle: "PRD",
      UpdatedAt: "PRD",

      status: "Inactive",
    },

    {
      id: 6,
      ConfigurationType: "55",
      UniqueCode: "55",
      ReportTitle: "PRD",
      UpdatedAt: "PRD",

      status: "Inactive",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const badgeStyle = { background: "gray", color: "white", width: "110px" };

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
      item.ConfigurationType.toLowerCase().includes(search.toLowerCase())
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
          <h4 className="fw-bold ">EM COA Template</h4>
          </div>
          <div className="d-flex gap-4 mt-5">
            <div className="chart-widgets w-100"></div>
          </div>
          <div>
            <CRow className="mb-3">
              <CCol sm={3}>
                <CFormSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                  style={{fontSize:'0.9rem'}}
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </CFormSelect>
              </CCol>
              {/* <CCol sm={2}></CCol> */}
              <CCol sm={9}>
                <div className="d-flex justify-content-end">
                  <CButton  style={{fontSize:'0.9rem'}} color="primary" onClick={() => setAddModal(true)}>
                    Add Coa Template
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
  <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
          <CTable align="middle" responsive className="mb-0    table-responsive">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">
                    Configuration Type{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Unique Code</CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Report Title </CTableHeaderCell>

                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Updated At</CTableHeaderCell>

                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData().slice(startIndex
                  ,endIndex
                )
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.ConfigurationType.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.ConfigurationType}
                      </CTableDataCell>

                      <CTableDataCell>{item.UniqueCode}</CTableDataCell>
                      <CTableDataCell>{item.ReportTitle}</CTableDataCell>
                      <CTableDataCell>{item.UpdatedAt}</CTableDataCell>

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
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add COA Template</CModalTitle>
        </CModalHeader>

        <p>Add information and Add Coa Template</p>
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Configuration type


                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Unique Code


                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Report Title


                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Format No.



                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div style={{ background: "lightgray", padding: "5px auto " }}>
              <p>Header</p>
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Rows
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Columns

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div style={{ background: "lightgray", padding: "5px auto " }}>
              <p>Footer</p>
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Rows
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Columns

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <CContainer>
              <CRow className="my-3">
                <CCol xs="auto">
                  <CFormLabel
                    htmlFor="approved_by"
                    className="d-flex align-items-center"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "5px",
                      padding: "8px",
                      background: "#F5F6FA",
                    }}
                  >
                    Approved By
                  </CFormLabel>
                </CCol>
                <CCol>
                  <CFormSelect id="approved_by">
                    <option value="approved_by">approved_by</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="my-3">
                <CCol xs="auto">
                  <CFormLabel
                    htmlFor="reviewed_by"
                    className="d-flex align-items-center"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "5px",
                      padding: "8px",
                      background: "#F5F6FA",
                    }}
                  >
                    Reviewed By
                  </CFormLabel>
                </CCol>
                <CCol>
                  <CFormSelect id="reviewed_by">
                    <option value="reviewed_by">reviewed_by</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="my-3">
                <CCol xs="auto">
                  <CFormLabel
                    htmlFor="checked_by"
                    className="d-flex align-items-center"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "5px",
                      padding: "8px",
                      background: "#F5F6FA",
                    }}
                  >
                    Checked By
                  </CFormLabel>
                </CCol>
                <CCol>
                  <CFormSelect id="checked_by">
                    <option value="checked_by">checked_by</option>
                  </CFormSelect>
                </CCol>
              </CRow>
            </CContainer>
          </CForm>
        </div>

        <CModalFooter className="p-3">
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add
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

export default EMCOATemplate;
