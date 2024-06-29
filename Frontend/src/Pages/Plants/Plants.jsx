import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CFormTextarea,
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
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Plants() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null)
  const badgeStyle = { background: "green", color: "white", width: "110px" };
  const badgeStyle2 = { background: "red", color: "white", width: "110px", };
  const [selectedStatus, setSelectedStatus] = useState("All");

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([
    { id: 1, plantCode: "SHMDZ/102145", plantName: "Master", address: "Indore", registerOn: "Feb 11th 23", status: "Active" },
    { id: 2, plantCode: "hplc/0112", plantName: "win_master", address: "Maharashtra", registerOn: "Oct 15th 23", status: "Active" },
    { id: 3, plantCode: "XYZ/123", plantName: "Plant3", address: "City3", registerOn: "Mar 10th 23", status: "Inactive" },
    { id: 4, plantCode: "ABC/456", plantName: "Plant4", address: "City4", registerOn: "Apr 20th 23", status: "Active" },
    { id: 5, plantCode: "DEF/789", plantName: "Plant5", address: "City5", registerOn: "May 5th 23", status: "Inactive" },
    { id: 6, plantCode: "GHI/012", plantName: "Plant6", address: "City6", registerOn: "Jun 18th 23", status: "Active" },
    { id: 7, plantCode: "JKL/345", plantName: "Plant7", address: "City7", registerOn: "Jul 22nd 23", status: "Inactive" },
    { id: 8, plantCode: "MNO/678", plantName: "Plant8", address: "City8", registerOn: "Aug 30th 23", status: "Active" },
    { id: 9, plantCode: "PQR/901", plantName: "Plant9", address: "City9", registerOn: "Sep 14th 23", status: "Inactive" },
    { id: 10, plantCode: "STU/234", plantName: "Plant10", address: "City10", registerOn: "Oct 29th 23", status: "Active" },
  ]);

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
      item.plantCode.toLowerCase().includes(search.toLowerCase())
    );
  };
  
  const filteredData = filterData();

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setDeleteModal(false);
  };

  return (
    <>
      <div className="m-5 mt-3">
          <div className="main-head">
          <h4 className="fw-bold">Plant's</h4>
          </div>
          <div>
            <CRow className="mb-3 mt-5">
              <CCol sm={4}>
                <CFormInput
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  placeholder="Search..."
                  style={{fontSize:'0.9rem'}}
                >
                </CFormInput>
              </CCol>
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
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton style={{fontSize:'0.9rem'}}  color="primary" onClick={() => setAddModal(true)}>Add Plant</CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="rounded bg-white"
             style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}>
            <CTable align="middle" responsive className="table-responsive " >
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Plant Code</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Plant Name</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Address</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Register On</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData().slice(startIndex, endIndex)
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.plantCode.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                      <CTableDataCell key={item.id}>{item.plantCode}</CTableDataCell>
                      <CTableDataCell>{item.plantName}</CTableDataCell>
                      <CTableDataCell>{item.address}</CTableDataCell>
                      <CTableDataCell>{item.registerOn}</CTableDataCell>
                      <CTableDataCell >
                      <button
              style={{
                background:
                item.status === "Active" ? "#15803d" : "#b91c1c",
                color: "white",
                width: "80%",
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
                          <div className="cursor-pointer" onClick={() => setAddModal(true)}>
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
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length} >
                                &gt;&gt;
                            </button>
                        </div>
                       
                    </div>
      </div>
      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
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
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>Add Plant</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput type="text" className="mb-3" label="Name" placeholder="Name" />
        <CFormInput type="text" className="mb-3" label="Plant Code" placeholder="Plant Code" />
        <CFormInput type="text" className="mb-3" label="Address" placeholder="Address" />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Back</CButton>
        <CButton color="primary">Add</CButton>
      </CModalFooter>
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
        <CModalTitle>
          Delete Plant
        </CModalTitle>
      </CModalHeader>
      <CModalBody>

      <p className="fs-5">Do you want to delete this Plant</p>
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

export default Plants;
