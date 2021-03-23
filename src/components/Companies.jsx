import React, { Component } from "react";
import Company from "./Company/Company";
import Pagination from '@material-ui/lab/Pagination';
import "./Companies.css";
import axios from "axios";

class Companies extends Component {
  state = { data: [],
    page : 1,
  count: 10 };
  token = "Lk9XomCFT_OeRp4xCrshehSDkWU";

  //getData method is called one time after the first render
  componentDidMount() {
   this.getData();
  }

  // allows to fetch data
  getData = () => {
    axios
    .get(
      `https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?latitude=48.856614&longitude=2.3522219&rome_codes=M1805&sort=score&page_size=10&page=${this.state.page}`,
      {
        headers: {
          Authorization: "Bearer " + this.token, //the token is a variable which holds the token
        },
      }
    )
    .then((res) => {
      const data = res.data.companies.sort((a, b) => {
        return b.stars - a.stars;
      });
      //allows to get the total page 
      let x = res.data.companies_count
      let y = 10
      const count = Math.floor(x/y) 
      this.setState({
        data: data,
        count: count,
      });
      console.log(res);
    })
    .catch((error) => {
      alert("Merci de rafraichir le token");
    });
  }

  //update page
  handleChange = (event, value) => {
   this.setState({
     page: value
    });
    this.getData()
  };

  render() {
    return (
      <div>
        <div>
          <p>Le top 10 des entreprises qui recherche un Développeur</p>
        </div>
        <div>
          {this.state.data.map((company) => {
            return <Company company={company} />;
          })}
        </div>
        <div className="pagination-style">
        <Pagination count={this.state.count} page={this.state.page} onChange={this.handleChange} variant="outlined" shape="rounded" />        </div>
      </div>
    );
  }
}

export default Companies;
