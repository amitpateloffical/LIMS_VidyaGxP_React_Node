/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { CButton, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableRow } from '@coreui/react';

const ViewModal = ({ visible, closeModal, data }) => {
    const [statusModal, setStatusModal] = useState(false);

    return (
        <>
            <div id="approval-page" className="py-3 bg-light h-100">
                <div className="container-fluid">
                    <div className="block mb-3">
                        <div className="main-head d-flex justify-content-between align-items-center">
                            <h4 className="fw-bold mb-4 mt-3">Details</h4>
                            <CButton color="dark" onClick={() => setStatusModal(true)}>Update Status</CButton>
                        </div>
                        <div className="bg-white px-5 py-3">
                            <CTable align="middle" className="mb-0" small bordered>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableDataCell color="info">Unique Code</CTableDataCell>
                                        <CTableDataCell>{data ? data.uniqueCode : 'NA-002'}</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Product Name</CTableDataCell>
                                        <CTableDataCell>{data ? data.name : 'NA'}</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Generic Name</CTableDataCell>
                                        <CTableDataCell>{data ? data.genericName : 'NA'}</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Action By</CTableDataCell>
                                        <CTableDataCell>Manager</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Action On</CTableDataCell>
                                        <CTableDataCell>Mar 22nd 2024 11:48</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Re-Testing Period</CTableDataCell>
                                        <CTableDataCell>{data ? `${data.retestingPeriod} Days` : '45 Days'}</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Status</CTableDataCell>
                                        <CTableDataCell>{data ? data.status : 'INITIATED'}</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Version</CTableDataCell>
                                        <CTableDataCell>0</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </div>
                    </div>
                    <div className="block">
                        <div className="main-head">
                            <h4 className="fw-bold mb-4 mt-3">History</h4>
                        </div>
                        <div className="bg-white px-5 py-3">
                            <CTable align="middle" className="mb-0" small bordered>
                                <CTableBody>
                                    <CTableRow color="warning">
                                        <CTableDataCell>Revision</CTableDataCell>
                                        <CTableDataCell>3</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Unique Code</CTableDataCell>
                                        <CTableDataCell>NA-002</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Product Name</CTableDataCell>
                                        <CTableDataCell>NA</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Generic Name</CTableDataCell>
                                        <CTableDataCell>NA</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Action By</CTableDataCell>
                                        <CTableDataCell>Manager</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Action On</CTableDataCell>
                                        <CTableDataCell>Mar 22nd 2024 11:48</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Re-Testing Period</CTableDataCell>
                                        <CTableDataCell>45 Days</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Status</CTableDataCell>
                                        <CTableDataCell>INITIATED</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </div>
                    </div>
                </div>
            </div>

            {statusModal && <StatusModal visible={statusModal} closeModal={() => setStatusModal(false)} />}
        </>
    );
};

const StatusModal = ({ visible, closeModal }) => {
    return (
        <CModal alignment="center" visible={visible} onClose={closeModal}>
            <CModalHeader>
                <CModalTitle>Update Status</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CFormSelect
                    label="Status"
                    text="Status is required."
                    options={[
                        { label: 'Update Status', value: '' },
                        { label: 'Approve', value: 'approve' },
                        { label: 'Drop', value: 'drop' },
                        { label: 'Reject', value: 'reject' }
                    ]}
                />
            </CModalBody>
            <CModalFooter>
                <CButton color="light" onClick={closeModal}>Cancel</CButton>
                <CButton color="dark">Update</CButton>
            </CModalFooter>
        </CModal>
    );
};

export default ViewModal;
