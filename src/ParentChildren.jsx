import toast from "react-simple-toasts";
import ChildFunction from "./ChildExample";
import { useRef, useState } from "react";

function handleClick(selectedOption) {
  toast(` ${selectedOption} clicked !`);
}

function ParentFunc() {
  // const [name, setName] = useState("");

  // let newName = useRef();

  // const handleNameupdate = () => {
  //   if (newName.current) {
  //     setName(newName.current.value);
  //   }
  // };

  const [name, setName] = useState("");

  let updatedName = useRef();

  function handleNameupdate() {
    if (updatedName.current) {
      setName(updatedName.current.value);
    }

    updatedName.current.value = "";
  }
  // create a

  return (
    <div className="d-flex justify-content-center ">
      <h1>{`Welcome ${name}`}</h1>
      <input className="input form-control w-25" ref={updatedName} />
      <button className="btn btn-info m-2" onClick={handleNameupdate}>
        Click to update
      </button>
    </div>
  );
}

export default ParentFunc;

{
  /* <ChildFunction onSelect={() => handleClick("Home")}>Home</ChildFunction>
      <ChildFunction onSelect={() => handleClick("Add an employee")}>
        Add an employee
      </ChildFunction>
      <ChildFunction onSelect={() => handleClick("Employees")}>
        Employees
      </ChildFunction>
      <ChildFunction onSelect={() => handleClick("Create a bug")}>
        Create a bug
      </ChildFunction>
      <ChildFunction onSelect={() => handleClick("Bugs")}>Bugs</ChildFunction> */
}
