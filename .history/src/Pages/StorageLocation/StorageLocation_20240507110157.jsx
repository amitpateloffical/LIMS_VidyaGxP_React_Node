import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

function StorageLocation() {
     const [addModal, setAddModal] = useState(false)
     const badgeStyle = { background: "#cdffca" }
     return (
          <>

               <div id="approval-page" className="py-3 bg-light h-100">
                    <div className="container-fluid">
                         <div className="main-head">
                              <h4 className="fw-bold mb-4 mt-3">Storage Locations</h4>
                         </div>
                         <div>
                              <CRow className="mb-3">
                                   <CCol sm={4}>
                                        <CFormInput
                                             type="email"
                                             placeholder="Search..."
                                        />
                                   </CCol>
                                   <CCol sm={3}>
                                        <CFormSelect
                                             options={[
                                                  'Select Status',
                                                  { label: 'Active', value: '1' },
                                                  { label: 'Inactive', value: '0' }
                                             ]}
                                        />
                                   </CCol>
                                   <CCol sm={2}></CCol>
                                   <CCol sm={3}>
                                        <div className="d-flex justify-content-end">
                                             <CButton color="dark" onClick={() => setAddModal(true)}>Add Storage Location</CButton>
                                        </div>
                                   </CCol>
                              </CRow>
                         </div>
                         <div className="bg-white">
                              <CTable align="middle" responsive className="mb-0">
                                   <CTableHead>
                                        <CTableRow>
                                             <CTableHeaderCell scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Storage Code</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Storage Name</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                        </CTableRow>
                                   </CTableHead>
                                   <CTableBody>
                                        <CTableRow>
                                             <CTableHeaderCell scope="row" className="text-center">
                                                  <input type="checkbox" />
                                             </CTableHeaderCell>
                                             <CTableDataCell>na-002</CTableDataCell>
                                             <CTableDataCell>Product Material</CTableDataCell>
                                             <CTableDataCell className="d-flex">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>ACTIVE</div>
                                             </CTableDataCell>
                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
                                                       <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                                       <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                       <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
                                                  </div>
                                             </CTableDataCell>
                                        </CTableRow>
                                   </CTableBody>
                              </CTable>
                         </div>
                    </div>
               </div>

               {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}

          </>
     )
}

const StatusModal = (_props) => {
     return (
          <>

               <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                    <CModalHeader>
                         <CModalTitle>Storage Location</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                         <CFormInput
                              type="text"
                              label="Name"
                              placeholder="Location Name"
                         />
                    </CModalBody>
                    <CModalFooter>
                         <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
                         <CButton color="dark">Add</CButton>
                    </CModalFooter>
               </CModal>

          </>
     )
}

export default StorageLocation
