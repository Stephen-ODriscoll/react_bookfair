import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import '../../CSS/PageTitle.css';

const exhibitors = [
  {
    id:"1",
    name:"Penguin",
    desc:"Penguin Ireland is Ireland’s leading publisher, covering all markets and genres. We are literary and commercial; we are local and global. We are here to help all great Irish writers tell their stories to the world. Covering the full spectrum of genres and markets, we are the leading Irish-based publisher. Publishing no more than 20 new titles a year, we select, edit and promote each book with the love and care of a small press, Our list of bestsellers, prize-winners and new discoveries is unmatched, backed up by the immense resources of Penguin Random House. We are literary and commercial; we are small and large; we are local and global. We are here to help great Irish writers tell their stories to the world."
  },
  {
    id:"2",
    name:"Mercier Press",
    desc:"Mercier Press is Ireland's oldest independent publishing house, based in Cork. It was founded in 1944 by Captain Seán and Mary Feehan. The publishing house was named after Cardinal Mercier of Belgium, a man who in his day, proved himself not only a man of thought, whose mind ranged over every subject of vital interest to humanity, but a man of action in the varying circumstances of a life that shone before the eyes of a watching world. The voice of Cardinal Mercier could not be stilled and Mercier Press is proud to borrow from him the inspiration for its publishing programme, which is a belief in the importance of Ireland's ability to provide accessible histories and cultural books for Irish readers and all who are interested in Irish cultural life."
  },
  {
    id:"3",
    name:"Publishing Ireland",
    desc:"Publishing Ireland is funded through membership fees and support and specific project funding from the Irish Copyright Licensing Agency (ICLA), the Department of Culture, Heritage and the Gaeltacht, the Arts Council and the Arts Council of Northern Ireland."
  },
  {
    id:"4",
    name:"Bloomsbury Publishing",
    desc:"Bloomsbury Publishing is a leading independent publishing house, established in 1986, with authors who have won the Nobel, Pulitzer and Booker Prizes, and is the originating publisher and custodian of the Harry Potter series. Bloomsbury has offices in London, New York, New Delhi, Oxford and Sydney."
  }
]

class Exhibitors extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  showExhibitors = () => {
    let display = []
    var left = 1
    var imgStyle = imgStyleLeft

    for (let i = 0; i < exhibitors.length; i++) {

      display.push(<Row><div style={rowStyle}><h3 style={titleStyle}>{exhibitors[i].name}</h3><img src={process.env.PUBLIC_URL + 'exhibitors/' + exhibitors[i].id + '.png'} style={imgStyle} alt={exhibitors[i].id} />{exhibitors[i].desc}</div></Row>)

      if (left) {
        left = 0
        imgStyle = imgStyleRight
      }
      else {
        left = 1
        imgStyle = imgStyleLeft
      }
    }

    if (display.length === 0) {
      display.push(<p><br/>No Exhibitors to display</p>)
    }

    return display
  }
  
  render() {
    return (
      <React.Fragment>
        <img src={process.env.PUBLIC_URL + 'headerImages/exhibitors.jpg'} className="title-image" alt="header" />
        <h1 className="title-text">Exhibitors</h1>

        <div style={pageStyle}>
          {this.showExhibitors()}
        </div>
      </React.Fragment>
    );
  }
}

const pageStyle = {
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const titleStyle = {
  fontSize: "4vw",
  textAlign: "center",
  color: '#000'
}

const rowStyle = {
  padding: '5px',
  height: '20%'
}

const imgStyleLeft = {
  float: 'left',
  width: '15%'
}

const imgStyleRight = {
  float: 'right',
  width: '15%'
}

export default Exhibitors;