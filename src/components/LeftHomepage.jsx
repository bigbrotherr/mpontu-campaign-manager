import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default class LeftHomepage extends Component {
  render() {
    return (
      <div className="left_container">
        <h1 className="heading">
          Easy Way to Manage Your Marketing Campaign Everywhere
        </h1>
        <h6 className="heading_child">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
          consequuntur qui reprehenderit recusandae? Numquam quaerat quod in
          totam, quos vitae.Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Fugiat vero commodi nobis molestiae, ipsa velit. Magnam soluta
          obcaecati ipsam sapiente.
        </h6>
        <Link to="/signup">
          <button className="btn get_started" type="submit">
            Get Started
          </button>
        </Link>
      </div>
    );
  }
}
