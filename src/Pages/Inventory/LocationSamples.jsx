import {
  CButton,
  CCol,
  // CFormInput,
  // CFormSelect,
  CModal,
  // CFormLabel,
  CFormInput,
  CForm,
  // CContainer,
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

function LocationSamples() {
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
      PlantName: "55",
      Facility: "55",
      Location: "PRD",
      Prefix: "PRD",
      LocationTypeId: "PRD",
      AddedOn: "PRD",

      status: "Active",
    },
    {
      id: 2,
      PlantName: "55",
      Facility: "55",
      Location: "PRD",
      Prefix: "PRD",
      LocationTypeId: "PRD",
      AddedOn: "PRD",

      status: "Active",
    },

    {
      id: 3,
      PlantName: "55",
      Facility: "55",
      Location: "PRD",
      Prefix: "PRD",
      LocationTypeId: "PRD",
      AddedOn: "PRD",

      status: "Active",
    },
    {
      id: 4,
      PlantName: "55",
      Facility: "55",
      Location: "PRD",
      Prefix: "PRD",
      LocationTypeId: "PRD",
      AddedOn: "PRD",

      status: "Inactive",
    },
    {
      id: 5,
      PlantName: "55",
      Facility: "55",
      Location: "PRD",
      Prefix: "PRD",
      LocationTypeId: "PRD",
      AddedOn: "PRD",

      status: "Inactive",
    },

    {
      id: 6,
      PlantName: "55",
      Facility: "55",
      Location: "PRD",
      Prefix: "PRD",
      LocationTypeId: "PRD",
      AddedOn: "PRD",

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
            <div className="title fw-bold fs-5 mb-5">Location Samples</div>
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
              {/* <CCol sm={3}>
                 <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>
                    Add OOA Template
                  </CButton> 
                </div>
              </CCol> */}
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
                  <CTableHeaderCell scope="col">Plant Name	</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Facility</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Location </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Prefix </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Location Type Id	 </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Added On </CTableHeaderCell>

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
                      <CTableDataCell key={item.id}>{item.Name}</CTableDataCell>

                      <CTableDataCell>{item.PlantName	}</CTableDataCell>
                      <CTableDataCell>{item.Facility}</CTableDataCell>
                      <CTableDataCell>{item.Location}</CTableDataCell>
                      <CTableDataCell>{item.Prefix}</CTableDataCell>
                      <CTableDataCell>{item.LocationTypeId	}</CTableDataCell>
                      <CTableDataCell>{item.AddedOn}</CTableDataCell>

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
        size="2xl"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Sampling Schedule Registration</CModalTitle>
        </CModalHeader>
        <p>Add information and register new Sampling Schedule</p>

        {/* <p>Add information and Add Coa Template</p> */}
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Schedule Code




                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Description



                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Frequency
               "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Tolerance
                "
                placeholder=""
                className="custom-placeholder"
              />
              <CButton color="info">Add</CButton>
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Start Date"
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="End Date
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Select User Group To Alert

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div>
              <table
                className="table table-bordered"
                style={{ background: "white" }}
              >
                <thead style={{ background: "lightblue" }}>
                  <th>Sno.</th>
                  <th>Plant</th>
                  <th>Facility</th>
                  <th>Location</th>
                  <th>Location ID</th>
                  <th>Location Description</th>
                  <th>Grade/Class</th>
                  <th>Monitoring Method</th>
                </thead>
                <tr>
                  <td>88541</td>
                  <td>88541</td>
                  <td>88541</td>
                  <td>88541</td>
                  <td>88541</td>
                  <td>88541</td>
                  <td>88541</td>
                  <td>88541</td>
                </tr>
              </table>
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Date of Monitoring


                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Monitored / Sampled By


                "
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
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default LocationSamples;
