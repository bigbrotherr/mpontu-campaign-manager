import React, { Component } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Form />
      </div>
    );
  }
}
