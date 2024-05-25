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
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
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
  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = {
    background: " green",
    color: "white",
    width: "110px",
  };
  const badgeStyle3 = { background: "red", color: "white", width: "110px" };

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
  const filterData = () => {
    if (selectedStatus === "All") {
      return data;
    }

    return data.filter((item) => item.status === selectedStatus);
  };

  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5 mb-5">EM COA Template</div>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100"></div>
          </div>
          <div>
            <CRow className="mb-3">
              <CCol sm={3}>
                <CFormSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                  style={{ border: "2px solid gray" }}
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </CFormSelect>
              </CCol>
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>
                    Add Coa Template
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white mt-5">
            <CTable align="middle" responsive className=" ">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Configuration Type{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Unique Code</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Report Title </CTableHeaderCell>

                  <CTableHeaderCell scope="col">Updated At</CTableHeaderCell>

                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData()
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.ConfigurationType.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{item.id}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.ConfigurationType}
                      </CTableDataCell>

                      <CTableDataCell>{item.UniqueCode}</CTableDataCell>
                      <CTableDataCell>{item.ReportTitle}</CTableDataCell>
                      <CTableDataCell>{item.UpdatedAt}</CTableDataCell>

                      <CTableDataCell className="d-flex">
                        <div
                          className="py-2 px-3 small rounded fw-bold"
                          style={
                            item.status === "Active"
                              ? badgeStyle2
                              : item.status === "Inactive"
                              ? badgeStyle3
                              : badgeStyle
                          }
                        >
                          {item.status}
                        </div>
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
                          <Link to="#">
                            <FontAwesomeIcon icon={faTrashCan} />
                          </Link>
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
              </CTableBody>
            </CTable>
          </div>
        </div>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
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

export default EMCOATemplate;
