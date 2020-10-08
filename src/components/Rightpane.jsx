import React, { Component } from "react";

export default class Rightpane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Campaign Management Dashboard",
      act: 0,
      index: "",
      datas: [],
    };
  }
  componentDidMount() {
    this.refs.campaignName.focus();
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("try");

    let datas = this.state.datas;
    let campaignName = this.refs.campaignName.value;
    let campaignDate = this.refs.campaignDate.value;
    let campaignFiles = this.refs.campaignFiles.value;

    if (this.state.act === 0) {
      //new
      let data = {
        campaignName,
        campaignDate,
        campaignFiles,
      };
      datas.push(data);
    } else {
      //update
      let index = this.state.index;
      datas[index].campaignName = campaignName;
      datas[index].campaignDate = campaignDate;
      datas[index].campaignFiles = campaignFiles;
    }

    this.setState({
      datas: datas,
      act: 0,
    });

    this.refs.myForm.reset();
    this.refs.campaignName.focus();
  };

  // Delete Campaigns
  fDelete = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas,
    });

    this.refs.myForm.reset();
    this.refs.campaignName.focus();
  };

  render() {
    let datas = this.state.datas;
    return (
      <div className="container-fluid right_pane">
        <div className="row right_pane_header">
          <div className="col-9">
            <p>{this.state.title}</p>
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
                    <form className="modal_form" ref="myForm">
                      <input
                        className="field"
                        ref="campaignName"
                        type="text"
                        placeholder="Enter campaign name"
                        required
                      />
                      <br />
                      <input
                        className="field"
                        type="date"
                        ref="campaignDate"
                        placeholder="upload file"
                        required
                      />
                      <br />
                      <input
                        className="field"
                        type="file"
                        ref="campaignFiles"
                        placeholder="input date"
                        required
                      />

                      <button
                        className="btn btn-primary "
                        onClick={(e) => this.onSubmit(e)}
                      >
                        Add Campaign
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
          <table className="table  table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Campaign Name</th>
                <th scope="col">Campaign Date</th>
                <th scope="col">Files</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {datas.map((data, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{data.campaignName}</td>
                  <td>{data.campaignDate}</td>
                  <td>{data.campaignFiles}</td>
                  <td>
                    <i
                      class=" fa fa-trash myListButton pull-left"
                      onClick={() => this.fDelete(i)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
