import React, { Component } from "react";
import LeftHomepage from "./LeftHomepage";
import RightHomepage from "./RightHomepage";

export default class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6">
            <LeftHomepage />
          </div>
          <div className="col-md-6">
            <RightHomepage />
          </div>
        </div>
      </div>
    );
  }
}
