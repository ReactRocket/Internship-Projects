import React, { useState, useEffect } from 'react'

const inputTypes = [
  // "checkbox",
  "text",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  // "radio",
  "range",
  "tel",
  "time",
  "url",
  "week",
];

const defaultStates = {
  label: "",
  type: "text",
  required: "false",
  validation: "false",
  validationPattern: "",
  validationMessage: "",
  isStyle: "none",
  styleTo: "none",
};

const formStyleStates = {
  formDisplay: "block",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "row",
  gap: "0",
  formPadding: "0",
  formWidth: "100",
  formFontColor: "#000000",
  formBackgroundColor: "#ffffff",
  formBoxShadow: "0",
  formBorderWidth: "0",
  formBorderColor: "#000000",
  formBorderStyle: "solid",
};

const labelStyleStates = {
  textTransform: "none",
  textDecoration: "none",
  fontColor: "#000000",
  fontWeight: "0",
  fontSize: "20",
  padding: "0",
  margin: "0",
};

const inputStyleStates = {
  borderWidth: "1",
  borderColor: "#000000",
  borderStyle: "solid",
  inputFontSize: "20",
  inputFontColor: "#000000",
  borderSide: "border",
  inputPadding: "0",
  inputMargin: "0",
};
const submitButtonStyleStates = {
  submitButtonTitle: "Submit",
  submitButtonCursor: "none",
  submitButtonRounded: "0",
  submitButtonBorderWidth: "1",
  submitButtonBorderColor: "#000000",
  submitButtonBorderStyle: "solid",
  submitButtonFontSize: "20",
  submitButtonFontColor: "#000000",
  submitButtonBackgroundColor: "#ffffff",
  submitButtonPadding: "0",
  submitButtonMargin: "0",
};
const resetButtonStyleStates = {
  resetButtonTitle: "Reset",
  resetButtonCursor: "none",
  resetButtonRounded: "0",
  resetButtonBorderWidth: "1",
  resetButtonBorderColor: "#000000",
  resetButtonBorderStyle: "solid",
  resetButtonFontSize: "20",
  resetButtonFontColor: "#000000",
  resetButtonBackgroundColor: "#ffffff",
  resetButtonPadding: "0",
  resetButtonMargin: "0",
};

const classNameStyleStates = {
  classNameForm: "",
  classNameLabel: "",
  classNameInput: "",
  classNameSubmitButton: "",
  classNameResetButton: "",
};

