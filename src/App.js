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
  render() {
    console.log(this.state.list);
    return (
      <div>
        <h1 className="header">Resuelve Employee List</h1>
        <EmployeeList employeeList={this.state.list} />
      </div>
    );
  }
}
export default App;
