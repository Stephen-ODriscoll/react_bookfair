import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import DropdownButton from 'react-bootstrap/DropdownButton';

const exhibitors = [
  {
    id:"1",
    name:"Penguin",
    category: "kids",
    desc:"Penguin Ireland is Ireland’s leading publisher, covering all markets and genres. We are literary and commercial; we are local and global. We are here to help all great Irish writers tell their stories to the world. Covering the full spectrum of genres and markets, we are the leading Irish-based publisher. Publishing no more than 20 new titles a year, we select, edit and promote each book with the love and care of a small press, Our list of bestsellers, prize-winners and new discoveries is unmatched, backed up by the immense resources of Penguin Random House. We are literary and commercial; we are small and large; we are local and global. We are here to help great Irish writers tell their stories to the world.",
    books:"Harry Potter, Lord of the Rings, The Hobbit, Twilight"
  },
  {
    id:"2",
    name:"Mercier Press",
    category: "adult",
    desc:"Mercier Press is Ireland's oldest independent publishing house, based in Cork. It was founded in 1944 by Captain Seán and Mary Feehan. The publishing house was named after Cardinal Mercier of Belgium, a man who in his day, proved himself not only a man of thought, whose mind ranged over every subject of vital interest to humanity, but a man of action in the varying circumstances of a life that shone before the eyes of a watching world. The voice of Cardinal Mercier could not be stilled and Mercier Press is proud to borrow from him the inspiration for its publishing programme, which is a belief in the importance of Ireland's ability to provide accessible histories and cultural books for Irish readers and all who are interested in Irish cultural life.",
    books:"Harry Potter, Lord of the Rings, The Hobbit, Twilight"
  },
  {
    id:"3",
    name:"Publishing Ireland",
    category: "chinese",
    desc:"Publishing Ireland is funded through membership fees and support and specific project funding from the Irish Copyright Licensing Agency (ICLA), the Department of Culture, Heritage and the Gaeltacht, the Arts Council and the Arts Council of Northern Ireland.",
    books:"Harry Potter, Lord of the Rings, The Hobbit, Twilight"
  },
  {
    id:"4",
    name:"Bloomsbury Publishing",
    category: "adult",
    desc:"Bloomsbury Publishing is a leading independent publishing house, established in 1986, with authors who have won the Nobel, Pulitzer and Booker Prizes, and is the originating publisher and custodian of the Harry Potter series. Bloomsbury has offices in London, New York, New Delhi, Oxford and Sydney.",
    books:"Harry Potter, Lord of the Rings, The Hobbit, Twilight"
  },
  {
    id:"5",
    name:"Dong Kong",
    category: "kids",
    desc:"A Shepherd Boy tended his master's Sheep near a dark forest not far from the village. Soon he found life in the pasture very dull. All he could do to amuse himself was to talk to his dog or play on his shepherd's pipe. One day as he sat watching the Sheep and the quiet forest, and thinking what he would do should he see a Wolf, he thought of a plan to amuse himself. His Master had told him to call for help should a Wolf attack the flock, and the Villagers would drive it away. So now, though he had not seen anything that even looked like a Wolf, he ran toward the village shouting at the top of his voice, 'Wolf! Wolf!'. As he expected, the Villagers who heard the cry dropped their work and ran in great excitement to the pasture. But when they got there they found the Boy doubled up with laughter at the trick he had played on them. A few days later the Shepherd Boy again shouted, 'Wolf! Wolf!' Again the Villagers ran to help him, only to be laughed at again. Then one evening as the sun was setting behind the forest and the shadows were creeping out over the pasture, a Wolf really did spring from the underbrush and fall upon the Sheep. In terror the Boy ran toward the village shouting 'Wolf! Wolf!' But though the Villagers heard the cry, they did not run to help him as they had before. 'He cannot fool us again,' they said. The Wolf killed a great many of the Boy's sheep and then slipped away into the forest.",
    books:"Harry Potter, Lord of the Rings, The Hobbit, Twilight"
  }
]

