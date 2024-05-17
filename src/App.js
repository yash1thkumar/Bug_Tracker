import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/login.jsx";
import DialogueBox from "./Common/dialogueBox";
import NavBar from "./Common/navBar";
import MyNav from "./Common/myNav";
import { useState } from "react";
import CreateBug from "./Pages/createBug";
import TableView from "./Common/tableView";
function App() {
  // return <NavBar />;
  // return <DialogueBox type={"employee"} />;
  return (
    <div className="contain">
      {/* <div className="nav"> */}
      <MyNav />
      {/* </div> */}
      <div className="space"></div>
      {/* <div className="tableComp"> */}
      <TableView />
      {/* </div> */}
      {/* <CreateBug /> */}
    </div>
  );

  // return <CreateBug />;
  // return <CreateBug />;
  // return <TableView />;
}

function CreateBugpopup() {
  const [form, setForm] = useState({});
  function saveBug() {
    setForm();
    console.log();
  }
  // function handleSubmit() {}
  return (
    <div className="createBug">
      <form onSubmit={saveBug}>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputEmail4">Bug Title:</label>
            <input type="text" class="form-control" id="inputEmail4" />
          </div>
          <div class="form-group col-md">
            <label for="inputPassword4">Description:</label>
            <input type="text" class="form-control" id="inputPassword4" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Steps to reproduce:</label>
          <input type="text" class="form-control" id="inputAddress" />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Expected:</label>
          <input type="text" class="form-control" id="inputAddress2" />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="inputCity">Actual:</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div className="d-flex justify-content-between">
            <div class="form-group col-md-1">
              <label for="inputState">Priority:</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Assign to:</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div class="form-group col-md">
            <label for="inputZip">Screenshot link:</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          {/* <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div> */}
        </div>
        <button type="submit" class="btn btn-primary m-2" onClick={saveBug}>
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
