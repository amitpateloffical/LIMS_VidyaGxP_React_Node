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
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function WorkFlow() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [data, setData] = useState([
    { id: 1, plantCode: '#12354', plantName: 'Travis', address: '102 humberto square', comments: 'Plastic Carolina', workflow: 'Approved' },
    { id: 2, plantCode: '#35623', plantName: 'Emmanuelle', address: '66159 Reichert Vista', comments: 'Metal', workflow: 'Rejected' },
    { id: 3, plantCode: '#45678', plantName: 'Oliver', address: '900 Main St', comments: 'Software', workflow: 'Pending' },
    { id: 4, plantCode: '#56789', plantName: 'Sophia', address: '850 Market St', comments: 'Pharmaceuticals', workflow: 'Rejected' },
    { id: 5, plantCode: '#67890', plantName: 'Liam', address: '45 Elm St', comments: 'Automotive', workflow: 'Approved' },
    { id: 6, plantCode: '#78901', plantName: 'Mason', address: '333 Pine St', comments: 'Textiles', workflow: 'Pending' },
    { id: 7, plantCode: '#89012', plantName: 'Ethan', address: '77 Oak St', comments: 'Chemicals', workflow: 'Approved' },
    { id: 8, plantCode: '#90123', plantName: 'Ava', address: '22 Birch St', comments: 'Electronics', workflow: 'Pending' },
    { id: 9, plantCode: '#01234', plantName: 'Emma', address: '555 Maple St', comments: 'Construction', workflow: 'Approved' },
    { id: 10, plantCode: '#12345', plantName: 'Noah', address: '88 Cedar St', comments: 'Food Processing', workflow: 'Rejected' }
  ]);

  const [selectedStatus, setSelectedStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; 

  const badgeStyles = {
    Approved: { background: "green", color: "white", width: "100px" },
    Rejected: { background: "red", color: "white", width: "100px" },
    Pending: { background: "orange", color: "white", width: "100px" },
  };

  const filterData = () => {
    const filteredData =
      selectedStatus === "All"
        ? data
        : data.filter(
          (item) => item.workflow.toUpperCase() === selectedStatus.toUpperCase()
        );
    return filteredData.filter((item) =>
      item.plantName.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredData = filterData();
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredData.length);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setDeleteModal(false);
  };

  return (
    <>
      <div className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5 py-4">Work Flow</div>
          </div>
          <div>
            <CRow className="mb-3">
              <CCol sm={3}>
                <CFormInput
                  type="text"
                  placeholder="Search by plant name"
                  className='border-dark-subtle border-2'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </CCol>
              <CCol sm={3}>
                <CFormSelect
                  className='border-dark-subtle border-2'
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                >
                  <option value="All">All</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Pending">Pending</option>
                </CFormSelect>

              </CCol>
              <CCol sm={3}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>Add Workflow</CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white mt-5 border-dark-subtle border-2 rounded">
            <CTable align="middle" responsive className="table-responsive table-striped">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Plant Code</CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Plant Name</CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Address</CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Comments</CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Workflow</CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredData.slice(startIndex, endIndex).map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{item.id}</CTableDataCell>
                    <CTableDataCell>{item.plantCode}</CTableDataCell>
                    <CTableDataCell>{item.plantName}</CTableDataCell>
                    <CTableDataCell>{item.address}</CTableDataCell>
                    <CTableDataCell>{item.comments}</CTableDataCell>
                    <CTableDataCell>
                      <div
                        className="py-2 px-3 small rounded fw-bold"
                        style={badgeStyles[item.workflow]}
                      >
                        {item.workflow}
                      </div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                        <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                        <div className="cursor-pointer" onClick={() => setDeleteModal(item.id)}><FontAwesomeIcon icon={faTrashCan} /></div>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="pagination">
              <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
              <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
              <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= filteredData.length}>&gt;&gt;</button>
            </div>
            <button className="btn d-flex gap-2 border-dark" onClick={nextToLastPage}>
              Next <FaArrowRight className="mt-1"/>
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

const StatusModal = ({ visible, closeModal }) => {
  return (
    <CModal alignment="center" visible={visible} onClose={closeModal}>
      <CModalHeader>
        <CModalTitle>New Plant</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput type="text" className="mb-3" label="Name" placeholder=" Name" />
        <CFormInput type="text" className="mb-3" label="Unique Code" placeholder="Unique Code" />
        <CFormInput type="text" className="mb-3" label="Generic Name" placeholder="Generic Name " />
        <CFormInput type="text" className="mb-3" label="Re-testing Period(Days)" placeholder="Re-testing Period(Days)" />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={closeModal}>Back</CButton>
        <CButton color="primary">Add New</CButton>
      </CModalFooter>
    </CModal>
  );
};

const DeleteModal = ({ visible, closeModal, handleDelete }) => {
  return (
    <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
      <CModalHeader>
        <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
          Delete Plants Workflow
        </CModalTitle>
      </CModalHeader>
      <CModalBody style={{ fontSize: "1.2rem", fontWeight: "500", lineHeight: "1.5", marginBottom: "1rem", columnGap: "0px", border: "0px !important" }}>
        <p>Do you want to delete this plants workflow?</p>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={closeModal} style={{ marginRight: "0.5rem", fontWeight: "500" }}>Cancel</CButton>
        <CButton color="danger" onClick={handleDelete} style={{ fontWeight: "500", color: "white" }}>Delete</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default WorkFlow;
