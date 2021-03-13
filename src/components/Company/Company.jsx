import React, { Component } from "react";
import "./Company.css";

class Company extends Component {
  state = {};
  render() {
    return (
      <div className="box-jobs">
        <div className="box-company">
          <div>{this.props.company.name}</div>
          <div>{this.props.company.address}</div>
          <div>{this.props.company.stars}</div>
        </div>
      </div>
    );
  }
}

export default Company;
