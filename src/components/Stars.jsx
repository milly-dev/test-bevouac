import React, { Component } from 'react';

class Stars extends Component {
    state = {  }

handleStars = () => {
    let stars = "";
    for (let i=0; i<this.props.value; i++){
        stars += "★";
    }
    for (let i=this.props.value; i<4; i++){
        stars += "☆";
    }
    return stars;
}

    render() { 
        return (<div>
        {this.handleStars()} {this.props.value}
        </div>  );
    }
}
 
export default Stars;