import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React,{ useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function InstrumentUsage() {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("All");

    const [data, setData] = useState([

        { id: 1, instrumentId: 'arzph001', category: 'Weighing Balance', usageCode: 'wl/wb/m/001', productName: 'CACO', arNo: 'ARFP0000056', usedFor: 'May 31st 23', usedBy: 'John Doe', status: 'Active' },
        { id: 2, instrumentId: 'hplc', category: 'Chromatography', usageCode: 'wl/wb/m/002', productName: 'chr12', arNo: 'ARAUX000033', usedFor: 'Oct 1st 23', usedBy: 'Jane Smith', status: 'Active' },
        { id: 3, instrumentId: 'gauge001', category: 'Pressure Gauge', usageCode: 'pg/pg/m/003', productName: 'pgprod', arNo: 'ARPG000045', usedFor: 'Mar 15th 23', usedBy: 'Alice Johnson', status: 'Inactive' },
        { id: 4, instrumentId: 'arzph001', category: 'pH Meter', usageCode: 'ph/ph/m/004', productName: 'phprod', arNo: 'ARPH000067', usedFor: 'Jan 10th 23', usedBy: 'Bob Brown', status: 'Active' },
        { id: 5, instrumentId: 'balance001', category: 'Balance', usageCode: 'bl/bl/m/005', productName: 'blprod', arNo: 'ARBL000089', usedFor: 'Feb 20th 23', usedBy: 'Charlie Green', status: 'Inactive' },
        { id: 6, instrumentId: 'scale001', category: 'Scale', usageCode: 'sc/sc/m/006', productName: 'scprod', arNo: 'ARSC000011', usedFor: 'Apr 25th 23', usedBy: 'Dana White', status: 'Active' },
        { id: 7, instrumentId: 'thermo001', category: 'Thermometer', usageCode: 'th/th/m/007', productName: 'thprod', arNo: 'ARTH000012', usedFor: 'May 10th 23', usedBy: 'Eve Black', status: 'Active' },
        { id: 8, instrumentId: 'scale001', category: 'Hygrometer', usageCode: 'hy/hy/m/008', productName: 'hyprod', arNo: 'ARHY000013', usedFor: 'Jun 15th 23', usedBy: 'Frank Brown', status: 'Inactive' },
        { id: 9, instrumentId: 'baro001', category: 'Barometer', usageCode: 'ba/ba/m/009', productName: 'baprod', arNo: 'ARBA000014', usedFor: 'Jul 25th 23', usedBy: 'Grace White', status: 'Active' },
        { id: 10, instrumentId: 'alti001', category: 'Altimeter', usageCode: 'al/al/m/010', productName: 'alprod', arNo: 'ARAL000015', usedFor: 'Aug 30th 23', usedBy: 'Henry Black', status: 'Inactive' }
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
                    <h4 className="fw-bold">Instrument Usage</h4>
                </div>
                <div>
                    <CRow className="mt-5 mb-3">
                        <CCol sm={3}>
                            <CFormSelect
                                options={["Select Status", { label: "All" }, { label: "Active" }, { label: "Inactive" }]}
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
                                    Add Usage
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
                            <CTableRow>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >S NO.</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Instrument ID</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Instrument Category</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Usage Code</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Product Name</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Ar.No</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Used For</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Used By</CTableHeaderCell>
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
                                    <CTableDataCell>{item.instrumentId}</CTableDataCell>
                                    <CTableDataCell>{item.category}</CTableDataCell>
                                    <CTableDataCell>{item.usageCode}</CTableDataCell>
                                    <CTableDataCell>{item.productName}</CTableDataCell>
                                    <CTableDataCell>{item.arNo}</CTableDataCell>
                                    <CTableDataCell>{item.usedFor}</CTableDataCell>
                                    <CTableDataCell>{item.usedBy}</CTableDataCell>
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
                                            <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
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
                    <CModalTitle>Add Instrument usage</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Add information and Add Instrument Usage</p>

                    <CFormSelect
                        className="mb-3"
                        type="select"
                        label="Instrument (Instrument ID)"
                        placeholder="Select... "
                        options={[
                            "Select...",
                            { label: "en33/23" },
                            { label: "eqi/eng/163" },
                            { label: "ARZ001" },
                            { label: "Arz003" },
                            { label: "qc/bal/011" },
                            { label: "hplc" },
                        ]}
                    />

                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="Instrument Category"
                        placeholder="chromatography "
                        disabled
                    />

                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="Usage Code"
                        placeholder="Usage Code"
                    />

                    <CFormSelect
                        className="mb-3"
                        type="select"
                        label="Instrument (Instrument ID)"
                        placeholder="Select Product "
                        options={[
                            "Select Product",
                            { label: "apb" },
                            { label: "chpoil" },
                            { label: "fet0012" },
                            { label: "fet0011" },
                            { label: "samps" },
                            { label: "epto" },
                        ]}
                    />

                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="A.R.No."
                        placeholder="A.R.No."
                    />

                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="Used For"
                        placeholder="Used For"
                    />

                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="Used By"
                        placeholder="Used By"
                    />

                    <CFormInput
                        className="mb-3"
                        type="date"
                        label="Used From"
                        placeholder=""
                    />
                    <CFormInput
                        className="mb-3"
                        type="date"
                        label="Used To"
                        placeholder=""
                    />
                    <CFormInput
                        className="mb-3"
                        type="text"
                        label="Comment If Any"
                        placeholder="Comment"
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
                    Delete Instrument Usage
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
                <p>Are you sure you want to delete this Instrument Usage { }?</p>
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

export default InstrumentUsage
