import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../CSS/PageTitle.css';

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <React.Fragment>
        <img src={process.env.PUBLIC_URL + '/headerImages/home.jpg'} className="title-image" alt="header"/>
        <h1 className="title-text">Home</h1>

        <Row style={rowStyle}>
          <Col>
            <img src={process.env.PUBLIC_URL + "/images/bookFair.jpg"} style={imgStyle} alt="bookFair"/>
          </Col>
          <Col>
            <p style={pStyle}>
              An international book fair organized by the Enterprise Ireland and Higher Education Ireland, 
              it will be held annually at the Pairc Ui Chaoimh and the Cork City Hall, selling and exhibiting 
              books, printed matter, stationary, printing, compact discs and other multimedia publishing. 
              Besides selling and exhibiting newbooks and media products. There are reading and writing 
              workshops, seminars, and autograph sessionsfor book lovers. This fair will become an annual 
              major event in Ireland to attract international visitors. Through this event we will 
              be striving to promote local reading culture.
            </p>
          </Col>
        </Row>

        <Row style={linksStyle}>
          <Col>
            <Link to="/visitors">
              <img src={process.env.PUBLIC_URL + "/images/visitors.jpg"} style={imgStyle} alt="visitors"/>
              <div style={linkBoxStyle}>
                <p>Visitors</p>
              </div>
            </Link>
          </Col>
          <Col>
            <Link to="/search">
              <img src={process.env.PUBLIC_URL + "/images/search.jpg"} style={imgStyle} alt="search"/>
              <div style={linkBoxStyle}>
                <p>Search</p>
              </div>
            </Link>
          </Col>
          <Col>
            <Link to="/exhibitors">
              <img src={process.env.PUBLIC_URL + "/images/exhibitors.jpg"} style={imgStyle} alt="exhibitors"/>
              <div style={linkBoxStyle}>
                <p>Exhibitors</p>
              </div>
            </Link>
          </Col>
          <Col>
            <Link to="/about">
              <img src={process.env.PUBLIC_URL + "/images/about.jpg"} style={imgStyle} alt="about"/>
              <div style={linkBoxStyle}>
                <p>About</p>
              </div>
            </Link>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const pStyle = {
  fontSize:"1.5vw"
}

const rowStyle = {
  border: "none",
  width: "80%",
  margin: "10% 10%"
}

const linkBoxStyle = {
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "3vw",
  width: "70%",
  height: "20%",
  background: "#fff",
  color: "#000"
}

const linksStyle = {
  border: "none",
  width: "90%",
  margin: "5%"
}

const imgStyle = {
  position: "relative",
  width: "100%"
}

export default Home;