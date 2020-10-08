import React, { Component } from "react";
import Table from "./Table";

export default class Rightpane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaignName: "",
      file: "",
      date: "",
      number: "",
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
      campaignName: "",
      file: "",
      date: "",
      number: "",
    });
  };

  render() {
    return (
      <div className="container-fluid right_pane">
        <div className="row right_pane_header">
          <div className="col-9">
            <p>Dashboard</p>
          </div>
          <div className="col-3 ">
            {/* Button trigger modal  */}
            <button
              type="button"
              className="btn btn-primary action"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fa fa-plus"></i>
              New
            </button>

            {/* Modal  */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add A New Campaign
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  {/********** Modal Body ********/}
                  <div className="modal-body">
                    <form className="modal_form">
                      <input
                        className="field"
                        name="number"
                        type="number"
                        placeholder="Select Number"
                        value={this.state.number}
                        onChange={(e) => this.change(e)}
                        required
                      />
                      <input
                        className="field"
                        name="campaignName"
                        type="text"
                        placeholder="Enter campaign name"
                        value={this.state.campaignName}
                        onChange={(e) => this.change(e)}
                        required
                      />
                      <br />
                      <input
                        className="field"
                        name="file"
                        type="file"
                        placeholder="Last Name"
                        value={this.state.file}
                        onChange={(e) => this.change(e)}
                        required
                      />
                      <br />
                      <input
                        className="field"
                        name="date"
                        type="date"
                        placeholder="Username"
                        value={this.state.date}
                        onChange={(e) => this.change(e)}
                      />
                      <br />

                      <button
                        className="btn btn-primary "
                        onClick={(e) => this.onSubmit(e)}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row right_pane_header">
          <Table />
        </div>
      </div>
    );
  }
}
