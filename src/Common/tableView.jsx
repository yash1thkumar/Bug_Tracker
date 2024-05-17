// import * as React from "react";
// import PropTypes from "prop-types";
// import { alpha } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import TableSortLabel from "@mui/material/TableSortLabel";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
// import { visuallyHidden } from "@mui/utils";

// function EmployeeTable(modalState) {
//   return (
//     <div className="EmployeeTableContainer">
//       <div>Employee table</div>
//     </div>
//   );
// }
// function BugsTable(modalState) {
//   return (
//     <div className="BugtTableContainer">
//       <div>Bugs table</div>
//     </div>
//   );
// }
// function TableView({ type }) {
//   return (
//     <div className="tableview">
//       {type === "employees" ? (
//         <EmployeeTable modalState="true" />
//       ) : type === "bugs" ? (
//         <BugsTable modalState="true" />
//       ) : null}
//     </div>
//   );
// }

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const TableView = () => {
//   // Sample data array
//   const data = [
//     { "Employee ID": 1, "Employee Name": "John Doe", Designation: "Developer" },
//     { "Employee ID": 2, "Employee Name": "Doe Jhon", Designation: "QA" },
//     { "Employee ID": 3, "Employee Name": "John Deer", Designation: "Admin" },
//   ];

//   // Get the keys from the first object in the array for table headers
//   const headers = data.length > 0 ? Object.keys(data[0]) : [];

//   return (
//     <div>
//       <table className="table">
//         <thead>
//           <tr>
//             {headers.map((header) => (
//               <th key={header}>
//                 {header.charAt(0).toUpperCase() + header.slice(1)}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {headers.map((header) => (
//                 <td key={header}>{row[header]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableView;

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./tableView.css";

// const TableView = () => {
//   // Sample data array
//   const data = [
//     { id: 1, name: "John Doe", age: 28, city: "New York" },
//     { id: 2, name: "Jane Smith", age: 34, city: "San Francisco" },
//     { id: 3, name: "Sam Brown", age: 22, city: "Chicago" },
//     { id: 4, name: "Alice Johnson", age: 29, city: "Seattle" },
//     { id: 5, name: "Michael Green", age: 42, city: "Boston" },
//     { id: 6, name: "Sara White", age: 37, city: "Denver" },
//     { id: 7, name: "Paul Black", age: 45, city: "Houston" },
//     { id: 8, name: "Linda Blue", age: 30, city: "Austin" },
//     { id: 9, name: "George Yellow", age: 26, city: "Miami" },
//     { id: 10, name: "Susan Purple", age: 31, city: "Dallas" },
//     { id: 4, name: "Alice Johnson", age: 29, city: "Seattle" },
//     { id: 5, name: "Michael Green", age: 42, city: "Boston" },
//     { id: 6, name: "Sara White", age: 37, city: "Denver" },
//     { id: 7, name: "Paul Black", age: 45, city: "Houston" },
//     { id: 8, name: "Linda Blue", age: 30, city: "Austin" },
//     { id: 9, name: "George Yellow", age: 26, city: "Miami" },
//     { id: 10, name: "Susan Purple", age: 31, city: "Dallas" },
//     { id: 1, name: "John Doe", age: 28, city: "New York" },
//     { id: 2, name: "Jane Smith", age: 34, city: "San Francisco" },
//     { id: 3, name: "Sam Brown", age: 22, city: "Chicago" },
//   ];

//   // State for pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   // Get the keys from the first object in the array for table headers
//   const headers = data.length > 0 ? Object.keys(data[0]) : [];

//   // Calculate the number of pages
//   const totalPages = Math.ceil(data.length / rowsPerPage);

//   // Get the data for the current page
//   const currentData = data.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   // Handle page change
//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <div className="tableview">
//       {/* <h1>React Table with Pagination</h1> */}
//       <div className="tableContainer">
//         <table className="table">
//           <thead>
//             <tr>
//               {headers.map((header) => (
//                 <th key={header}>
//                   {header.charAt(0).toUpperCase() + header.slice(1)}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {headers.map((header) => (
//                   <td key={header}>{row[header]}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <br></br>
//       <div className="d-flex justify-content-md-center ">
//         <div className="pagination">
//           <button
//             className="btn btn-primary "
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </button>
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(index + 1)}
//               className={currentPage === index + 1 ? "active" : ""}
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button
//             className="btn btn-primary"
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//         {/* <div className="rows-per-page">
//           <label>
//             Rows per page:
//             <select
//               value={rowsPerPage}
//               onChange={(e) => setRowsPerPage(Number(e.target.value))}
//             >
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//             </select>
//           </label>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default TableView;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tableView.css";

const TableView = () => {
  // Sample data array
  const data = [
    {
      "Employee ID": 1,
      "Employee Name": "John Doe",
      Designation: "Developer",
      Status: "Active",
    },
    { "Employee ID": 2, "Employee Name": "Doe Jhon", Designation: "QA" },
    { "Employee ID": 3, "Employee Name": "John Deer", Designation: "Admin" },
    { "Employee ID": 2, "Employee Name": "Doe Jhon", Designation: "QA" },
    { "Employee ID": 1, "Employee Name": "John Doe", Designation: "Developer" },
    { "Employee ID": 1, "Employee Name": "John Doe", Designation: "Developer" },
    { "Employee ID": 2, "Employee Name": "Doe Jhon", Designation: "QA" },
    { "Employee ID": 3, "Employee Name": "John Deer", Designation: "Admin" },
    { "Employee ID": 2, "Employee Name": "Doe Jhon", Designation: "QA" },
    { "Employee ID": 1, "Employee Name": "John Doe", Designation: "Developer" },
    { "Employee ID": 1, "Employee Name": "John Doe", Designation: "Developer" },
    { "Employee ID": 2, "Employee Name": "Doe Jhon", Designation: "QA" },
    { "Employee ID": 3, "Employee Name": "John Deer", Designation: "Admin" },
    { "Employee ID": 2, "Employee Name": "Doe Jhon", Designation: "QA" },
    { "Employee ID": 1, "Employee Name": "John Doe", Designation: "Developer" },
    { "Employee ID": 2, "Employee Name": "Doe Jhon", Designation: "QA" },
    { "Employee ID": 3, "Employee Name": "John Deer", Designation: "Admin" },
    { "Employee ID": 2, "Employee Name": "Doe Jhon", Designation: "QA" },
    { "Employee ID": 3, "Employee Name": "John Deer", Designation: "Admin" },
  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Get the keys from the first object in the array for table headers
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  // Calculate the number of pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Get the data for the current page
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="tableview">
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header) => (
                  <td key={header}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div className="pagination">
          <button
            className="btn btn-primary me-2"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`btn btn-secondary me-2 ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="btn btn-primary"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="rows-per-page">
          <label>
            Rows per page:
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1); // Reset to the first page whenever rows per page change
              }}
              className="ms-2"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TableView;
