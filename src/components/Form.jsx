import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
class Form extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Login />
          </div>
          <div className="col-md-6 ">
            <Register />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
