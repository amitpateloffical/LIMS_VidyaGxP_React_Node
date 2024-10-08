import React, { useEffect, useState } from "react";
import {
  CButton,
  CCol,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import "react-quill/dist/quill.snow.css";

const ControlSampleModal = ({ visible, closeModal, handleSubmit }) => {
  const [controlSampleData, setControlSapmleData] = useState({
    checkbox:"",
    sampleId:"",
    productName:"",
    productCode:"",
    sampleType:"",
    market:"",
    arNo:"",
    batchNo:"",
    mfgDate:"",
    expiryDate:"",
    quantity:"",
    quantityWithdrawn:"",
    currentQuantity:"",
    uom:"",
    storageLocation:"",
    storageCondition:"",
    visualInspectionScheduledOn:"",
    visualInspectionPerformedBy:"",
    abnormalObservation:"",
    observationDate:"",
    destructionDueOn:"",
    destroyedBy:"",
    neutralizingAgent:"",
    destructionDate:"",
    remarks:"",
    status:"",
  });
  const [fields, setFields] = useState([]);

  const resetForm = () => {
    setControlSapmleData({
        checkbox:"",
        sampleId:"",
        productName:"",
        productCode:"",
        sampleType:"",
        market:"",
        arNo:"",
        batchNo:"",
        mfgDate:"",
        expiryDate:"",
        quantity:"",
        quantityWithdrawn:"",
        currentQuantity:"",
        uom:"",
        storageLocation:"",
        storageCondition:"",
        visualInspectionScheduledOn:"",
        visualInspectionPerformedBy:"",
        abnormalObservation:"",
        observationDate:"",
        destructionDueOn:"",
        destroyedBy:"",
        neutralizingAgent:"",
        destructionDate:"",
        remarks:"",
        status:"",
    });
  };
  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...controlSampleData, [field]: value };
    setControlSapmleData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    const controlSampleDetails = {
      ...controlSampleData,
      AddedOn: new Date().toISOString(),
      fields,
    };

    const existingControlSample =
      JSON.parse(localStorage.getItem("controlSample")) || [];
    const updatedInstruments = [...existingControlSample, controlSampleDetails];
    localStorage.setItem("controlSample", JSON.stringify(updatedInstruments));

    handleSubmit(controlSampleDetails);

    closeModal();
  };
  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Instrument</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and register new Control Sample</p>
          <CFormInput
            className="mb-3"
            type="text"
            label="Sample Id"
            placeholder="Sample Id"
            value={controlSampleData.sampleId}
            onChange={(e) => handleInputChange("sampleId", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            placeholder="Product Name"
            value={controlSampleData.productName}
            onChange={(e) => handleInputChange("productName", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Code"
            placeholder="Product Code"
            value={controlSampleData.productCode}
            onChange={(e) => handleInputChange("productCode", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Sample Type"
            placeholder="Sample Type"
            value={controlSampleData.sampleType}
            onChange={(e) => handleInputChange("sampleType", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Market"
            placeholder="Market"
            value={controlSampleData.market}
            onChange={(e) => handleInputChange("market", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Batch No"
            placeholder="Batch No"
            value={controlSampleData.batchNo}
            onChange={(e) => handleInputChange("batchNo", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="AR No"
            placeholder="AR No"
            value={controlSampleData.arNo}
            onChange={(e) => handleInputChange("arNo", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Mfg Date"
            placeholder="Mfg Date"
            value={controlSampleData.mfgDate}
            onChange={(e) => handleInputChange("mfgDate", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Expiry Date"
            placeholder="Expiry Date"
            value={controlSampleData.expiryDate}
            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="Quantity"
            placeholder="Quantity"
            value={controlSampleData.quantity}
            onChange={(e) => handleInputChange("quantity", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="Quantity Withdrawn"
            placeholder="Quantity Withdrawn"
            value={controlSampleData.quantityWithdrawn}
            onChange={(e) => handleInputChange("quantityWithdrawn", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Current Quantity"
            placeholder="Current Quantity"
            value={controlSampleData.currentQuantity}
            onChange={(e) => handleInputChange("currentQuantity", e.target.value)}
          />
            <CFormInput
            className="mb-3"
            type="text"
            label="UOM"
            placeholder="UOM"
            value={controlSampleData.uom}
            onChange={(e) => handleInputChange("uom", e.target.value)}
          />
            <CFormInput
            className="mb-3"
            type="text"
            label="Storage Location"
            placeholder="Storage Location"
            value={controlSampleData.storageLocation}
            onChange={(e) => handleInputChange("storageLocation", e.target.value)}
          />
            <CFormInput
            className="mb-3"
            type="text"
            label="Storage Condition"
            placeholder="Storage Condition"
            value={controlSampleData.storageCondition}
            onChange={(e) => handleInputChange("storageCondition", e.target.value)}
          />
            <CFormInput
            className="mb-3"
            type="date"
            label="Visual Inspection Scheduled On"
            placeholder="Visual Inspection Scheduled On"
            value={controlSampleData.visualInspectionScheduledOn}
            onChange={(e) => handleInputChange("visualInspectionScheduledOn", e.target.value)}
          />
            <CFormInput
            className="mb-3"
            type="text"
            label="Visual Inspection Performed By"
            placeholder="Visual Inspection Performed By"
            value={controlSampleData.visualInspectionPerformedBy}
            onChange={(e) => handleInputChange("visualInspectionPerformedBy", e.target.value)}
          />
            <CFormInput
            className="mb-3"
            type="text"
            label="Abnormal Observation"
            placeholder="Abnormal Observation"
            value={controlSampleData.abnormalObservation}
            onChange={(e) => handleInputChange("abnormalObservation", e.target.value)}
          />
            <CFormInput
            className="mb-3"
            type="date"
            label="Observation Date"
            placeholder="Observation Date"
            value={controlSampleData.observationDate}
            onChange={(e) => handleInputChange("observationDate", e.target.value)}
          />
            <CFormInput
            className="mb-3"
            type="text"
            label="Destruction Due On"
            placeholder="Destruction Due On"
            value={controlSampleData.destructionDueOn}
            onChange={(e) => handleInputChange("destructionDueOn", e.target.value)}
          />
            <CFormInput
            className="mb-3"
            type="text"
            label="Destroyed By"
            placeholder="Destroyed By"
            value={controlSampleData.destroyedBy}
            onChange={(e) => handleInputChange("destroyedBy", e.target.value)}
          />
            <CFormInput
            className="mb-3"
            type="text"
            label="Neutralizing Agent"
            placeholder="Neutralizing Agent"
            value={controlSampleData.neutralizingAgent}
            onChange={(e) => handleInputChange("neutralizingAgent", e.target.value)}
          />
            <CFormInput
            className="mb-3"
            type="date"
            label="Destruction Date"
            placeholder="Destruction Date"
            value={controlSampleData.destructionDate}
            onChange={(e) => handleInputChange("destructionDate", e.target.value)}
          />
            <CFormInput
            className="mb-3"
            type="text"
            label="Remarks"
            placeholder="Remarks"
            value={controlSampleData.remarks}
            onChange={(e) => handleInputChange("remarks", e.target.value)}
          />
            

        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleFormSubmit}>
            Save changes
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ControlSampleModal;
