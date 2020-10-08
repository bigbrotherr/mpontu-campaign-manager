import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <div>
        <table className="table  table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Campaign Name</th>
              <th scope="col">Campaign Date</th>
              <th scope="col">Files</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
