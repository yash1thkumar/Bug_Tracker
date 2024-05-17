import DialogueBox from "./dialogueBox";
import "./navBar.css";
import { useState } from "react";

function NavBar() {
  // const [selectedItem, setSelectedItem] = useState("Home");

  // const [showModal, setShowModal] = useState(false);

  const [showComp, setShowComp] = useState(false);

  const handleItemClick = () => {
    setShowComp(true);
  };
  // const handleItemClick = (item) => {
  //   // setSelectedItem(item);
  // };

  // function PopUp(type) {
  //   <div>
  //     <DialogueBox type={type} />
  //   </div>;
  // }

  // const [isVisible, setIsVisible] = useState(false);

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light navContainer "
      id="navContainer"
    >
      <div className="container">
        <a className="navbar-brand font-weight-bold ">Bug Tracker</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
            // className={`nav-item ${selectedItem === "Home" ? "active" : ""}`}
            >
              <a
                className="nav-link font-weight-bold "
                onClick={() => handleItemClick("Home")}
              >
                Home
              </a>
            </li>

            <li
            // className={`nav-item ${selectedItem === "Bugs" ? "active" : ""}`}
            >
              <a
                className="nav-link font-weight-bold"
                onClick={() => handleItemClick("Bugs")}
              >
                Bugs
              </a>
            </li>

            {/* <li
              className={`nav-item ${
                selectedItem === "Create a Project" ? "active" : ""
              }`}
            >
              <a
                className="nav-link font-weight-bold"
                onClick={() => {
                  handleItemClick("project");
                }}
              >
                Create a Project
              </a>
            </li> */}

            <li
            // className={`nav-item ${
            //   selectedItem === "Create a Project" ? "active" : ""
            // }`}
            >
              <a
                className="nav-link font-weight-bold"
                onClick={() => {
                  handleItemClick("Create a Project");
                }}
              >
                Create a Project
              </a>
              {/* Conditional rendering of DialogueBox */}
              {/* {selectedItem === "Create a Project" && (
                <DialogueBox type="employee" />
              )} */}
            </li>

            <li
            // className={`nav-item ${
            //   selectedItem === "Add an employee" ? "active" : ""
            // }`}
            >
              <a
                className="nav-link"
                onClick={() => handleItemClick("employee")}
              >
                Add an employee
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* //use inside useeffect too many re renders*/}
      {/* <div>
        <button onClick={toggleVisibility}>Toggle Component</button>
        {isVisible && <DialogueBox type={type} />}
      </div> */}
    </nav>
  );
}
export default NavBar;
