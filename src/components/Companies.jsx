import React, { Component } from "react";
import Company from "./Company/Company";
import "./Companies.css";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";

class Companies extends Component {
  state = { data: [] };
  token = "uVJaLeIvXv1kF4Ub2iBCiPtB6vA";

  // function called by the infite loader component with the correct page number as parameter
  getData = (page) => {
    axios
      .get(
        `https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?latitude=48.856614&longitude=2.3522219&rome_codes=M1805&sort=score&page_size=10&page=${page}`,
        {
          headers: {
            Authorization: "Bearer " + this.token, //the token is a variable which holds the token
          },
        }
      )
      .then((res) => {
        const newList = res.data.companies.sort((a, b) => {
          return b.stars - a.stars;
        });

        // append the new list to the previous state of data
        // in order to display all the data
        const data = this.state.data.concat(newList);
        this.setState({
          data,
        });
        console.log(res);
      })
      .catch((error) => {
        alert("Merci de rafraichir le token");
      });
  };

  render() {
    return (
      <div>
        <div>
          <p>Le top 10 des entreprises qui recherche un Développeur</p>
        </div>
        <div></div>
        <div style={{ height: "800px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.getData}
            hasMore={true}
            loader={
              <div className="loader" key={0}>
                <div class="lds-dual-ring"></div>
              </div>
            }
            useWindow={false}
          >
            {this.state.data.map((company) => {
              return <Company company={company} />;
            })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default Companies;
