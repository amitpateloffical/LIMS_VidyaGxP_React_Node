import { CButton, CCol, CFormCheck, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useState } from "react";
import { Link } from "react-router-dom";

function Registration() {
     const pageSize = 5;
     const [currentPage, setCurrentPage] = useState(1);
     const [addModal, setAddModal] = useState(false);
     const [deleteModal, setDeleteModal] = useState(false);
     const [deleteId, setDeleteId] = useState(null);
     const [selectedStatus, setSelectedStatus] = useState("All");

     const [data, setData] = useState([
          {
               id: 1,
               category: 'weighing balance',
               instrumentID: 'EN33/23',
               instrument: 'Weighing Balance 2',
               made: 'Shimadu',
               model: 'Ser33',
               manuNo: 'adf3434',
               installedAt: 'Lab 1',
               expireOn: 'Nov 17th 24',
               status: 'Active',
               calibrationStatus: 'Active'
          },
          {
               id: 2,
               category: 'chromatography',
               instrumentID: 'EQI/ENG/163',
               instrument: 'Pressure Gauge',
               made: 'Testo',
               model: '625',
               manuNo: '2320474',
               installedAt: 'Plant1',
               expireOn: 'Jan 5th 24',
               status: 'Active',
               calibrationStatus: 'Pending'
          },
          {
               id: 3,
               category: 'weighing balance',
               instrumentID: 'ARZPH001',
               instrument: 'ARZ Ph Meter',
               made: 'PHMKE23',
               model: 'MKPJ32',
               manuNo: 'MS4543',
               installedAt: 'Plant A',
               expireOn: 'May 9th 24',
               status: 'Active',
               calibrationStatus: 'Active'
          },
          {
               id: 4,
               category: 'chromatography',
               instrumentID: 'CH12345',
               instrument: 'Gas Chromatograph',
               made: 'Agilent',
               model: '7890B',
               manuNo: 'GC7890B',
               installedAt: 'Lab 2',
               expireOn: 'Dec 31st 24',
               status: 'Inactive',
               calibrationStatus: 'Active'
          },
          {
               id: 5,
               category: 'weighing balance',
               instrumentID: 'WB54321',
               instrument: 'Analytical Balance',
               made: 'Mettler Toledo',
               model: 'XPR106DU',
               manuNo: 'XPR106DU123',
               installedAt: 'Lab 3',
               expireOn: 'Sep 1st 24',
               status: 'Active',
               calibrationStatus: 'Pending'
          },
          {
               id: 6,
               category: 'chromatography',
               instrumentID: 'LC65432',
               instrument: 'Liquid Chromatograph',
               made: 'Waters',
               model: '2695',
               manuNo: '26954321',
               installedAt: 'Plant B',
               expireOn: 'Aug 15th 24',
               status: 'Inactive',
               calibrationStatus: 'Pending'
          },
          {
               id: 7,
               category: 'weighing balance',
               instrumentID: 'WB67890',
               instrument: 'Microbalance',
               made: 'Sartorius',
               model: 'Cubis II',
               manuNo: 'CII67890',
               installedAt: 'Lab 4',
               expireOn: 'Jul 20th 24',
               status: 'Active',
               calibrationStatus: 'Active'
          },
          {
               id: 8,
               category: 'chromatography',
               instrumentID: 'HPLC1234',
               instrument: 'HPLC System',
               made: 'Thermo Fisher',
               model: 'Dionex',
               manuNo: 'HPLC1234',
               installedAt: 'Plant C',
               expireOn: 'Jun 30th 24',
               status: 'Active',
               calibrationStatus: 'Pending'
          },
          {
               id: 9,
               category: 'weighing balance',
               instrumentID: 'WB43210',
               instrument: 'Precision Balance',
               made: 'Ohaus',
               model: 'Pioneer',
               manuNo: 'P123456',
               installedAt: 'Lab 5',
               expireOn: 'Oct 10th 24',
               status: 'Inactive',
               calibrationStatus: 'Active'
          },
          {
               id: 10,
               category: 'chromatography',
               instrumentID: 'GCMS5678',
               instrument: 'GC-MS System',
               made: 'PerkinElmer',
               model: 'Clarus 690',
               manuNo: 'GCMS5678',
               installedAt: 'Plant D',
               expireOn: 'Mar 25th 24',
               status: 'Active',
               calibrationStatus: 'Pending'
          }
     ]);
     const startIndex = (currentPage - 1) * pageSize;
     const endIndex = Math.min(startIndex + pageSize, data.length);

     const filteredData =
          selectedStatus === 'All'
               ? data
               : data.filter
                    (item => item.status.toUpperCase() === selectedStatus.toUpperCase()
               );

     const nextPage = () => setCurrentPage(currentPage + 1);
     const prevPage = () => setCurrentPage(currentPage - 1);


     const handleDeleteClick = (id) => {
          setDeleteId(id);
          setDeleteModal(true);
     };

     const handleDeleteConfirm = () => {
          setData(data.filter((item) => item.id !== deleteId));
          setDeleteModal(false);
          setDeleteId(null);
     };


     return (
          <>
               <div className="m-5 mt-3">
                    <div className="main-head">
                         <h4 className="fw-bold">Instrument Registration</h4>
                    </div>
                    <div>
                         <CRow className="mt-5 mb-3">
                              <CCol sm={3}>
                                   <CFormSelect
                                        options={[{ label: "All" }, { label: "Active" }, { label: "Inactive" }]}
                                        onChange={(e) => setSelectedStatus(e.target.value)}
                                        value={selectedStatus} style={{ fontSize: '0.9rem' }}
                                   />
                              </CCol>
                              <CCol sm={3}>
                                   <CFormSelect
                                        options={[
                                             'Select Instrument Category',
                                             { label: 'Chromatography' },
                                             { label: 'Weighing balance' }
                                        ]}
                                        style={{ fontSize: '0.9rem' }}
                                   />
                              </CCol>
                              <CCol sm={3}></CCol>
                              <CCol sm={3}>
                                   <div className="d-flex justify-content-end">
                                        <CButton
                                             className=" text-white"
                                             style={{ background: "#4B49B6", fontSize: '0.9rem' }}
                                             onClick={() => setAddModal(true)}
                                        >
                                             Instrument Registration
                                        </CButton>
                                   </div>
                              </CCol>
                         </CRow>
                    </div>
                    <div
                         className=" rounded bg-white"
                         style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
                    >
                         <CTable className="mb-0 table table-responsive" >
                              <CTableHead>
                                   <CTableRow >
                                        <CTableHeaderCell
                                             style={{ background: "#5D76A9", color: "white" }}
                                             scope="col"
                                        >S NO.</CTableHeaderCell>
                                        <CTableHeaderCell
                                             style={{ background: "#5D76A9", color: "white" }}
                                             scope="col"
                                        >Category</CTableHeaderCell>
                                        <CTableHeaderCell
                                             style={{ background: "#5D76A9", color: "white" }}
                                             scope="col"
                                        >Instrument ID</CTableHeaderCell>
                                        <CTableHeaderCell
                                             style={{ background: "#5D76A9", color: "white" }}
                                             scope="col"
                                        >Instrument</CTableHeaderCell>
                                        <CTableHeaderCell
                                             style={{ background: "#5D76A9", color: "white" }}
                                             scope="col"
                                        >Made</CTableHeaderCell>
                                        <CTableHeaderCell
                                             style={{ background: "#5D76A9", color: "white" }}
                                             scope="col"
                                        >Model</CTableHeaderCell>
                                        <CTableHeaderCell
                                             style={{ background: "#5D76A9", color: "white" }}
                                             scope="col"
                                        >Manu no.</CTableHeaderCell>
                                        <CTableHeaderCell
                                             style={{ background: "#5D76A9", color: "white" }}
                                             scope="col"
                                        >Installed At</CTableHeaderCell>
                                        <CTableHeaderCell
                                             style={{ background: "#5D76A9", color: "white" }}
                                             scope="col"
                                        >Expire On</CTableHeaderCell>
                                        <CTableHeaderCell
                                             style={{ background: "#5D76A9", color: "white" }}
                                             scope="col"
                                        >Status</CTableHeaderCell>
                                        <CTableHeaderCell
                                             style={{ background: "#5D76A9", color: "white" }}
                                             scope="col"
                                        >Calibration Status</CTableHeaderCell>
                                        <CTableHeaderCell
                                             style={{ background: "#5D76A9", color: "white" }}
                                             scope="col"
                                        >Actions</CTableHeaderCell>
                                   </CTableRow>
                              </CTableHead>
                              <CTableBody>
                                   {filteredData.slice(startIndex, endIndex).map((item) => (
                                        <CTableRow key={item.id}>
                                             <CTableDataCell>{item.id}</CTableDataCell>
                                             <CTableDataCell>{item.category}</CTableDataCell>
                                             <CTableDataCell>{item.instrumentID}</CTableDataCell>
                                             <CTableDataCell>{item.instrument}</CTableDataCell>
                                             <CTableDataCell>{item.made}</CTableDataCell>
                                             <CTableDataCell>{item.model}</CTableDataCell>
                                             <CTableDataCell>{item.manuNo}</CTableDataCell>
                                             <CTableDataCell>{item.installedAt}</CTableDataCell>
                                             <CTableDataCell>{item.expireOn}</CTableDataCell>
                                             <CTableDataCell >
                                                  <button
                                                       className={`p-1 small w-100 rounded text-light d-flex justify-content-center align-items-center bg-${item.status === "Inactive"
                                                                 ? "red-700"
                                                                 : item.status === "Active"
                                                                      ? "green-700"
                                                                      : "white"
                                                            }`} style={{ fontSize: '0.6rem' }}
                                                  >
                                                       {item.status}
                                                  </button>
                                             </CTableDataCell>
                                             <CTableDataCell >
                                                  <button
                                                       className={`p-1 small w-50 rounded text-light d-flex justify-content-center align-items-center bg-${item.calibrationStatus === "Pending"
                                                            ? "yellow-500"
                                                            : item.calibrationStatus === "Active"
                                                                 ? "green-700"
                                                                 : "red-700"
                                                            }`} style={{ fontSize: '0.6rem' }}
                                                  >
                                                       {item.calibrationStatus}
                                                  </button>

                                             </CTableDataCell>

                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
                                                       <Link to="/instrumentMaster/registrationDetails"><FontAwesomeIcon icon={faEye} /></Link>
                                                       <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                       <div className="cursor-pointer" onClick={() => handleDeleteClick(item.id)}>
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
                              <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                   &lt;&lt;
                              </button>
                              <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                              <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                                   &gt;&gt;
                              </button>
                         </div>
                    </div>
               </div>

               {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
               {deleteModal && (
                    <DeleteModal
                         visible={deleteModal}
                         closeModal={() => setDeleteModal(false)}
                         confirmDelete={handleDeleteConfirm}
                         handleDelete={handleDeleteClick}
                    />
               )}
          </>
     );
}

const StatusModal = (_props) => {
     return (
          <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
               <CModalHeader>
                    <CModalTitle>Add Instrument</CModalTitle>
               </CModalHeader>
               <CModalBody>
                    <p>Add information and register new Instrument</p>
                    <CFormSelect
                         className="mb-3"
                         type="text"
                         label="Instrument Category"
                         placeholder="Select... "
                         options={[
                              "Select",
                              { label: "chromatography" },
                              { label: "weighing balance" }
                         ]}
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Instrument Category Description"
                         placeholder="chroma "
                         disabled
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Instrument"
                         placeholder=" Instrument"
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Instrument ID"
                         placeholder="Instrument ID "
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Make"
                         placeholder=" Make"
                    />
                    <CRow className="d-flex align-items-center justify-content-center">
                         <CCol sm={8}>
                              <CFormInput
                                   className="mb-3"
                                   type="text"
                                   label="Model"
                                   placeholder="Model "
                              ></CFormInput>
                         </CCol>
                         <CCol sm={4}>
                              <CButton className="bg-info text-white  mt-4 mb-3 " >Add Fields</CButton>
                         </CCol>
                    </CRow>
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Manufacturer's Serial No."
                         placeholder=" Manufacturer's Serial No."
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Capacity Size"
                         placeholder="Capacity Size "
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Equip No."
                         placeholder=" Equip No."
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Installed At"
                         placeholder="Installed At"
                    />
                    <CFormInput
                         type="date"
                         label="Installed On"
                         placeholder=" "
                    />
                    <CFormInput
                         className="mb-3"
                         type="date"
                         label="Warranty Expires On"
                         placeholder=" "
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Supplied By"
                         placeholder="Supplied By"
                    />
                    <label className="mb-3">Contains module ?</label>
                    <CFormCheck
                         className="mb-3"
                         type="radio"
                         id="ContainsModuleYes"
                         name="ContainsModule"
                         label="Yes"
                    />
                    <CFormCheck
                         className="mb-3"
                         type="radio"
                         id="ContainsModuleNo"
                         name="ContainsModule"
                         label="No"
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="SOP No."
                         placeholder="SOP Number"
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Software"
                         placeholder="Software"
                    />
                    <CFormTextarea
                         className="mb-3"
                         type="text"
                         label="Description"
                         placeholder=""
                    />
               </CModalBody>
               <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>
                         Back
                    </CButton>
                    <CButton color="primary">Submit</CButton>
               </CModalFooter>
          </CModal>
     );
}


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
                         Delete Instrument Registration
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
                    <p>Are you sure you want to delete this { }?</p>
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
                         onClick={_props.confirmDelete}
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

export default Registration;
