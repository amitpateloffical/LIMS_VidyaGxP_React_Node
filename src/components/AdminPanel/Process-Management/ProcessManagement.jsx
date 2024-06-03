import React, { useState } from 'react'
import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import { FaArrowRight } from 'react-icons/fa';


export default function ProcessManagement() {

  const [data, setData] = useState([
    { id: '01', processName: 'Admin', processNumber: '121' },
    { id: '02', processName: 'Super Admin', processNumber: '122' },
    { id: '03', processName: 'User1', processNumber: '123' },
    { id: '04', processName: 'User2', processNumber: '124' },
    { id: '05', processName: 'User3', processNumber: '125' },
    { id: '06', processName: 'User4', processNumber: '126' },
    { id: '07', processName: 'User5', processNumber: '127' },
    { id: '08', processName: 'User6', processNumber: '128' },
    { id: '09', processName: 'User7', processNumber: '129' },
    { id: '10', processName: 'User8', processNumber: '130' }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextToLastPage = () => setCurrentPage(Math.ceil(data.length / pageSize));

  return (
    <div className="mx-5">
      <div className="row my-5 d-flex align-items-center justify-content-center">
        <div className="main-head d-flex justify-content-between">
          <div className="title fw-bold fs-5 py-4">Process</div>
        </div>
        <div className='w-75 h-96'>
          <div className="rounded bg-white pb-5" style={{ border: "2px solid gray" }}>
            <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col" >S.No</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col" >Process Number</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Process Name</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.slice(startIndex, endIndex).map((item, index) => (
                  <CTableRow key={item.id}>
                    <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                    <CTableDataCell>{item.processNumber}</CTableDataCell>
                    <CTableDataCell>{item.processName}</CTableDataCell>

                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>

          </div>
          <div className="d-flex justify-content-between align-items-center my-4">
            <div className="pagination">
              <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                &lt;&lt;
              </button>
              <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
              <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                &gt;&gt;
              </button>
            </div>
            <button className="btn d-flex align-items-center border" onClick={nextToLastPage}>
              Next <FaArrowRight className='ms-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
