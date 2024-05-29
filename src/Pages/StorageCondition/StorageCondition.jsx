import { useState } from "react";
import {
  CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow
} from "@coreui/react";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import "./StorageCondition.css";

function StorageLocation() {
  const [addModal, setAddModal] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const pageSize = 5;
  const [storageConditions, setStorageConditions] = useState([
    { code: 'na-001', condition: 'Product Material', date: '03/05/2024', status: 'ACTIVE', id: 1321 },
    { code: 'na-002', condition: 'Product Material', date: '02/05/2024', status: 'INACTIVE', id: 1322 },
    { code: 'na-003', condition: 'test Material', date: '01/05/2024', status: 'ACTIVE', id: 1323 },
    { code: 'na-004', condition: 'test Material', date: '30/04/2024', status: 'INACTIVE', id: 1324 },
    { code: 'na-005', condition: 'test Material', date: '29/04/2024', status: 'ACTIVE', id: 1325 },
    { code: 'na-006', condition: 'Product Material', date: '28/04/2024', status: 'INACTIVE', id: 1326 },
    { code: 'na-007', condition: 'Product Material', date: '27/04/2024', status: 'ACTIVE', id: 1327 },
    { code: 'na-008', condition: 'Product Material', date: '26/04/2024', status: 'INACTIVE', id: 1328 },
    { code: 'na-009', condition: 'Product Material', date: '25/04/2024', status: 'ACTIVE', id: 1329 },
    { code: 'na-010', condition: 'Product Material', date: '24/04/2024', status: 'INACTIVE', id: 1330 }
  ]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);  // Reset to the first page when searching
  };

  const handleFilter = (event) => {
    setFilterStatus(event.target.value);
    setCurrentPage(1);  // Reset to the first page when filtering
  };

  const handleDelete = (id) => {
    setStorageConditions(storageConditions.filter(item => item.id !== id));
  };

  const filteredConditions = storageConditions.filter(item => {
    return (
      (item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.condition.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterStatus === "" ||
        (filterStatus === "1" && item.status === "ACTIVE") ||
        (filterStatus === "0" && item.status === "INACTIVE"))
    );
  });

  const totalPages = Math.ceil(filteredConditions.length / pageSize);
  const paginatedConditions = filteredConditions.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <>
      <div className="m-4 p-4">
        <div className="container-fluid">
          <div className="main-head">
            <h4 className="fw-bold mb-4 mt-3">Storage Conditions</h4>
          </div>
          <div>
            <CRow className="my-5">
              <CCol sm={4}>
                <CFormInput
                  type="text"
                  placeholder="Search..."
                  className="border-2"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </CCol>
              <CCol sm={3}>
                <CFormSelect
                  value={filterStatus}
                  onChange={handleFilter}
                  className="border-2"
                  options={[
                    { disabled:true, label: 'Select Status', value: "" },
                    { label: 'All', value: "" },
                    { label: 'Active', value: '1' },
                    { label: 'Inactive', value: '0' }
                  ]}
                />
              </CCol>
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>Add Storage Condition</CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="p-4 shadow rounded border-2">
            <CTable align="middle" responsive className="mb-0">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                  <CTableHeaderCell scope="col">Condition Code</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Stability Storage Condition</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Created At</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {paginatedConditions.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{item.code}</CTableDataCell>
                    <CTableDataCell>{item.condition}</CTableDataCell>
                    <CTableDataCell>{item.date}</CTableDataCell>
                    <CTableDataCell className="d-flex">
                      <div className="py-2 px-3 small rounded fw-bold" style={item.status === 'ACTIVE' ? { background: "green", color: "white", width: "110px" } : { background: "red", color: "white", width: "110px" }}>{item.status}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to={`/approval/1321`}><FontAwesomeIcon icon={faEye} /></Link>
                        <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                        <div className="cursor-pointer" onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></div>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>
            <div className="d-flex justify-content-between my-4">
              <div className="d-flex gap-3">
                <CButton onClick={handlePreviousPage} disabled={currentPage === 1}>&lt; &lt;</CButton>
                <button className='btn border'>{currentPage}</button>
                <CButton onClick={handleNextPage} disabled={currentPage === totalPages}>&gt; &gt;</CButton>
              </div>
              <div>
                <CButton onClick={handleNextPage} className='d-flex gap-2 border' disabled={currentPage === totalPages}>Next <FaArrowRight className="mt-1"/></CButton>
              </div>
            </div>
        </div>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
      {delModal && <RemoveModal visible={delModal} closeModal={() => setDelModal(false)} />}
    </>
  );
}

const StatusModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>New Storage Condition</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput
          type="text"
          label="Name"
          placeholder="Storage Name"
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
        <CButton color="primary">Add</CButton>
      </CModalFooter>
    </CModal>
  );
};

const RemoveModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>Delete Storage Condition</CModalTitle>
      </CModalHeader>
      <CModalBody>
        Do you want to delete this Storage Condition <code>below 25°c (77°f) in a flammable cabinet</code>?
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
        <CButton color="primary">Submit</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default StorageLocation;
