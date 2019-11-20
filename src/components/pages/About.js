import React, { Component } from 'react';
import '../../CSS/PageTitle.css';

class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <React.Fragment>
        <img src={process.env.PUBLIC_URL + 'headerImages/about.jpg'} className="title-image" alt="header" />
        <h1 className="title-text">About</h1>
      </React.Fragment>
    );
  }
}

export default About;
