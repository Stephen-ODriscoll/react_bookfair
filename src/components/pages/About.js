import React, { Component } from 'react';

class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <React.Fragment>
        <img src={process.env.PUBLIC_URL + '/headerImages/about.jpg'} className="title-image" alt="header" />
        
        <div style={pageStyle}>
          <h1 className="title-text">About</h1>

          <br/>
          <h1>Contact us</h1>
          <p>We’ve got teams of people whose job is to make running your Book Fair as smooth as possible. Drop them an email or give them a call with any queries you may have.</p>
          <br/>
          <h2>Telephone number</h2>
          <p>Call us for free on 1800 123 456. Our opening hours are 9am – 5pm, Monday to Friday.</p>
          <br/>
          <h2>Postal address</h2>
          <p>Bookfair people</p>
          <p>New Street</p>
          <p>Dublin 1</p>
          <br/>
          <h2>Email</h2>
          <p>Please email any enquiries to bookfairs@bookfair.ie</p>
        </div>
      </React.Fragment>
    );
  }
}

const pageStyle = {
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: '1.5vw'
}

export default About;
