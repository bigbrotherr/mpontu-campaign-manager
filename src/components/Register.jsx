import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    };
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <div className="register">
          <h2>Register Here</h2>
          <div className="register-form">
            <form>
              <input
                className="field"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={(e) => this.change(e)}
                required
              />
              <br />
              <input
                className="field"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={(e) => this.change(e)}
                required
              />
              <br />
              <input
                className="field"
                name="username"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={(e) => this.change(e)}
              />
              <br />
              <input
                className="field"
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.change(e)}
                required
              />
              <br />
              <input
                className="field"
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(e) => this.change(e)}
                required
              />
              <br />
              <Link to="/dashboard">
                <button
                  className="btn btn-primary "
                  // onClick={(e) => this.onSubmit(e)}
                >
                  Submit
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
