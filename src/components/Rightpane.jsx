import React, { Component } from "react";

export default class Rightpane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaign: "",
      date: "",
      file: "",
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
      campaign: "",
      date: "",
      file: "",
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
                        name="Campaign Name"
                        type="text"
                        placeholder="enter campaign name"
                        value={this.state.username}
                        onChange={(e) => this.change(e)}
                      />

                      <br />
                      <input
                        className="field datepicker"
                        // data-date-format="mm/dd/yyyy"
                        name="date"
                        type="date"
                        placeholder="select date"
                        value={this.state.date}
                        onChange={(e) => this.change(e)}
                        required
                      />
                      <br />
                      <input
                        type="file"
                        class="form-file-input"
                        id="customFile"
                      />
                      <div className="form-file">
                        <input
                          value={this.state.file}
                          type="file"
                          className="form-file-input"
                          id="customFile"
                          onChange={(e) => this.change(e)}
                        />
                        <label className="form-file-label" for="customFile">
                          <span className="form-file-text">Choose file...</span>
                          <span className="form-file-button">Browse</span>
                        </label>
                      </div>
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
      </div>
    );
  }
}
