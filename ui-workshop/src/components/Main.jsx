import React from "react";
import Reports from "./Reporting/Reports";
import { Routes, Route, Link } from "react-router-dom";
import EmployeeList from "./Reporting/ReportPages/EmployeeList";
import DQCompliance from "./Reporting/ReportPages/DQCompliance";
import DriverList from "./Reporting/ReportPages/DriverList";

function Main() {
  return (
    <div>
      <Link to="/">Reports</Link>
      <Routes>
        <Route path="/" element={<Reports />} />
        <Route path="/report/1/1" element={<EmployeeList />} />
        <Route path="/report/1/2" element={<DriverList />} />
      </Routes>
    </div>
  );
}

export default Main;
