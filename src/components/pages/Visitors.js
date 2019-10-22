import React, { Component } from 'react';

class Visitors extends Component {
  
  render() {
    return (
      <React.Fragment>
        <img src={process.env.PUBLIC_URL + 'headerImages/visitors.jpg'} style={{position: "relative", width: "100%"}} alt="header" />
        <h1 style={h1Style}>Visitors</h1>

        <div style={pageStyle}>
          <hr/>
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
        </div>
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

const pageStyle = {
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const img1Style = {
    width:'50%',
    float: 'left'
}

const img2Style = {
    width:'50%',
    float: 'right'
}

const textStyle = {
    fontSize:'120%'
}

export default Visitors;