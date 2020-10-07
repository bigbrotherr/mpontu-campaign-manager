import React, { Component } from "react";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="main_container">
        <Navbar />
        <Homepage />
      </div>
    );
  }
}
