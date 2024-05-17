import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import "./dialogueBox.css";

// function DialogueBox({ type }) {
//   const [createButton, setCreateButton] = useState("");
//   const [title, setTitle] = useState("");
//   const [input1, setInput1] = useState("");
//   const [input2, setInput2] = useState("");
//   const [input3, setInput3] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (type === "project") {
//       setCreateButton("Create a project");
//       setTitle("Enter project details");
//       setInput1("Enter project name");
//       setInput2("Enter project manager");
//       setInput3(null);
//       setMessage("Project created");
//     } else if (type === "employee") {
//       setCreateButton("Add an employee");
//       setTitle("Enter employee details");
//       setInput1("Enter employee ID");
//       setInput2("Enter employee Name");
//       setInput3("Select Designation");
//       setMessage("Employee added successfully");
//     }
//   }, [type]);

//   return (
//     <div>
//       <ModalContent
//         createButton={createButton}
//         title={title}
//         input1={input1}
//         input2={input2}
//         input3={input3}
//         type={type}
//         message={message}
//       />
//     </div>
//   );
// }

// function ModalContent({
//   createButton,
//   title,
//   input1,
//   input2,
//   input3,
//   type,
//   message,
// }) {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [employeeId, setEmployeeId] = useState("");
//   const [employeeName, setEmployeeName] = useState("");

//   //toast message save
//   function saveChanges() {
//     toastMessage(message);
//     handleClose();
//   }
//   function toastMessage(message) {
//     toast(message, {
//       position: "top-right",
//     });
//   }

//   function saveChanges() {
//     //saving code here
//     handleClose();
//     toastMessage(message);

//     console.log(employeeId);
//     console.log(employeeName);
//   }

//   function handleUserInput(event) {
//     setEmployeeId(event.target.value);
//     console.log(employeeId);
//   }

//   //dropdown state
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelection = (value) => {
//     setDesignation(value);
//     toggleDropdown();
//   };

//   // dropdown canges to be completed
//   const [designation, setDesignation] = useState("Select Designation");

//   return (
//     <div>
//       <div style={{ display: "block", width: 700, padding: 30 }}>
//         {/* <h4>React-Bootstrap Modal Component</h4> */}

//         {/* <Button variant="info" onClick={handleShow}>
//           {createButton}
//         </Button> */}

//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>{title}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div>
//               <div className="input_container">
//                 <label className="input_label" htmlFor="email_field">
//                   {input1}
//                 </label>
//                 <input
//                   name="input-name"
//                   type="text"
//                   className="input_field"
//                   id="input1"
//                   onChange={(e) => setEmployeeId(e.target.value)}
//                 />
//               </div>
//               <div className="input_container">
//                 <label className="input_label" htmlFor="employeename">
//                   {input2}
//                 </label>
//                 <input
//                   name="input-name"
//                   type="text"
//                   className="input_field"
//                   id="input2"
//                   onChange={(e) => setEmployeeName(e.target.value)}
//                 />
//               </div>
//               <div className="input_container">
//                 {type === "employee" && (
//                   <>
//                     <div className="dropdown employee_dropdown">
//                       <button
//                         className="btn btn-secondary dropdown-toggle"
//                         type="button"
//                         id="dropdownMenuButton"
//                         onClick={toggleDropdown}
//                         aria-haspopup="true"
//                         aria-expanded={isOpen ? "true" : "false"}
//                       >
//                         {designation}
//                       </button>
//                       <div
//                         className={`dropdown-menu ${isOpen ? "show" : ""}`}
//                         aria-labelledby="dropdownMenuButton"
//                       >
//                         <a
//                           className="dropdown-item"
//                           href="#"
//                           onClick={() => handleSelection("Developer")}
//                         >
//                           Developer
//                         </a>
//                         <a
//                           className="dropdown-item"
//                           href="#"
//                           onClick={() => handleSelection("QA Tester")}
//                         >
//                           QA Tester
//                         </a>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="primary" onClick={saveChanges}>
//               Save
//             </Button>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// function CreateBug(modalState) {
//   return (
//     <div>
//       <>
//         <form>
//           <div className="form-row">
//             <div className="form-group col-md-6">
//               <label htmlFor="inputEmail4">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="inputEmail4"
//                 placeholder="Email"
//               />
//             </div>
//             <div className="form-group col-md-6">
//               <label htmlFor="inputPassword4">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="inputPassword4"
//                 placeholder="Password"
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="inputAddress">Address</label>
//             <input
//               type="text"
//               className="form-control"
//               id="inputAddress"
//               placeholder="1234 Main St"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="inputAddress2">Address 2</label>
//             <input
//               type="text"
//               className="form-control"
//               id="inputAddress2"
//               placeholder="Apartment, studio, or floor"
//             />
//           </div>
//           <div className="form-row">
//             <div className="form-group col-md-6">
//               <label htmlFor="inputCity">City</label>
//               <input type="text" className="form-control" id="inputCity" />
//             </div>
//             <div className="form-group col-md-4">
//               <label htmlFor="inputState">State</label>
//               <select id="inputState" className="form-control">
//                 <option selected>Choose...</option>
//                 <option>...</option>
//               </select>
//             </div>
//             <div className="form-group col-md-2">
//               <label htmlFor="inputZip">Zip</label>
//               <input type="text" className="form-control" id="inputZip" />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 id="gridCheck"
//               />
//               <label className="form-check-label" htmlFor="gridCheck">
//                 Check me out
//               </label>
//             </div>
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Sign in
//           </button>
//         </form>
//       </>
//     </div>
//   );
// }

function EmployeeModal(modalState) {
  const [show, setShow] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [designation, setDesignation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const message = "Employee added successfully !";
  useEffect(() => {
    setShow(modalState === "true");
    handleShowModal();
  }, [modalState]);

  const handleShowModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
    window.location.reload();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (selectedDesignation) => {
    setDesignation(selectedDesignation);
    console.log(selectedDesignation);
    setIsOpen(false);
  };

  //Handle save - api code here
  function saveChanges() {
    toastMessage(message);

    handleCloseModal();

    window.location.reload();
  }
  function toastMessage(message) {
    // console.log(message);
    toast(message, {
      position: "top-right",
    });
  }

  return (
    <div>
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <Modal show={show} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Enter employee details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="input_container">
                <label className="input_label" htmlFor="email_field">
                  Employee name
                </label>
                <input
                  name="input-name"
                  type="text"
                  className="input_field"
                  id="input1"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
              </div>
              <div className="input_container">
                <label className="input_label" htmlFor="employeename">
                  Employee ID
                </label>
                <input
                  name="input-name"
                  type="text"
                  className="input_field"
                  id="input2"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                />
              </div>
              <div className="input_container">
                <div className="dropdown employee_dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    onClick={toggleDropdown}
                    aria-haspopup="true"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    {designation || "Select Designation"}
                  </button>
                  <div
                    className={`dropdown-menu ${isOpen ? "show" : ""}`}
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleSelection("Developer")}
                    >
                      Developer
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleSelection("QA Tester")}
                    >
                      QA Tester
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={saveChanges}>
              Save
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* <Button variant="info" onClick={handleShowModal}>
        Open Modal
      </Button> */}
    </div>
  );
}

