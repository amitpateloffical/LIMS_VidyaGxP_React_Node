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
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useState } from "react";

function InstrumentCategory() {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("All");

    const [data, setData] = useState([

        { id: 1, categoryName: "Chromatography", description: "Chroma", addedOn: "Nov 17th 24", status: "Active" },
        { id: 2, categoryName: "Weighing balance", description: "EQI", addedOn: "Jan 5th 24", status: "Active" },
        { id: 3, categoryName: "Weighing balance", description: "ARZPH001", addedOn: "09-may-2024", status: "Inactive" },
        { id: 4, categoryName: "Spectroscopy", description: "Spec", addedOn: "Feb 14th 24", status: "Inactive" },
        { id: 5, categoryName: "Microscopy", description: "Micro", addedOn: "Mar 3rd 24", status: "Active" },
        { id: 6, categoryName: "Thermal Analysis", description: "Thermal", addedOn: "Apr 8th 24", status: "Inactive" },
        { id: 7, categoryName: "Electrochemistry", description: "Electro", addedOn: "Jun 1st 24", status: "Active" },
        { id: 8, categoryName: "Chromatography", description: "Chroma", addedOn: "Jul 9th 24", status: "Inactive" },
        { id: 9, categoryName: "Weighing balance", description: "EQI", addedOn: "Aug 21st 24", status: "Active" },
        { id: 10, categoryName: "Spectroscopy", description: "Spec", addedOn: "Oct 13th 24", status: "Inactive" },
    ]);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, data.length);

    const filteredData =
        selectedStatus === 'All'
            ? data
            : data.filter((
                item => item.status.toUpperCase() === selectedStatus.toUpperCase())
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
    };

    return (
        <>
            <div className="m-5 mt-3">
                <div className="main-head">
                    <h4 className="fw-bold">Instrument Category</h4>
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
                                    Instrument Category
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
                                >Category Name</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Description</CTableHeaderCell>
                                <CTableHeaderCell
                                    style={{ background: "#5D76A9", color: "white" }}
                                    scope="col"
                                >Added On</CTableHeaderCell>
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
                                    <CTableDataCell>{item.categoryName}</CTableDataCell>
                                    <CTableDataCell>{item.description}</CTableDataCell>
                                    <CTableDataCell>{item.addedOn}</CTableDataCell>
                                    <CTableDataCell >
                                        <button
                                            className={`p-1 small w-50 rounded text-light d-flex justify-content-center align-items-center bg-${item.status === "Inactive"
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
                                            <div className="cursor-pointer" onClick={() => setAddModal(true)}>
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </div>
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
    );
}

const StatusModal = (_props) => {
    return (
        <>
            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                <CModalHeader>
                    <CModalTitle>Add Instrument Category</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Add information and add new Instrument Category</p>
                    <CFormInput className="mb-3" type="text" label="Category Name" placeholder="Category Name" />
                    <CFormInput className="mb-3" type="text" label="Description" placeholder="Description" />
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>
                        Back
                    </CButton>
                    <CButton color="primary">Submit</CButton>
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
                    Delete Instrument Category
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
                <p>Are you sure you want to delete Instrument Category { }?</p>
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

export default InstrumentCategory;
