import React from "react";

const Employee = props => (
  <div>
    {`${props.employee.name}`}
    <br />
    {`${props.employee.company}`}
    <br />
    {`${props.employee.salary}`}
    <br />
    {`${props.employee.age}`}
    <br />
    {`${props.employee.phone}`}
    <br />
    {`${props.employee.email}`}
  </div>
);
export default Employee;
