import React from "react";

const Employee = props => (
  <tbody id="employees">
    <tr>
      <td width="205" headers="name">{`${props.employee.name}`}</td>

      <td width="170" headers="company">{`${props.employee.company}`}</td>

      <td width="100" headers="age">
        {`${props.employee.age}`}
        yrs
      </td>

      <td width="175" headers="phone">{`${props.employee.phone}`}</td>

      <td width="200" headers="email">{`${props.employee.email}`}</td>

      <td width="100" headers="salary">
        ${`${props.employee.salary}`}
        .00MXN
      </td>
    </tr>
  </tbody>
);
export default Employee;