class Exhibitors extends Component {

  state = {
    moreInfo: false,
    selectedExhibitor: 0,
    toDisplay: exhibitors,
    category: "Select Category"
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  register = (event) => {
    this.props.history.push('/Register');
  }

  showExhibitors = () => {
    let display = []
    var left = 1
    var imgStyle = imgStyleLeft

    for (let i = 0; i < this.state.toDisplay.length; i++) {

      display.push(<Row key={i}><div style={rowStyle}><h3 style={titleStyle}>{this.state.toDisplay[i].name}</h3><img src={process.env.PUBLIC_URL + '/exhibitors/' + this.state.toDisplay[i].id + '.png'} style={imgStyle} alt={this.state.toDisplay[i].id} />{this.state.toDisplay[i].desc}<Link onClick={() => this.setState({moreInfo: true, selectedExhibitor: i})}> More Info</Link></div><br/></Row>);

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

  updateSearch = (event) => {
    
    this.setState({
      category: event.target.textContent,
      selectedExhibitor: 0
    })

    if (event.target.textContent.toLowerCase() === "all")
    {
      this.setState({
        category: event.target.textContent,
        toDisplay: exhibitors
      })
    }
    else {
      this.setState({
        category: event.target.textContent,
        toDisplay: [...exhibitors.filter((exhibitor) => exhibitor.category.match(event.target.textContent.toLowerCase()))]
      })
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Modal
        size="lg"
        show={this.state.moreInfo}
        onHide={() => this.setState({moreInfo: false})}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          {this.state.toDisplay[this.state.selectedExhibitor].name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Booth: {this.state.toDisplay[this.state.selectedExhibitor].id}</h3>
          <h3>Category: {this.state.toDisplay[this.state.selectedExhibitor].category}</h3>
          {this.state.toDisplay[this.state.selectedExhibitor].desc}
          <br/><br/>
          <p><span style={{fontWeight: "bold"}}>Recommended Books:</span> {this.state.toDisplay[this.state.selectedExhibitor].books}</p>
        </Modal.Body>
      </Modal>
        <img src={process.env.PUBLIC_URL + '/headerImages/exhibitors.jpg'} className="title-image" alt="header" />
        <h1 className="title-text">Exhibitors</h1>

        <br/>
        <br/>
        <button style={buttonStyle} onClick={this.register} type="button" className="btn btn-secondary btn-lg btn-block">Register as an Exhibitor </button>
        <br/>
        <div style={{display: 'flex'}}>
          <DropdownButton id="dropdown-button" variant="default" style={categoryStyle} title={this.state.category}>
            <Dropdown.Item onClick={this.updateSearch}>All</Dropdown.Item>
            <Dropdown.Item onClick={this.updateSearch}>Kids</Dropdown.Item>
            <Dropdown.Item onClick={this.updateSearch}>Adult</Dropdown.Item>
            <Dropdown.Item onClick={this.updateSearch}>Chinese</Dropdown.Item>
          </DropdownButton>
        </div>

        <div style={pageStyle}>
          {this.showExhibitors()}
        </div>
        <ScrollUpButton/>
      </React.Fragment>
    );
  }
}

const pageStyle = {
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const buttonStyle = {
  fontSize:'3vw',
  width: '60%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const categoryStyle = {
  marginLeft: 'auto',
  marginRight: 'auto'
}

const titleStyle = {
  fontSize: "4vw",
  textAlign: "center",
  color: '#000'
}

const rowStyle = {
  fontSize: "1.4vw",
  padding: '5px',
  height: '20%'
}

const imgStyleLeft = {
  float: 'left',
  width: '15%',
  margin: '2%'
}

const imgStyleRight = {
  float: 'right',
  width: '15%',
  margin: '2%'
}

export default Exhibitors;