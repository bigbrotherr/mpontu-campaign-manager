import React, { Component } from "react";
import Leftpane from "./Leftpane";
import Rightpane from "./Rightpane";

export default class Dashpage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Leftpane />
          </div>
          <div className="col-md-9">
            <Rightpane />
          </div>
        </div>
      </div>
    );
  }
}
