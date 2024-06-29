import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React,{ useState } from "react"
import { Link } from "react-router-dom"

function InstrumentModule() {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("All");

    const [data, setData] = useState([
        { id: 1, category: 'weighing balance', module: 'Weighing', moduleId: 'wl/wb/m/001', make: 'Chemi Line', model: 'N/A', serialNo: 'N/A', suppliedBy: 'RK', installedOn: 'May 31st 23', expiresOn: 'Nov 17th 24', status: 'Active' },
        { id: 2, category: 'chromatography', module: 'Weighing', moduleId: 'wl/wb/m/002', make: 'Chemi Line', model: 'N/A', serialNo: 'N/A', suppliedBy: 'RK', installedOn: 'Oct 1st 23', expiresOn: 'June 12th 24', status: 'Active' },
        { id: 3, category: 'pressure gauge', module: 'Pressure', moduleId: 'pg/pg/m/003', make: 'Gauge Line', model: 'Model A', serialNo: 'SN123', suppliedBy: 'LK', installedOn: 'Mar 15th 23', expiresOn: 'Aug 22nd 24', status: 'Inactive' },
        { id: 4, category: 'ph meter', module: 'pH Measurement', moduleId: 'ph/ph/m/004', make: 'pH Line', model: 'Model B', serialNo: 'SN124', suppliedBy: 'MK', installedOn: 'Jan 10th 23', expiresOn: 'Sep 30th 24', status: 'Active' },
        { id: 5, category: 'chromatography', module: 'Balance', moduleId: 'bl/bl/m/005', make: 'Balance Line', model: 'Model C', serialNo: 'SN125', suppliedBy: 'NK', installedOn: 'Feb 20th 23', expiresOn: 'Oct 15th 24', status: 'Inactive' },
        { id: 6, category: 'scale', module: 'Scale', moduleId: 'sc/sc/m/006', make: 'Scale Line', model: 'Model D', serialNo: 'SN126', suppliedBy: 'OK', installedOn: 'Apr 25th 23', expiresOn: 'Dec 5th 24', status: 'Active' },
        { id: 7, category: 'thermometer', module: 'Temperature', moduleId: 'th/th/m/007', make: 'Thermo Line', model: 'Model E', serialNo: 'SN127', suppliedBy: 'PK', installedOn: 'May 10th 23', expiresOn: 'Jan 25th 24', status: 'Inactive' },
        { id: 8, category: 'hygrometer', module: 'Humidity', moduleId: 'hy/hy/m/008', make: 'Hygro Line', model: 'Model F', serialNo: 'SN128', suppliedBy: 'QK', installedOn: 'Jun 15th 23', expiresOn: 'Feb 20th 24', status: 'Active' },
        { id: 9, category: 'barometer', module: 'Pressure', moduleId: 'ba/ba/m/009', make: 'Baro Line', model: 'Model G', serialNo: 'SN129', suppliedBy: 'RK', installedOn: 'Jul 25th 23', expiresOn: 'Mar 30th 24', status: 'Inactive' },
        { id: 10, category: 'altimeter', module: 'Altitude', moduleId: 'al/al/m/010', make: 'Alti Line', model: 'Model H', serialNo: 'SN130', suppliedBy: 'SK', installedOn: 'Aug 30th 23', expiresOn: 'Apr 25th 24', status: 'Active' },
    ]);

    const startIndex = (currentPage - 1) * pageSize;
    const filteredData = selectedStatus === 'All' ? data : data.filter(item => item.status === selectedStatus);
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setDeleteModal(true);
    };

    const handleDeleteConfirm = () => {
        setData(data.filter((item) => item.id !== deleteId));
        setDeleteModal(false);
    };

    return (
        <>
            <div className="m-5 mt-3">
                <div className="main-head">
                    <h4 className="fw-bold">Instrument Module</h4>
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
                        <CCol sm={3}></CCol>
                        <CCol sm={3}></CCol>
                        <CCol sm={3}>
                            <div className="d-flex justify-content-end">
                                <CButton
                                    className=" text-white"
                                    style={{ background: "#4B49B6", fontSize: '0.9rem' }}
                                    onClick={() => setAddModal(true)}
                                >
                                    Add Module
                                </CButton>
                            </div>
                        </CCol>
                    </CRow>
                </div>
                <div
                    className="rounded bg-white"
                    style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
                >
                    <CTable className="mb-0 table table-responsive" >
                        <CTableHead>
                            <CTableRow>
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
                                >Module</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Module Id</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Make</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Model</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Manufacturer No.</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Supplied By</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Install On</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Expires On</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Status</CTableHeaderCell>
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
                                    <CTableDataCell>{item.module}</CTableDataCell>
                                    <CTableDataCell>{item.moduleId}</CTableDataCell>
                                    <CTableDataCell>{item.make}</CTableDataCell>
                                    <CTableDataCell>{item.model}</CTableDataCell>
                                    <CTableDataCell>{item.serialNo}</CTableDataCell>
                                    <CTableDataCell>{item.suppliedBy}</CTableDataCell>
                                    <CTableDataCell>{item.installedOn}</CTableDataCell>
                                    <CTableDataCell>{item.expiresOn}</CTableDataCell>
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
                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
                                            <Link to="/instrumentMaster/instrumentModuleDetails"><FontAwesomeIcon icon={faEye} /></Link>
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
            {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} confirmDelete={handleDeleteConfirm} />}
        </>
    )
}

const StatusModal = (_props) => {
    return (
        <>
            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                <CModalHeader>
                    <CModalTitle>Add Instrument Module</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Add information and Add Instrument Module</p>
                    <CFormSelect
                        className="mb-3"
                        type="text"
                        label="Instrument (Instrument ID)"
                        placeholder="Select... "
                        options={[
                            "Select...",
                            { label: "Weighing Balance 2" },
                            { label: "Pressure Gauge" },
                            { label: "ARZ ph Meter" },
                            { label: "Ariz Balance" },
                            { label: "Weighing Balance-1" },
                            { label: "Weighing Balance" },
                        ]}
                    />
                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="Instruction Category"
                        placeholder="Weighing Balance"
                        disabled
                    />
                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="Module"
                        placeholder="Module"
                    />
                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="Module ID"
                        placeholder="Module ID"
                    />
                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="Make"
                        placeholder="Shimadu"
                        disabled
                    />
                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="Model"
                        placeholder="Ser33"
                        disabled
                    />
                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="Manufacturer's Serial No."
                        placeholder="adf3434"
                        disabled
                    />
                    <CFormInput
                        className="mb-3"
                        type="date"
                        label="Installed On"
                        placeholder="05/10/2024"
                        disabled
                    />
                    <CFormInput
                        className="mb-3"
                        type="date"
                        label="Warranty Expires On"
                        placeholder="05/05/2023"
                        disabled
                    />
                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="Supplied By"
                        placeholder="VidyaGxP"
                        disabled
                    />
                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="SOP No."
                        placeholder="ASTM6453"
                        disabled
                    />
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton color="primary">Submit</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
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
                    Delete Instrument Module
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
                <p>Are you sure you want to delete this instrument module { }?</p>
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

export default InstrumentModule