const AddFields = () => {


  const [addFormData, setAddFormData] = useState(defaultStates);
  const [addFormStyle, setAddFormStyle] = useState(formStyleStates);
  const [addLabelStyle, setAddLabelStyle] = useState(labelStyleStates);
  const [addInputStyle, setAddInputStyle] = useState(inputStyleStates);
  const [addClassNameStyle, setAddClassNameStyle] = useState(classNameStyleStates);
  const [addSubmitButtonStyle, setAddSubmitButtonStyle] = useState(submitButtonStyleStates);
  const [addResetButtonStyle, setAddResetButtonStyle] = useState(resetButtonStyleStates);

  useEffect(() => {
    console.log(addFormData);
    console.log(addFormStyle);
    console.log(addLabelStyle);
    console.log(addInputStyle);
    console.log(addClassNameStyle);
    console.log(addSubmitButtonStyle);
    console.log(addResetButtonStyle);
  }, [
    addFormData,
    addFormStyle,
    addLabelStyle,
    addInputStyle,
    addClassNameStyle,
    addSubmitButtonStyle,
    addResetButtonStyle
  ]);

  const handleChange = (e) => {

    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });

    setAddInputStyle({ ...addInputStyle, [e.target.name]: e.target.value });
    setAddLabelStyle({ ...addLabelStyle, [e.target.name]: e.target.value });
    setAddFormStyle({ ...addFormStyle, [e.target.name]: e.target.value });
    setAddSubmitButtonStyle({ ...addSubmitButtonStyle, [e.target.name]: e.target.value });
    setAddResetButtonStyle({ ...addResetButtonStyle, [e.target.name]: e.target.value });

    setAddClassNameStyle({ ...addClassNameStyle, [e.target.name]: e.target.value, });

    if (e.target.name === "styleTo") {
      e.target.value === 'none' && setAddClassNameStyle(classNameStyleStates);
    }

    console.log(
      addFormData,
      addFormData,
      addInputStyle,
      addLabelStyle,
      addClassNameStyle,
      addResetButtonStyle,
      addSubmitButtonStyle
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fieldNameRequiredAlert = document.getElementById(
      "fieldNameRequiredAlert"
    );
    const validationMessageRequiredAlert = document.getElementById(
      "validationMessageRequiredAlert"
    );
    const validationPatternRequiredAlert = document.getElementById(
      "validationPatternRequiredAlert"
    );

    if (addFormData.label === "") {
      fieldNameRequiredAlert.innerText = "Please enter field name";
    }

    if (addFormData.validation === "true") {
      if (addFormData.validationMessage === "") {
        validationMessageRequiredAlert.innerText =
          "Please enter validation message";
      }
      if (addFormData.validationPattern === "") {
        validationPatternRequiredAlert.innerText =
          "Please enter validation pattern";
      }
    }
  };

  const handleReset = () => {
    const fieldNameRequiredAlert = document.getElementById(
      "fieldNameRequiredAlert"
    );

    const validationMessageRequiredAlert = document.getElementById(
      "validationMessageRequiredAlert"
    );

    const validationPatternRequiredAlert = document.getElementById(
      "validationPatternRequiredAlert"
    );
    setAddFormData(defaultStates);
    setAddInputStyle(inputStyleStates);
    setAddLabelStyle(labelStyleStates);
    setAddFormStyle(formStyleStates);
    setAddClassNameStyle(classNameStyleStates);
    setAddResetButtonStyle(resetButtonStyleStates);
    setAddSubmitButtonStyle(submitButtonStyleStates);

    fieldNameRequiredAlert.innerText = "*";

    if (addFormData.validation === "true") {
      validationMessageRequiredAlert.innerText = "*";
      validationPatternRequiredAlert.innerText = "*";
    }
  };

  const formStyle = {
    display: addFormStyle.formDisplay,
    justifyContent: addFormStyle.justifyContent,
    alignItems: addFormStyle.alignItems,
    flexDirection: addFormStyle.flexDirection,
    // rowGap: `${addFormStyle.rowGap}px`,
    gap: `${addFormStyle.gap}px`,
    height: `${addFormStyle.formHeight}%`,
    width: `${addFormStyle.formWidth}%`,
    margin: `${addFormStyle.formMargin}px`,
    padding: `${addFormStyle.formPadding}px`,
    backgroundColor: addFormStyle.formBackgroundColor,
    boxShadow: ` 0px 0px ${addFormStyle.formBoxShadow}px ${addFormStyle.formBoxShadow}px`,
    border: `${addFormStyle.formBorderWidth}px ${addFormStyle.formBorderStyle} ${addFormStyle.formBorderColor} `,
    color: addFormStyle.formFontColor,
  };

  const labelStyle = {
    margin: `${addLabelStyle.margin}px`,
    padding: `${addLabelStyle.padding}px`,
    fontSize: `${addLabelStyle.fontSize}px`,
    fontWeight: addLabelStyle.fontWeight,
    color: addLabelStyle.fontColor,
    textTransform: addLabelStyle.textTransform,
    textDecoration: addLabelStyle.textDecoration,
  };

  const inputStyle = {
    margin: `${addInputStyle.inputMargin}px`,
    padding: `${addInputStyle.inputPadding}px`,
    fontSize: `${addInputStyle.inputFontSize}px`,
    color: addInputStyle.inputFontColor,
    [addInputStyle.borderSide]: `${addInputStyle.borderWidth}px ${addInputStyle.borderStyle} ${addInputStyle.borderColor}`,
  };

  const submitButtonStyle = {
    margin: `${addSubmitButtonStyle.submitButtonMargin}px`,
    padding: `${addSubmitButtonStyle.submitButtonPadding}px`,
    fontSize: `${addSubmitButtonStyle.submitButtonFontSize}px`,
    color: addSubmitButtonStyle.submitButtonFontColor,
    border: `${addSubmitButtonStyle.submitButtonBorderWidth}px ${addSubmitButtonStyle.submitButtonBorderStyle} ${addSubmitButtonStyle.submitButtonBorderColor}`,
    cursor: addSubmitButtonStyle.submitButtonCursor,
    borderRadius: `${addSubmitButtonStyle.submitButtonRounded}%`,
    backgroundColor: addSubmitButtonStyle.submitButtonBackgroundColor
  };

  const resetButtonStyle = {
    margin: `${addResetButtonStyle.resetButtonMargin}px`,
    padding: `${addResetButtonStyle.resetButtonPadding}px`,
    fontSize: `${addResetButtonStyle.resetButtonFontSize}px`,
    color: addResetButtonStyle.resetButtonFontColor,
    border: `${addResetButtonStyle.resetButtonBorderWidth}px ${addResetButtonStyle.resetButtonBorderStyle} ${addResetButtonStyle.resetButtonBorderColor}`,
    cursor: addResetButtonStyle.resetButtonCursor,
    borderRadius: `${addResetButtonStyle.resetButtonRounded}%`,
    backgroundColor: addResetButtonStyle.resetButtonBackgroundColor
  };



  return (
    <>
      <div
        className="container h-screen w-full flex justify-center items-center p-5 gap-3"
      >
        <div className="w-1/2 h-full p-5  border-2  rounded overflow-auto">
          <form onSubmit={handleSubmit} >
            <h2 align="center" className="text-gray-700 text-2xl font-bold mb-2">
              Add Field
            </h2>

            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fieldName">
                Field Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                value={addFormData.label}
                type="text"
                id="fieldName"
                name="label"
                placeholder="Field name"
              />
              <small className="text-red-600" id="fieldNameRequiredAlert">
                *
              </small>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fieldType">
                Field Type
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                value={addFormData.type}
                id="fieldType"
                name="type"
              >
                {inputTypes.map((type, i) => {
                  return (
                    <option value={type} key={i}>
                      {type}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requiredField">
                Required
              </label>

              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                value={addFormData.required}
                name="required"
                id="requiredField"
              >
                <option value={false}>False</option>
                <option value={true}>True</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="validationField">
                Validation
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                value={addFormData.validation} // Use the value prop to set the selected value
                name="validation"
                id="validationField"
              >
                <option value={false}>False</option>
                <option value={true}>True</option>
              </select>
            </div>
            {addFormData.validation === "true" && (
              <>
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="validationPattern">
                    Validation Pattern
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={addFormData.validationPattern}
                    type="text"
                    id="validationPattern"
                    name="validationPattern"
                    placeholder="Validation Pattern"
                  />
                  <small
                    className="text-red-600"
                    id="validationPatternRequiredAlert"
                  >
                    *
                  </small>
                </div>
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="validationMessage">
                    Validation Message
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={addFormData.validationMessage}
                    type="text"
                    id="validationMessage"
                    name="validationMessage"
                    placeholder="Validation Message"
                  />
                  <small
                    className="text-red-600"
                    id="validationMessageRequiredAlert"
                  >
                    *
                  </small>
                </div>
              </>
            )}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isStyle">
                Style
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                value={addFormData.isStyle}
                name="isStyle"
                id="isStyle"
              >
                <option value={"none"}>None</option>
                <option value={"css"}>Css</option>
                <option value={"className"}>className</option>
              </select>
            </div>
            {(addFormData.isStyle === "css" ||
              addFormData.isStyle === "className") && (
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="styleTo">
                    Style To
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={addFormData.styleTo}
                    name="styleTo"
                    id="styleTo"
                  >
                    <option value={"none"}>None</option>
                    <option value={"form"}>Form</option>
                    <option value={"label"}>Label</option>
                    <option value={"input"}>Input</option>
                    <option value={"submit"}>Submit Button</option>
                    <option value={"reset"}>Reset Button</option>
                  </select>
                </div>
              )}

            {addFormData.isStyle === "css" &&
              addFormData.styleTo === "form" && (
                <div className="border border-3 rounded p-3 mb-3">
                  <div className="flex justify-between items-center  mb-3">
                    <legend className="block text-gray-700 text-xl font-bold mb-2">Form Styles </legend>
                    <span className="text-red-600 ">
                      <svg
                        onClick={() => setAddFormStyle(formStyleStates)}
                        style={{ cursor: "pointer" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </span>
                  </div>

                  <fieldset className=" grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-5">
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formDisplay">
                        Form Display
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={addFormStyle.formDisplay}
                        id="formDisplay"
                        name="formDisplay"
                      >
                        <option value="block">Block</option>
                        <option value="inline">Inline</option>
                        <option value="flex">Flex</option>
                        <option value="grid">Grid</option>
                        <option value="none">none</option>
                      </select>
                    </div>
                    {
                      addFormStyle.formDisplay === 'flex' &&
                      <>
                        <div className="col">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="justifyContent">
                            Justify Content
                          </label>
                          <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handleChange}
                            value={addFormStyle.justifyContent}
                            id="justifyContent"
                            name="justifyContent"
                          >
                            <option value="flex-start">flex-start</option>
                            <option value="flex-end">flex-end</option>
                            <option value="center">center</option>
                            <option value="space-between">space-between</option>
                            <option value="space-around">space-around</option>
                          </select>
                        </div>
                        <div className="col">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alignItems">
                            Align Items
                          </label>
                          <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handleChange}
                            value={addFormStyle.alignItems}
                            id="alignItems"
                            name="alignItems"
                          >
                            <option value="flex-start">flex-start</option>
                            <option value="flex-end">flex-end</option>
                            <option value="center">center</option>
                            <option value="baseline">baseline</option>
                            <option value="stretch">stretch</option>
                          </select>
                        </div>

                        <div className="col">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="flexDirection">
                            Flex Direction
                          </label>
                          <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handleChange}
                            value={addFormStyle.flexDirection}
                            id="flexDirection"
                            name="flexDirection"
                          >
                            <option value="row">row</option>
                            <option value="row-reverse">row-reverse</option>
                            <option value="column">column</option>
                            <option value="column-reverse">column-reverse</option>
                          </select>
                        </div>
                      </>
                    }

                    {
                      (addFormStyle.formDisplay === 'flex' || addFormStyle.formDisplay === 'grid') && <div className="col">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gap">
                          Gap
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="number"
                          min={0}
                          onChange={handleChange}
                          value={addFormStyle.gap}
                          id="gap"
                          name="gap"
                        />
                      </div>
                    }


                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formPadding">
                        Padding
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addFormStyle.formPadding}
                        id="formPadding"
                        name="formPadding"
                      />
                    </div>
                    <div className="col">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="formBackgroundColor"
                      >
                        Background Color
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        onChange={handleChange}
                        value={addFormStyle.formBackgroundColor}
                        id="formBackgroundColor"
                        name="formBackgroundColor"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formFontColor">
                        Font Color
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        onChange={handleChange}
                        value={addFormStyle.formFontColor}
                        id="formFontColor"
                        name="formFontColor"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formBoxShadow">
                        Box Shadow
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addFormStyle.formBoxShadow}
                        id="formBoxShadow"
                        name="formBoxShadow"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formBorderWidth">
                        Border Width
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addFormStyle.formBorderWidth}
                        id="formBorderWidth"
                        name="formBorderWidth"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formBorderColor">
                        Border Color
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        onChange={handleChange}
                        value={addFormStyle.formBorderColor}
                        id="formBorderColor"
                        name="formBorderColor"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formBorderStyle">
                        Border Style
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={addFormStyle.formBorderStyle}
                        id="formBorderStyle"
                        name="formBorderStyle"
                      >
                        <option value="solid">Solid</option>
                        <option value="dotted">Dotted</option>
                        <option value="dashed">Dashed</option>
                        <option value="double">Double</option>
                        <option value="groove">Groove</option>
                        <option value="ridge">Ridge</option>
                        <option value="inset">Inset</option>
                        <option value="outset">Outset</option>
                        <option value="hidden">Hidden</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </fieldset>
                </div>
              )}

            {addFormData.isStyle === "css" &&
              addFormData.styleTo === "label" && (
                <div className="border border-3 rounded p-3 mb-3">
                  <div className="flex justify-between items-center  mb-3">
                    <legend className="block text-gray-700 text-xl font-bold mb-2">Label Styles </legend>
                    <span className="text-red-600">
                      <svg
                        onClick={() => setAddLabelStyle(labelStyleStates)}
                        style={{ cursor: "pointer" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </span>
                  </div>
                  <fieldset className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-5">
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="margin">
                        Margin
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addLabelStyle.margin}
                        id="margin"
                        name="margin"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="padding">
                        Padding
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addLabelStyle.padding}
                        id="padding"
                        name="padding"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fontSize">
                        Font Size
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={1}
                        onChange={handleChange}
                        value={addLabelStyle.fontSize}
                        id="fontSize"
                        name="fontSize"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fontColor">
                        Font Color
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        onChange={handleChange}
                        value={addLabelStyle.fontColor}
                        id="fontColor"
                        name="fontColor"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fontWeight">
                        Font Weight
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={addLabelStyle.fontWeight}
                        id="fontWeight"
                        name="fontWeight"
                      >
                        <option value="none">none</option>
                        <option value="300">light</option>
                        <option value="400">Normal</option>
                        <option value="700">Bold</option>
                      </select>
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="textTransform">
                        Text-Transform
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={addLabelStyle.textTransform}
                        id="textTransform"
                        name="textTransform"
                      >
                        <option value="none">none</option>
                        <option value="uppercase">uppercase</option>
                        <option value="lowercase">lowercase</option>
                        <option value="capitalize">capitalize</option>
                      </select>
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="textDecoration">
                        Text-Decoration
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={addLabelStyle.textDecoration}
                        id="textDecoration"
                        name="textDecoration"
                      >
                        <option value="none">none</option>
                        <option value="underline">underline</option>
                        <option value="overline">overline</option>
                        <option value="line">line</option>
                        <option value="blink">blink</option>
                      </select>
                    </div>
                  </fieldset>
                </div>
              )}

            {addFormData.isStyle === "css" &&
              addFormData.styleTo === "input" && (
                <div className="border border-3 rounded p-3 mb-3">
                  <div className="flex justify-between items-center  mb-3">
                    <legend className="block text-gray-700 text-xl font-bold mb-2">Input Styles</legend>
                    <span className="text-red-600">
                      <svg
                        onClick={() => setAddInputStyle(inputStyleStates)}
                        style={{ cursor: "pointer" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </span>
                  </div>
                  <fieldset className=" grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-5">
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputMargin">
                        Margin
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addInputStyle.inputMargin}
                        id="inputMargin"
                        name="inputMargin"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputPadding">
                        Padding
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addInputStyle.inputPadding}
                        id="inputPadding"
                        name="inputPadding"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputFontSize">
                        Font Size
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addInputStyle.inputFontSize}
                        id="inputFontSize"
                        name="inputFontSize"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputFontColor">
                        Font Color
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        onChange={handleChange}
                        value={addInputStyle.inputFontColor}
                        id="inputFontColor"
                        name="inputFontColor"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="borderWidth">
                        Border Width
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addInputStyle.borderWidth}
                        id="borderWidth"
                        name="borderWidth"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="borderColor">
                        Border Color
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        onChange={handleChange}
                        value={addInputStyle.borderColor}
                        id="borderColor"
                        name="borderColor"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="borderStyle">
                        Border Style
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={addInputStyle.borderStyle}
                        id="borderStyle"
                        name="borderStyle"
                      >
                        <option value="solid">Solid</option>
                        <option value="dotted">Dotted</option>
                        <option value="dashed">Dashed</option>
                        <option value="double">Double</option>
                        <option value="groove">Groove</option>
                        <option value="ridge">Ridge</option>
                        <option value="inset">Inset</option>
                        <option value="outset">Outset</option>
                        <option value="hidden">Hidden</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="borderSide">
                        Border Side
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={addInputStyle.borderSide}
                        id="borderSide"
                        name="borderSide"
                      >
                        <option value="border">All</option>
                        <option value="borderTop">Top</option>
                        <option value="borderRight">Right</option>
                        <option value="borderBottom">Bottom</option>
                        <option value="borderLeft">Left</option>
                      </select>
                    </div>
                  </fieldset>
                </div>
              )}
            {addFormData.isStyle === "css" &&
              addFormData.styleTo === "submit" && (
                <div className="border border-3 rounded p-3 mb-3">
                  <div className="flex justify-between items-center  mb-3">
                    <legend className="block text-gray-700 text-xl font-bold mb-2">Submit Button Styles</legend>
                    <span className="text-red-600">
                      <svg
                        onClick={() => setAddSubmitButtonStyle(submitButtonStyleStates)}
                        style={{ cursor: "pointer" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </span>
                  </div>
                  <fieldset className=" grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-5">
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="submitButtonTitle">
                        Text
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        required
                        onChange={handleChange}
                        value={addSubmitButtonStyle.submitButtonTitle}
                        id="submitButtonTitle"
                        name="submitButtonTitle"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="submitButtonMargin">
                        Margin
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addSubmitButtonStyle.submitButtonMargin}
                        id="submitButtonMargin"
                        name="submitButtonMargin"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="submitButtonPadding">
                        Padding
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addSubmitButtonStyle.submitButtonPadding}
                        id="submitButtonPadding"
                        name="submitButtonPadding"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="submitButtonRounded">
                        Rounded
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addSubmitButtonStyle.submitButtonRounded}
                        id="submitButtonRounded"
                        name="submitButtonRounded"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="submitButtonFontSize">
                        Font Size
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addSubmitButtonStyle.submitButtonFontSize}
                        id="submitButtonFontSize"
                        name="submitButtonFontSize"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="submitButtonFontColor">
                        Font Color
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        onChange={handleChange}
                        value={addSubmitButtonStyle.submitButtonFontColor}
                        id="submitButtonFontColor"
                        name="submitButtonFontColor"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="submitButtonBackgroundColor">
                        Background Color
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        onChange={handleChange}
                        value={addSubmitButtonStyle.submitButtonBackgroundColor}
                        id="submitButtonBackgroundColor"
                        name="submitButtonBackgroundColor"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="submitButtonBorderWidth">
                        Border Width
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addSubmitButtonStyle.submitButtonBorderWidth}
                        id="submitButtonBorderWidth"
                        name="submitButtonBorderWidth"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="submitButtonBorderColor">
                        Border Color
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        onChange={handleChange}
                        value={addSubmitButtonStyle.submitButtonBorderColor}
                        id="submitButtonBorderColor"
                        name="submitButtonBorderColor"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="submitButtonBorderStyle">
                        Border Style
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={addSubmitButtonStyle.submitButtonBorderStyle}
                        id="submitButtonBorderStyle"
                        name="submitButtonBorderStyle"
                      >
                        <option value="solid">Solid</option>
                        <option value="dotted">Dotted</option>
                        <option value="dashed">Dashed</option>
                        <option value="double">Double</option>
                        <option value="groove">Groove</option>
                        <option value="ridge">Ridge</option>
                        <option value="inset">Inset</option>
                        <option value="outset">Outset</option>
                        <option value="hidden">Hidden</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="submitButtonCursor">
                        Cursor
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={addSubmitButtonStyle.submitButtonCursor}
                        id="submitButtonCursor"
                        name="submitButtonCursor"
                      >
                        <option value="auto">auto</option>
                        <option value="pointer">pointer</option>
                        <option value="crosshair">crosshair</option>
                        <option value="text">text</option>
                        <option value="wait">wait</option>
                        <option value="progress">progress</option>
                        <option value="none">none</option>
                      </select>
                    </div>
                  </fieldset>
                </div>
              )}
            {addFormData.isStyle === "css" &&
              addFormData.styleTo === "reset" && (
                <div className="border border-3 rounded p-3 mb-3">
                  <div className="flex justify-between items-center  mb-3">
                    <legend className="block text-gray-700 text-xl font-bold mb-2">Reset Button Styles</legend>
                    <span className="text-red-600">
                      <svg
                        onClick={() => setAddResetButtonStyle(resetButtonStyleStates)}
                        style={{ cursor: "pointer" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </span>
                  </div>
                  <fieldset className=" grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-5">
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetButtonTitle">
                        Text
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        required
                        onChange={handleChange}
                        value={addResetButtonStyle.resetButtonTitle}
                        id="resetButtonTitle"
                        name="resetButtonTitle"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetButtonMargin">
                        Margin
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addResetButtonStyle.resetButtonMargin}
                        id="resetButtonMargin"
                        name="resetButtonMargin"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetButtonPadding">
                        Padding
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addResetButtonStyle.resetButtonPadding}
                        id="resetButtonPadding"
                        name="resetButtonPadding"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetButtonRounded">
                        Rounded
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addResetButtonStyle.resetButtonRounded}
                        id="resetButtonRounded"
                        name="resetButtonRounded"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetButtonFontSize">
                        Font Size
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addResetButtonStyle.resetButtonFontSize}
                        id="resetButtonFontSize"
                        name="resetButtonFontSize"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetButtonFontColor">
                        Font Color
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        onChange={handleChange}
                        value={addResetButtonStyle.resetButtonFontColor}
                        id="resetButtonFontColor"
                        name="resetButtonFontColor"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetButtonBackgroundColor">
                        Background Color
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        onChange={handleChange}
                        value={addResetButtonStyle.resetButtonBackgroundColor}
                        id="resetButtonBackgroundColor"
                        name="resetButtonBackgroundColor"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetButtonBorderWidth">
                        Border Width
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        min={0}
                        onChange={handleChange}
                        value={addResetButtonStyle.resetButtonBorderWidth}
                        id="resetButtonBorderWidth"
                        name="resetButtonBorderWidth"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetButtonBorderColor">
                        Border Color
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        onChange={handleChange}
                        value={addResetButtonStyle.resetButtonBorderColor}
                        id="resetButtonBorderColor"
                        name="resetButtonBorderColor"
                      />
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetButtonBorderStyle">
                        Border Style
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={addResetButtonStyle.resetButtonBorderStyle}
                        id="resetButtonBorderStyle"
                        name="resetButtonBorderStyle"
                      >
                        <option value="solid">Solid</option>
                        <option value="dotted">Dotted</option>
                        <option value="dashed">Dashed</option>
                        <option value="double">Double</option>
                        <option value="groove">Groove</option>
                        <option value="ridge">Ridge</option>
                        <option value="inset">Inset</option>
                        <option value="outset">Outset</option>
                        <option value="hidden">Hidden</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                    <div className="col">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetButtonCursor">
                        Cursor
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={addResetButtonStyle.resetButtonCursor}
                        id="resetButtonCursor"
                        name="resetButtonCursor"
                      >
                        <option value="auto">auto</option>
                        <option value="pointer">pointer</option>
                        <option value="crosshair">crosshair</option>
                        <option value="text">text</option>
                        <option value="wait">wait</option>
                        <option value="progress">progress</option>
                        <option value="none">none</option>
                      </select>
                    </div>
                  </fieldset>
                </div>
              )}


            {addFormData.isStyle === "className" &&
              addFormData.styleTo === "form" && (
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classNameForm">
                    Form className Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={addClassNameStyle.classNameForm}
                    type="text"
                    id="classNameForm"
                    name="classNameForm"
                    placeholder="Form className Name"
                  />
                </div>
              )}
            {addFormData.isStyle === "className" &&
              addFormData.styleTo === "label" && (
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classNameLabel">
                    Label className Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={addClassNameStyle.classNameLabel}
                    type="text"
                    id="classNameLabel"
                    name="classNameLabel"
                    placeholder="Label className Name"
                  />
                </div>
              )}
            {addFormData.isStyle === "className" &&
              addFormData.styleTo === "input" && (
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classNameInput">
                    Input className Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={addClassNameStyle.classNameInput}
                    type="text"
                    id="classNameInput"
                    name="classNameInput"
                    placeholder="Input className Name"
                  />
                </div>
              )}
            {addFormData.isStyle === "className" &&
              addFormData.styleTo === "submit" && (
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classNameSubmitButton">
                    Submit Button className Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={addClassNameStyle.classNameSubmitButton}
                    type="text"
                    id="classNameSubmitButton"
                    name="classNameSubmitButton"
                    placeholder="Submit Button className Name"
                  />
                </div>
              )}
            {addFormData.isStyle === "className" &&
              addFormData.styleTo === "reset" && (
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classNameResetButton">
                    Reset Button className Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={addClassNameStyle.classNameResetButton}
                    type="text"
                    id="classNameResetButton"
                    name="classNameResetButton"
                    placeholder="Reset Button className Name"
                  />
                </div>
              )}

            <div className="mb-3 ">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Add
              </button>
              <button
                className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
                onClick={handleReset}
              >
                Reset
              </button>

            </div>
          </form>
        </div>
        <div className="w-1/2 h-full p-5   border-2  rounded ">
          <h2 align="center" className="text-gray-700 text-2xl font-bold mb-2">
            Preview
          </h2>

          <form
            className={
              addFormData.isStyle === "className"
                ? addClassNameStyle.classNameForm
                : ""
            }
            style={addFormData.isStyle === "css" ? formStyle : {}}

            onSubmit={(e) => { e.preventDefault(); console.log("Submitted"); }}
          >
            <div className="">
              <label
                className={
                  addFormData.isStyle === "className"
                    ? addClassNameStyle.classNameLabel
                    : ""
                }
                style={addFormData.isStyle === "css" ? labelStyle : {}}
                htmlFor={
                  addFormData.label.toLowerCase().trim().replace(" ", "") ||
                  "label"
                }
              >
                {addFormData.label || "Label"}
              </label>
              <input
                className={
                  addFormData.isStyle === "className"
                    ? addClassNameStyle.classNameInput
                    : ""
                }
                style={addFormData.isStyle === "css" ? inputStyle : {}}
                type={addFormData.type}
                name={
                  addFormData.label.toLowerCase().trim().replace(" ", "") ||
                  "label"
                }
                id={
                  addFormData.label.toLowerCase().trim().replace(" ", "") ||
                  "label"
                }
                placeholder={`Enter ${addFormData.label.toLowerCase().trim().replace(" ", "") ||
                  "Label"
                  }`}
                required={addFormData.required === "true" ? true : false}
                pattern={
                  addFormData.validation === "true" &&
                  addFormData.validationPattern
                }
                title={
                  addFormData.validation === "true" &&
                  addFormData.validationMessage
                }
              />
            </div>
            <div className="">
              <button
                type="submit"
                className={
                  addFormData.isStyle === "className"
                    ? addClassNameStyle.classNameSubmitButton
                    : ""
                }
                style={addFormData.isStyle === "css" ? submitButtonStyle : {}}>
                {addSubmitButtonStyle.submitButtonTitle}
              </button>
              <button
                type="reset"
                className={
                  addFormData.isStyle === "className"
                    ? addClassNameStyle.classNameResetButton
                    : ""
                } style={addFormData.isStyle === "css" ? resetButtonStyle : {}}>
                {addResetButtonStyle.resetButtonTitle}
              </button>
            </div>
          </form>
        </div>
      </div >
    </>
  )
}

export default AddFields

