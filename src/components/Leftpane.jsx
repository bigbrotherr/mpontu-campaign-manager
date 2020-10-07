import React, { Component } from "react";

export default class Leftpane extends Component {
  render() {
    return (
      <div className="left_pane text-center">
        <div className="left_pane_details">
          <div>
            <i className="fas fa-user"></i>
            <p className="username">Welcome Username</p>
          </div>
          <hr />
          <div>
            <p className=" active_link">Recent Campaigns</p>
            <p className="pane_links">New Campaigns</p>
          </div>
          <hr />
          <p className=" logout">Logout</p>
        </div>
      </div>
    );
  }
}
