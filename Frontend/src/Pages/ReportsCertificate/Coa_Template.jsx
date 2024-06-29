import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React,{ useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function Coa_Template() {
    const [addModal, setAddModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState(null)

    const badgeStyle = { background: "gray", color: "white", width: "110px" };
    const badgeStyle2 = { background: " #2A5298", color: "white", width: "110px" };
    const badgeStyle3 = { background: "green", color: "white", width: "110px" };
    const badgeStyle4 = { background: "red", color: "white", width: "110px" };
    const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
    const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

    const [selectedStatus, setSelectedStatus] = useState("All");

    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    const [data, setData] = useState([
        {
            id: 1,
            sampleType: "Micro Media",
            coaId: "COA-022024-0000003",
            coaType: "WITH-SPECIFICATION",
            updatedAt: "Feb 12th 24 15:36",
            status: "INITIATED",
        },
        {
            id: 2,
            sampleType: "Finished Product",
            coaId: "COA-062023-0000002",
            coaType: "WITHOUT-SPECIFICATION",
            updatedAt: "Jul 23rd 23 23:37",
            status: "REJECTED",
        },
        {
            id: 3,
            sampleType: "Finished Product",
            coaId: "COA-062023-0000001",
            coaType: "WITH-SPECIFICATION",
            updatedAt: "Jun 17th 23 15:36",
            status: "INITIATED",
        },
        {
            id: 4,
            sampleType: "Micro Media",
            coaId: "COA-022024-0000004",
            coaType: "WITH-SPECIFICATION",
            updatedAt: "Feb 12th 24 15:36",
            status: "REJECTED",
        },
        {
            id: 5,
            sampleType: "Finished Product",
            coaId: "COA-062023-0000009",
            coaType: "WITH-SPECIFICATION",
            updatedAt: "Feb 12th 24 15:36",
            status: "APPROVED",
        },
        {
            id: 6,
            sampleType: "Micro Media",
            coaId: "COA-062023-0000006",
            coaType: "WITH-SPECIFICATION",
            updatedAt: "Jul 23rd 23 23:37",
            status: "INITIATED",
        },
    ]);

    const startIndex = (currentPage - 1) * pageSize;
    const filteredData = selectedStatus === 'All' ? data : data.filter(item => item.status === selectedStatus);
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
    const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));
    
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
                    <h4 className="fw-bold">Certificate Of Analysis Report </h4>
                    </div>
                    <div>
                        <CRow className="mb-3 mt-5">
                            <CCol sm={3}>
                                <CFormSelect
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    value={selectedStatus} style={{fontSize:'0.9rem'}}
                                    options={[
                                        "All",
                                        { label: "Initiated", value: "INITIATED" },
                                        { label: "Approved", value: "APPROVED" },
                                        { label: "Rejected", value: "REJECTED" },
                                        { label: "Reinitiated", value: "REINITIATED" },
                                        { label: "Dropped", value: "DROPPED" },
                                    ]}
                                />

                            </CCol>

                            <CCol sm={6}></CCol>

                            <CCol sm={3}>
                                <div className="d-flex justify-content-end">
                                    <CButton style={{fontSize:'0.9rem'}}  color="primary" onClick={() => setAddModal(true)}>Add Coa Template</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                      <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
                        <CTable align="middle" responsive className="  ">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >S NO.</CTableHeaderCell>
                                    <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Sample Type</CTableHeaderCell>
                                    <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Coa ID</CTableHeaderCell>
                                    <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Coa Type</CTableHeaderCell>
                                    <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Updated At</CTableHeaderCell>
                                    <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Status</CTableHeaderCell>
                                    <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {filteredData.slice(startIndex, endIndex).map((item, index) => (
                                    <CTableRow key={item.id}>
                                        <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                                        <CTableDataCell>{item.sampleType}</CTableDataCell>
                                        <CTableDataCell>{item.coaId}</CTableDataCell>
                                        <CTableDataCell>{item.coaType}</CTableDataCell>
                                        <CTableDataCell>{item.updatedAt}</CTableDataCell>
                                        <CTableDataCell >
                                        <button  
                        className={`py-1 px-3 w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
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
                                                <Link to="/reportsCertificate/coa_TemplateDetails">
                                                    <FontAwesomeIcon icon={faEye} />
                                                </Link>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() => setAddModal(true)}
                                                >
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
                    <CModalTitle>Add Coa Template</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Add information and Add Coa Template</p>

                    <CFormInput
                        type="text"
                        className="mb-3"
                        label="Sample Type"
                        placeholder="Select... "
                        options={[
                            "Select...",
                            { label: "Hydroulic Oil" },
                            { label: "hcl" },
                            { label: "petrochemical" },
                            { label: "Initiated product" }
                        ]}
                    />

                    <CFormInput
                        type="text"
                        className="mb-3"
                        label="Coa Type"
                        placeholder="Select Coa Type "
                        options={[
                            "Select Coa Type",
                            { label: "With Specification" },
                            { label: "WithOut Specification" },
                            { label: "ERP" }
                        ]}
                    />
                    <CFormInput
                        type="text"
                        className="mb-3"
                        label="Report Title"
                        placeholder=" Report Title"
                    />
                    <CFormInput
                        type="text"
                        className="mb-3"
                        label="Product/Material Caption"
                        placeholder="Report Title "
                    />
                    <CFormInput
                        type="text"
                        className="mb-3"
                        label="Serial No."
                        placeholder="Serial Number "
                    />
                    <CFormInput
                        type="text"
                        className="mb-3"
                        label="Format No."
                        placeholder="Format No. "
                    />

                    <CModalTitle className="bg-light mb-3">Header</CModalTitle>

                    <div className="d-flex pb-2">
                        <div className="mb-3">
                            <CFormInput
                                type="text"
                                label="Rows"
                                placeholder="Rows "
                            />
                        </div>
                        <div className="ps-3 w-50">
                            <CFormSelect
                                type="text"
                                label="Columns"
                                placeholder="Columns "
                                options={[
                                    { label: "2" },
                                    { label: "4" },
                                    { label: "6" }
                                ]}
                            />
                        </div>
                    </div>

                    <CModalTitle className="bg-light mb-3">Footer</CModalTitle>

                    <div className="d-flex pb-2">
                        <div className="mb-2">
                            <CFormInput
                                type="text"
                                label="Rows"
                                placeholder="Rows "
                            />
                        </div>
                        <div className="ps-3 w-50">
                            <CFormSelect
                                type="text"
                                label="Columns"
                                placeholder="Columns "
                                options={[
                                    { label: "2" },
                                    { label: "4" },
                                    { label: "6" }
                                ]}
                            />
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="pe-3">
                            <CFormInput
                                type="text"
                                className="mb-3"
                                label=""
                                placeholder="Approved By "
                            />
                        </div>
                        <div className="ps-3 w-50">
                            <CFormSelect
                                type="text"
                                label=""
                                className="mb-3"
                                placeholder="approved_by "
                                options={[
                                    "approved_by",
                                ]}
                            />
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="pe-3">
                            <CFormInput
                                type="text"
                                className="mb-3"
                                label=""
                                placeholder="Reviewed By"
                            />
                        </div>
                        <div className="ps-3 w-50">
                            <CFormSelect
                                type="text"
                                className="mb-3"
                                label=""
                                placeholder="reviewed_by "
                                options={[
                                    "reviewed_by",
                                    {}
                                ]}
                            />
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="pe-3">
                            <CFormInput
                                type="text"
                                className="mb-3"
                                label=""
                                placeholder="Checked By "
                            />
                        </div>
                        <div className="ps-3 w-50">
                            <CFormSelect
                                type="text"
                                className="mb-3"
                                label=""
                                placeholder="checked_by "
                                options={[
                                    "checked_by",
                                    {}
                                ]}
                            />
                        </div>
                    </div>
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
        <>
            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
                <CModalHeader>
                    <CModalTitle>Delete Coa Template</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Do you want to delete this Coa  Template <code>{_props.templateId}</code>?</p>
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton color="danger" onClick={_props.confirmDelete}>Delete</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default Coa_Template
