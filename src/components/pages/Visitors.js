import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Visitors extends Component {

  onClick = (event) => {
    this.props.history.push('/Tickets');
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <React.Fragment>
        <img src={process.env.PUBLIC_URL + '/headerImages/visitors.jpg'} className="title-image" alt="header" />
        <h1 className="title-text">Visitors</h1>
        <br/>
        <br/>

        <button style={buttonStyle} onClick={this.onClick} type="button"  className="btn btn-secondary btn-lg btn-block">Buy tickets</button>

        <div style={pageStyle}>
          <br/>
          <img src={process.env.PUBLIC_URL + '/visitorsPhotos/paircUiChaoimh.jpg'} style={img1Style} alt="photo1" />
          <p style={textStyle}>
            Páirc Uí Chaoimh is a Gaelic games stadium in Cork, Ireland. It is the home of Cork GAA. The venue, 
            often referred to simply as The Park, is located in Ballintemple and is built near to the site of 
            the original Cork Athletic Grounds. The stadium opened in 1976 and underwent a significant two-year 
            redevelopment before reopening in 2017.
            <br/>
            Primarily used as a venue for Gaelic games, it has been used to host Cork's home league and championship 
            games in both Gaelic football and hurling. The finals of both the Cork hurling and football championships 
            have often been held at the venue. It has also hosted concerts by Michael Jackson, Bruce Springsteen, 
            Prince, U2, The Stone Roses, Oasis and Ed Sheeran as well as the annual Siamsa Cois Laoi festival.
          </p>
          <br/>
          <hr/>
          <br/>
          <img src={process.env.PUBLIC_URL + '/visitorsPhotos/corkCityHall.jpg'} style={img2Style} alt="photo1" />
          <p style={textStyle}>
            Cork City Hall (Irish: Halla na Cathrach, Corcaigh) is a civic building in Cork, Ireland which houses 
            the administrative headquarters of Cork City Council.
            <br/>
            The original Cork City Hall was destroyed on 11 December 1920 by the Black and Tans during the Irish 
            War of Independence in an event known as the "Burning of Cork".
            <br/>
            Following a design competition, designs by Alfred Jones and Stephen Kelly (Jones and Kelly architects, 
            based in Dublin) were selected, and the construction contract for the replacement civic buildings 
            awarded to John Sisk and Son. The foundation stone of the new City Hall building was laid by Éamon de 
            Valera on the 9 July 1932. The cost of this new building was provided by the British Government in the 
            1930s as a gesture of reconciliation.[4] On 24 April 1935, Cork Corporation held a meeting in the new 
            hall for the first time. The City Hall was officially opened by de Valera on the 8 September 1936.
          </p>
          <br/>
          <hr/>
          <br/>
          <div style={renownedWritersStyle}>
            <h1 style={{textAlign: 'center'}}>Renowned Writers</h1>
            <Carousel>
              <Carousel.Item>
                <img
                  src={process.env.PUBLIC_URL + '/renownedWriters/1.jpg'}
                  alt="First slide"
                  width="100%"
                />
                <Carousel.Caption>
                  <h3>Jamie</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={process.env.PUBLIC_URL + '/renownedWriters/2.jpg'}
                  alt="Third slide"
                  width="100%"
                />
                <Carousel.Caption>
                  <h3>Nash</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={process.env.PUBLIC_URL + '/renownedWriters/3.jpg'}
                  alt="Third slide"
                  width="100%"
                />
                <Carousel.Caption>
                  <h3>Me</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
          <br/>
          <hr/>
          <br/>
          <h1 style={{textAlign: 'center'}}>Gallery</h1>
          <Container>
            <Row>
              <Col>
                <img style={imgStyle} src={process.env.PUBLIC_URL + '/gallery/1.jpg'} alt="1.jpg" />
              </Col>
              <Col>
                <img style={imgStyle} src={process.env.PUBLIC_URL + '/gallery/2.jpg'} alt="2.jpg" />
              </Col>
              <Col>
                <img style={imgStyle} src={process.env.PUBLIC_URL + '/gallery/3.jpg'} alt="3.jpg" />
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <img style={imgStyle} src={process.env.PUBLIC_URL + '/gallery/4.jpg'} alt="4.jpg" />
              </Col>
              <Col>
                <img style={imgStyle} src={process.env.PUBLIC_URL + '/gallery/1.jpg'} alt="1.jpg" />
              </Col>
              <Col>
                <img style={imgStyle} src={process.env.PUBLIC_URL + '/gallery/2.jpg'} alt="2.jpg" />
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <img style={imgStyle} src={process.env.PUBLIC_URL + '/gallery/3.jpg'} alt="3.jpg" />
              </Col>
              <Col>
                <img style={imgStyle} src={process.env.PUBLIC_URL + '/gallery/4.jpg'} alt="4.jpg" />
              </Col>
              <Col>
                <img style={imgStyle} src={process.env.PUBLIC_URL + '/gallery/1.jpg'} alt="1.jpg" />
              </Col>
            </Row>
          </Container>
          <br/>
          <br/>
        </div>
        <ScrollUpButton/>
      </React.Fragment>
    );
  }
}

const imgStyle = {
  width: "100%"
}

const pageStyle = {
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const renownedWritersStyle = {
  width: '40%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const img1Style = {
    width:'50%',
    float: 'left',
    padding: '10px'
}

const img2Style = {
    width:'50%',
    float: 'right',
    padding: '10px'
}

const textStyle = {
  textAlign: 'left',
  fontSize:'1.4vw'
}

const buttonStyle = {
  fontSize:'3vw',
  width: '60%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

export default Visitors;