// function ProjectModal(modalState) {
//   const [show, setShow] = useState(false);
//   const [employeeId, setEmployeeId] = useState("");
//   const [employeeName, setEmployeeName] = useState("");
//   const [designation, setDesignation] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (modalState === "true") {
//       setShow(true);
//     } else if (modalState === "false") {
//       setShow(false);
//     }
//   }, [modalState]);

//   const handleShowModal = () => {
//     setShow(true);
//   };

//   const handleCloseModal = () => {
//     setShow(false);
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelection = (selectedDesignation) => {
//     setDesignation(selectedDesignation);
//     setIsOpen(false);
//   };

//   const saveChanges = () => {
//     // Implement your logic to save changes here
//     handleCloseModal();
//   };

//   return (
//     <div>
//       <div style={{ display: "block", width: 700, padding: 30 }}>
//         <Modal show={show} onHide={handleCloseModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>Your Modal Title</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div>
//               <div className="input_container">
//                 <label className="input_label" htmlFor="email_field">
//                   Input 1
//                 </label>
//                 <input
//                   name="input-name"
//                   type="text"
//                   className="input_field"
//                   id="input1"
//                   value={employeeId}
//                   onChange={(e) => setEmployeeId(e.target.value)}
//                 />
//               </div>
//               <div className="input_container">
//                 <label className="input_label" htmlFor="employeename">
//                   Input 2
//                 </label>
//                 <input
//                   name="input-name"
//                   type="text"
//                   className="input_field"
//                   id="input2"
//                   value={employeeName}
//                   onChange={(e) => setEmployeeName(e.target.value)}
//                 />
//               </div>
//               <div className="input_container">
//                 <div className="dropdown employee_dropdown">
//                   <button
//                     className="btn btn-secondary dropdown-toggle"
//                     type="button"
//                     id="dropdownMenuButton"
//                     onClick={toggleDropdown}
//                     aria-haspopup="true"
//                     aria-expanded={isOpen ? "true" : "false"}
//                   >
//                     {designation || "Select Designation"}
//                   </button>
//                   <div
//                     className={`dropdown-menu ${isOpen ? "show" : ""}`}
//                     aria-labelledby="dropdownMenuButton"
//                   >
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       onClick={() => handleSelection("Developer")}
//                     >
//                       Developer
//                     </a>
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       onClick={() => handleSelection("QA Tester")}
//                     >
//                       QA Tester
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="primary" onClick={saveChanges}>
//               Save
//             </Button>
//             <Button variant="secondary" onClick={handleCloseModal}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//       <Button variant="info" onClick={handleShowModal}>
//         Open Modal
//       </Button>
//     </div>
//   );
// }
function ProjectModal({ modalState }) {
  // Corrected to accept props as an object
  const [show, setShow] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Use modalState directly in useEffect dependency array
    setShow(modalState === "true");
  }, [modalState]);

  const handleShowModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
    window.location.reload();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // api code here to save project
  const saveChanges = () => {
    console.log(projectName);
    // Implement your logic to save changes here
    handleCloseModal();
    window.location.reload();
  };

  return (
    <div>
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <Modal show={show} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Enter project details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="input_container">
                <label className="input_label" htmlFor="email_field">
                  Project Name
                </label>
                <input
                  name="input-name"
                  type="text"
                  className="input_field"
                  id="input1"
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              {/* <div className="input_container">
                <label className="input_label" htmlFor="employeename">
                  Project code
                </label>
                <input
                  name="input-name"
                  type="text"
                  className="input_field"
                  id="input2"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                />
              </div> */}
              <div></div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={saveChanges}>
              Save
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

function DialogueBox({ type }) {
  console.log(type);
  return (
    <div>
      {type === "employee" ? (
        <EmployeeModal modalState="true" />
      ) : type === "project" ? (
        <ProjectModal modalState="true" />
      ) : (
        <CreateBug modalState="true" />
      )}
    </div>
  );
}

export default DialogueBox;
