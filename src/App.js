import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList";
import employees from "./employees/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: employees
    };
  }
  salryConversion() {}
  render() {
    return (
      <div>
        <h1 className="header">Resuelve Employee List</h1>
        <table id="employees">
          <thead>
            <tbody>
              <th width="193" scope="column" id="name">
                Name
              </th>
              <th width="157" scope="column" id="company">
                Company
              </th>
              <th width="95" scope="column" id="age">
                Age
              </th>
              <th width="155" scope="column" id="phone">
                Phone
              </th>
              <th width="206" scope="column" id="email">
                Email
              </th>
              <th width="117" scope="column" id="salary">
                Salary
              </th>
            </tbody>
          </thead>
          <EmployeeList employeeList={this.state.list} />
        </table>
      </div>
    );
  }
}
export default App;
