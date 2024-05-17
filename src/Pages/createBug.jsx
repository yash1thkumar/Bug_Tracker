import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
function CreateBug() {
  const initialFormState = {
    title: "",
    description: "",
    steps: "",
    expected: "",
    actual: "",
    priority: "",
    assignTo: "",
    screenshotLink: "",
    browser: "",
    version: "",
  };

  const [message, setMessage] = useState("");
  const [form, setForm] = useState(initialFormState);
  // set assign to options
  const [assignOptions, setAssignOptions] = useState([]);

  function handleChange(event) {
    const { id, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  }

  function saveBug(event) {
    event.preventDefault();
    console.log(form);
    setMessage("Bug created successfully !");
    toastMessage(message);
    // Add your save logic here

    // Clear the form
    setForm(initialFormState);
  }
  function toastMessage(message) {
    // console.log(message);
    toast(message, {
      position: "top-right",
    });
  }
  // api response to fetch developers list code here
  useEffect(() => {
    setAssignOptions([
      { value: "aravind", label: "Aravind" },
      { value: "balu", label: "Balu" },
    ]);
  }, []);

  return (
    <div>
      <div className="createBug">
        <form onSubmit={saveBug}>
          <div className="form-row">
            <div className="first-row d-flex justify-content-between">
              <div className="form-group col-md-5">
                <label htmlFor="title">Bug Title:</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={form.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="priority">Priority:</label>
                <select
                  id="priority"
                  className="form-control"
                  value={form.priority}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose...</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
            </div>

            <div className="form-group col-md">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={form.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="steps">Steps to reproduce:</label>
            <input
              type="text"
              className="form-control"
              id="steps"
              value={form.steps}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expected">Expected:</label>
            <input
              type="text"
              className="form-control"
              id="expected"
              value={form.expected}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="actual">Actual:</label>
              <input
                type="text"
                className="form-control"
                id="actual"
                value={form.actual}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-group col-md-2">
                <label htmlFor="browser">Browser:</label>
                <select
                  id="browser"
                  className="form-control"
                  value={form.browser}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose...</option>
                  <option value="Chrome">Chrome</option>
                  <option value="Safari">Safari</option>
                  <option value="Brave">Brave</option>
                  <option value="Edge">Edge</option>
                  <option value="Firefox">Firefox</option>
                  <option value="Critical">Edge</option>
                </select>
              </div>

              <div className="form-group col-md-2">
                <label htmlFor="version">Version:</label>
                <input
                  type="text"
                  className="form-control"
                  id="version"
                  value={form.version}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="form-group">
              <label htmlFor="operatingSystem">Operating System:</label>
              <select
                id="operatingSystem"
                className="form-control"
                value={form.operatingSystem}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option value="Windows">Windows</option>
                <option value="macOS">macOS</option>
                <option value="Linux">Linux</option>
              </select>
            </div> */}
              <div className="form-group col-md-3">
                <label htmlFor="assignTo">Assign to:</label>
                <select
                  id="assignTo"
                  className="form-control"
                  value={form.assignTo}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  {assignOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group col-md">
              <label htmlFor="screenshotLink">Screenshot link:</label>
              <input
                type="text"
                className="form-control"
                id="screenshotLink"
                value={form.screenshotLink}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary m-2">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBug;
