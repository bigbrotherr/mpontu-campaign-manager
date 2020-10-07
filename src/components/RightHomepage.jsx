import React, { Component } from "react";
import "./style.css";
import image from '../images/image.svg'
export default class LeftHomepage extends Component {
  render() {
    return (
      <div className="left_container">
        <img src={image} alt='img' className="img-fluid"/>
      </div>
    );
  }
}
