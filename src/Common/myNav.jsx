import "./myNav.css";
import { useState } from "react";
import DialogueBox from "./dialogueBox";
// function MyNav() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [type, setType] = useState("");
//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };
//   const handleClick = (buttonId) => {};

//   const handleCreate = (value) => {
//     toggleVisibility();
//     setType(true);
//     // window.location.reload();
//   };

//   return (
//     <div>
//       <div className="bar d-flex align-items-center">
//         <div className="bugtracker text-center">
//           <h3>Bug Tracker</h3>
//         </div>
//         <div className="linkscontainer">
//           <div className="navbtn">
//             <button
//               type="button"
//               className="btn btn-dark"
//               data-toggle="button"
//               aria-pressed="false"
//               onClick={() => handleClick("bugButton")}
//               id="bugButton"
//             >
//               Bugs
//             </button>
//           </div>
//           <div className="navbtn">
//             <button
//               type="button"
//               className="btn btn-dark"
//               data-toggle="button"
//               aria-pressed="false"
//               onClick={() => handleCreate("project")}
//               id="projectButton"
//             >
//               Create a Project
//             </button>
//             <div>{isVisible && <DialogueBox type={"employee"} />}</div>
//           </div>
//           <div className="navbtn">
//             <button
//               className="button btn-dark"
//               onClick={() => handleCreate("employee")}
//               id="employeeButton"
//             >
//               Add an employee
//             </button>
//           </div>
//           <div className="navbtn">
//             <button
//               className="button btn-dark"
//               onClick={() => handleCreate("createbug")}
//               id="createBugButton"
//             >
//               Create a Bug
//             </button>
//           </div>
//         </div>

//         <div className="logout align-items-center">
//           <p>Logout</p>
//         </div>
//       </div>
//       <div>{/* <ActNav /> */}</div>
//     </div>
//   );

//   {
//     /* <div>
//         <button onClick={toggleVisibility}>Toggle Component</button>
//         {isVisible && <DialogueBox type={type} />}
//       </div> */
//   }
// }
function MyNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  //   console.log(isVisible);
  // };
  const handleClick = (buttonId) => {};

  const handleCreate = (type) => {
    setIsVisible(true);
    setType(type);
    console.log(isVisible);
    console.log(type);
  };

  return (
    <div>
      <div className="navbar">
        <h2>BugTracker</h2>
        <ul className="nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => handleCreate("project")}
            >
              Employees
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#"
              onClick={() => handleCreate("bugs")}
            >
              Bugs
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => handleCreate("project")}
            >
              Create a Project
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => handleCreate("employee")}
            >
              Add an Employee
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              tabIndex="-1"
              onClick={() => handleCreate("bug")}
              // aria-disabled="true"
            >
              Create a Bug
            </a>
          </li>
        </ul>
        <div>{isVisible && <DialogueBox type={type} />}</div>
        {/* <div>
        {dsiplayLogin && <Login/>} setDisplayLogn(false), setIsloggedin(true)
        {isloggedin && <Home/>} 
      </div> */}
      </div>
    </div>
  );
}
export default MyNav;
