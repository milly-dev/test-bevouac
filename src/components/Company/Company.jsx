import React, { Component } from "react";
import Stars from '../Stars';
import "./Company.css";

class Company extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="box-jobs">
          <div className="box-jobs2">
            <div class="lbb-result__header">
              <h3>
                <span>{this.props.company.name}</span>{" "}
                <span class="small">{this.props.company.city}</span>
              </h3>
              <div class="grid-row">
                <div class="grid-col-8 md-text-left">
                  <h4 class="company-address-text">
                    {this.props.company.address}
                  </h4>
                  <p>{this.props.company.headcount_text}</p>
                </div>
                <div class="grid-col-4 md-text-right">
                  <h4>Potentiel d'embauche :</h4>
                  <Stars value={this.props.company.stars}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
