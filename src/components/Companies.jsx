import React, { Component } from 'react';
import Company from './Company/Company';
import axios from "axios"

class Companies extends Component {
    state = { data: [], }

componentDidMount(){
    const token = "qn4qx7hLGMKCH3CMHKBsXSXyRyM"
    axios.get("https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?latitude=48.856614&longitude=2.3522219&rome_codes=M1805&sort=score&page_size=10&page=1", {headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }}).then((res) => {
        const data = res.data.companies.sort((a, b) => {
            return b.stars - a.stars;
        });
        this.setState({
            data,
        });
        console.log(res);
    });
}

    render() { 
        return (
            <div>
            <div>
                <p>Le top 10 des entreprises qui recherche un Développeur</p>
            </div>
        <div>
            {this.state.data.map((company) => {
                return <Company  company={company}/>
            })}
        </div> 
        </div>);
    }
}
 
export default Companies;