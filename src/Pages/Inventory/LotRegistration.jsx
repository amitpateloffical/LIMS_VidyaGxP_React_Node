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
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function LotRegistration() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
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

  const [selectedStatus, setSelectedStatus] = useState("All");
  const [data, setData] = useState([
    {
      id: 1,
      ChemicalRegeantName: "stmp1",
      ChemicalRegeantLotNo: "describe",
      NoofContainers: "isubus111",

      status: "APPROVED",
    },
    {
      id: 2,
      ChemicalRegeantName: "stmp1",
      ChemicalRegeantLotNo: "describe",
      NoofContainers: "isubus111",
      status: "DROPPED",
    },

    {
      id: 3,
      ChemicalRegeantName: "stmp1",
      ChemicalRegeantLotNo: "describe",
      NoofContainers: "isubus111",
      status: "REJECTED",
    },
    {
      id: 4,
      ChemicalRegeantName: "Alpha",
      ChemicalRegeantLotNo: "describe",
      NoofContainers: "isubus111",
      status: "APPROVED",
    },
    {
      id: 5,
      ChemicalRegeantName: "stmp1",
      ChemicalRegeantLotNo: "describe",
      NoofContainers: "isubus111",
      status: "REINITIATED",
    },

    {
      id: 6,
      ChemicalRegeantName: "Alpha",
      ChemicalRegeantLotNo: "describe",
      NoofContainers: "isubus111",
      status: "APPROVED",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const [search, setSearch] = useState("");

  const filterData = () => {
    const filteredData =
      selectedStatus === "All"
        ? data
        : data.filter(
            (item) => item.status.toUpperCase() === selectedStatus.toUpperCase()
          );
    return filteredData.filter((item) =>
      item.ChemicalRegeantName.toLowerCase().includes(search.toLowerCase())
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
           <h4 className="fw-bold ">Chemical Lot Registration</h4>
          </div>
          <div className="d-flex gap-4 mt-3">
            <div className="chart-widgets w-100">
              <div className="">
              <div className="row" style={{ cursor: "pointer" }}>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(25deg, #0250c5 0%, #d43f8d 100%)",

                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("DROPPED")}
                >
                  <div className="text-light font-bold fs-5">DROPPED</div>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white" }}
                  >
                    {
                      filterData().filter((item) => item.status === "DROPPED")
                        .length
                    }
                  </div>
                </button>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(25deg, #13517a 6% , #2A5298 50%)",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("INITIATED")}
                >
                  <div className="text-light font-bold fs-5">INITIATED</div>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white" }}
                  >
                    {
                      filterData().filter((item) => item.status === "INITIATED")
                        .length
                    }
                  </div>
                </button>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(25deg, orange , #f7e05f )",

                    textAlign: "left",
                    boxShadow: "0px 10px 20px  black !important",
                  }}
                  onClick={() => setSelectedStatus("REINITIATED")}
                >
                  <div className="text-light font-bold fs-5">REINITIATED</div>

                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white" }}
                  >
                    {
                      filterData().filter(
                        (item) => item.status === "REINITIATED"
                      ).length
                    }
                  </div>
                </button>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(27deg, green , #0fd850  )",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("APPROVED")}
                >
                  <butto className="text-light font-bold fs-5">APPROVED</butto>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white", textAlign: "left" }}
                  >
                    {
                      filterData().filter((item) => item.status === "APPROVED")
                        .length
                    }
                  </div>
                </button>

                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(27deg ,red, #FF719A)",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("REJECTED")}
                >
                  <div className="text-light font-bold fs-5">REJECTED</div>
                  <div className="count fs-1 text-light fw-bolder">
                    {
                      filterData().filter((item) => item.status === "REJECTED")
                        .length
                    }
                  </div>
                </button>
              </div>
              </div>
            </div>
          </div>
          <div>
            <CRow className="mb-3">
              <CCol sm={4}>
                <CFormInput
                  style={{fontSize:'0.9rem'}}
                  type="email"
                  placeholder="Search..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </CCol>

              <CCol sm={3}>
                <CFormSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                  style={{fontSize:'0.9rem'}}
                >
                  <option value="All">All</option>
                  <option value="Initiated">Initiated</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Reinitiated">Reinitiated</option>
                  <option value="Dropped">Dropped</option>
                </CFormSelect>
              </CCol>
              
              <CCol sm={5}>
                <div className="d-flex justify-content-end">
                  <CButton  style={{fontSize:'0.9rem'}} color="primary" onClick={() => setAddModal(true)}>
                    Add Solutions
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
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}}  scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}}  scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}}  scope="col">
                    {" "}
                    Chemical / Regeant Name{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}}  scope="col">
                    Chemical / Regeant Lot No{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}}  scope="col">
                    No of Containers
                  </CTableHeaderCell>

                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}}  scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}}  scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData()
                  .slice(startIndex, endIndex)
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.ChemicalRegeantName.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.ChemicalRegeantName}
                      </CTableDataCell>

                      <CTableDataCell>
                        {item.ChemicalRegeantLotNo}
                      </CTableDataCell>
                      <CTableDataCell>{item.NoofContainers}</CTableDataCell>

                      <CTableDataCell>
                        <button  
                        className={`py-1 px-3 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
                          item.status === "INITIATED"
                            ? "blue-700"
                            : item.status === "APPROVED"
                            ? "green-700"
                            : item.status === "REJECTED"
                            ? "red-700"
                            : item.status === "REINITIATED"
                            ? "yellow-500"
                            : item.status === "DROPPED"
                            ? "purple-700"
                            : "white"
                        }`} style={{fontSize:'0.6rem'}}
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
                          <CTableDataCell>
                            <div
                              className="cursor-pointer"
                              onClick={() => setDeleteModal(item.id)}
                            >
                              <FontAwesomeIcon icon={faTrashCan} />
                            </div>
                          </CTableDataCell>
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
        <CModalHeader>
          <CModalTitle>Lot Registration</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "13px" }}>Add information</p>
        <CModalBody>
          <p style={{ fontWeight: "800", fontSize: "19px" }}>Registration Initiation</p>
          <CFormSelect
            type="text"
            label="Chemical / Reagent Name"
            placeholder="Chemical / Reagent Name"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="CAS / CAT No"
            placeholder="CAS / CAT No"
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="text"
            label="Delivery Receipt No"
            placeholder="Delivery Receipt No"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="CAS / CAT no."
            placeholder="Enter CAS"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="text"
            label="Certificate"
            placeholder="Certificate"
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="number"
            label="No. Of Containers"
            placeholder="No. Of Containers"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Lot Quantity Received"
            placeholder="Lot Quantity Received"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Usage Quantity"
            placeholder="Usage Quantity"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="number"
            label="Received by"
            placeholder="Received by"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Received On"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Supplied by"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <p style={{ fontWeight: "bolder" }}>Inventory Control</p>

          <CFormSelect
            type="number"
            label="Manufactured By"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="number"
            label="Manufacture's Batch No / Lot No."
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="number"
            label="Storage Location"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          
          <CFormInput
            type="date"
            label="Expiry Date"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Potency"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="text"
            label="UOM"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Water Content"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="text"
            label="UOM"
            placeholder="select"
            className="custom-placeholder mb-3"
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              marginBottom: "1rem"
            }}
          >
            <label>Comments</label>
            <textarea name="" id="" className="form-control"></textarea>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Chemical
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

export default LotRegistration;
