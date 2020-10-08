import React, { Component } from "react";
import { Link } from "react-router-dom";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
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
      username: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <div className=" register">
          <h2>Login Here</h2>
          <div className="register-form">
            <form>
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
                  onClick={(e) => this.onSubmit(e)}
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

export default Form;
