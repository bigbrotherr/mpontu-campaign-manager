import React, { Component } from "react";
import Leftpane from "./Leftpane";

export default class Dashpage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Leftpane />
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    );
  }
}
