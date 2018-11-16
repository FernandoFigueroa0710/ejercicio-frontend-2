import React from "react";

const Employee = props => (
  <tbody>
    <tr>
      <td width="200" headers="name">{`${props.employee.name}`}</td>

      <td width="175" headers="company">{`${props.employee.company}`}</td>

      <td width="100" headers="age">{`${props.employee.age}`}</td>

      <td width="175" headers="phone">{`${props.employee.phone}`}</td>

      <td width="200" headers="email">{`${props.employee.email}`}</td>

      <td width="100" headers="salary">{`${props.employee.salary}`}</td>
    </tr>
  </tbody>
);
export default Employee;
