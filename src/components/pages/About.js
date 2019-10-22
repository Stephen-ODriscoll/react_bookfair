import React, { Component } from 'react';

class About extends Component {
  
  render() {
    return (
      <React.Fragment>
        <img src={process.env.PUBLIC_URL + 'headerImages/about.jpg'} style={{position: "relative", width: "100%"}} alt="header" />
        <h1 style={h1Style}>About</h1>
      </React.Fragment>
    );
  }
}

const h1Style = {
  position: "absolute",
  top: "40%",
  left: "15%",
  transform: "translate(-50%, -50%)",
  fontSize: "8vw",
  width: "70%",
  height: "20%",
  color: "#fff"
}

export default About;
