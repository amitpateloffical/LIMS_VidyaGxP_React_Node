import React, { useEffect, useState } from "react";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormInput,
  CButton,
  CModalFooter,
} from "@coreui/react";

const FunctionalGroupingModal = ({ visible, closeModal, handleSubmit }) => {
  const [functionalData, setFunctionalData] = useState({
    groupName: "",
    groupDescription: "",
    capa: "",
    availableTechnologies: [],
  });

  const resetForm = () => {
    setFunctionalData({
      groupName: "",
      groupDescription: "",
      capa: "",
      availableTechnologies: [],
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...functionalData, [field]: value };
    setFunctionalData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...functionalData });
    closeModal();
  };

  const [leftArray, setLeftArray] = useState(["Description", "CAPA"]);
  const [rightArray, setRightArray] = useState([]);

  const moveRight = () => {
    let leftElement = document.getElementsByClassName("check-left");
    for (let index = 0; index < leftElement.length; index++) {
      if (leftElement[index].checked) {
        let data = leftElement[index].value;
        let left = leftArray.filter((value) => value !== data);
        setLeftArray(left);
        rightArray.push(data);
        setRightArray([...rightArray]);

        // Update availableTechnologies in functionalData
        setFunctionalData((prevData) => ({
          ...prevData,
          availableTechnologies: [...prevData.availableTechnologies, data],
        }));
        break; // Important
      }
    }
  };

  const moveLeft = () => {
    let rightElement = document.getElementsByClassName("check-right");
    for (let index = 0; index < rightElement.length; index++) {
      if (rightElement[index].checked) {
        let data = rightElement[index].value;
        let right = rightArray.filter((value) => value !== data);
        setRightArray(right);
        leftArray.push(data);
        setLeftArray([...leftArray]);

        // Update availableTechnologies in functionalData
        setFunctionalData((prevData) => ({
          ...prevData,
          availableTechnologies: prevData.availableTechnologies.filter(
            (value) => value !== data
          ),
        }));
        break;
      }
    }
  };

  const clicked = (event) => {
    let checkboxes = document.querySelectorAll(".check-left, .check-right");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    let allLabels = document.querySelectorAll(".labels");
    allLabels.forEach((label) => {
      label.classList.remove("clicked");
    });

    let label = event.target;
    label.classList.add("clicked");
    label.checked = true;
  };

  return (
    <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
      <CModalHeader>
        <CModalTitle>Add Functional Groupings</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Add information and add new Functional Grouping</p>
        <CFormInput
          className="mb-3"
          type="text"
          label="Group Name"
          placeholder="Group Name"
          name="groupName"
          value={functionalData.groupName}
          onChange={(e) => {
            handleInputChange("groupName", e.target.value);
          }}
          required
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Group Description"
          placeholder="Group Description"
          name="groupDescription"
          value={functionalData.groupDescription}
          onChange={(e) => {
            handleInputChange("groupDescription", e.target.value);
          }}
          required
        />
        <label htmlFor="drag-drop" className="mb-2">
          Available Technologies
        </label>
        <div className="d-flex" id="drag-drop">
          <div className="w-100 m-3">
            <h5>Available</h5>
            <div
              className="shadow p-2 rounded border overflow-y-auto"
              style={{ height: "350px" }}
            >
              <ul className="list-group">
                {leftArray.map((data) => (
                  <li
                    key={data}
                    className="bg-light rounded my-1 px-3 py-1 text-dark"
                  >
                    <input
                      type="checkbox"
                      value={data}
                      id={data}
                      className="check-left d-none"
                    />
                    <label
                      className="labels cursor-pointer bg-light"
                      htmlFor={data}
                      onClick={clicked}
                    >
                      {data}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="m-auto justify-content-center">
            <button
              className="btn shadow py-1 px-3 mt-5 text-warning fs-4"
              onClick={moveRight}
            >
              <TiArrowRightThick />
            </button>
            <button
              className="btn shadow py-1 px-3 mt-2 text-warning fs-4"
              onClick={moveLeft}
            >
              <TiArrowLeftThick />
            </button>
          </div>
          <div className="w-100 m-3">
            <h5>Selected</h5>
            <div
              className="shadow p-2 rounded border overflow-y-auto"
              style={{ height: "350px" }}
            >
              <ul className="list-group">
                {rightArray.map((data) => (
                  <li
                    key={data}
                    className="bg-light rounded my-1 px-3 py-1 text-dark"
                  >
                    <input
                      type="checkbox"
                      value={data}
                      id={data}
                      className="check-right d-none"
                    />
                    <label
                      className="labels cursor-pointer bg-light"
                      htmlFor={data}
                      onClick={clicked}
                    >
                      {data}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CModalBody>

      <CModalFooter>
        <CButton color="light" onClick={closeModal}>
          Back
        </CButton>
        <CButton className="bg-info text-white" onClick={handleFormSubmit}>
          Submit
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default FunctionalGroupingModal;
