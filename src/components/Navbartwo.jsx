import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbartwo() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow ">
        <div className="container-fluid">
          <Link className="navbar-brand logo " to="/">
            Mpontu Tech
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link links link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link links " aria-current="page" to="">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link links" aria-current="page" to="">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex  form">
              <input
                className="form-control mr-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary button_solo" type="submit">
                Search
              </button>
            </form>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
