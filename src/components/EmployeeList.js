import React from "react";
import Employee from "./Employee";

const EmployeeList = props => (
  <div>
    {props.employeeList.map((employee, id) => (
      <Employee employee={employee} key={id} />
    ))}
  </div>
);
export default EmployeeList;
