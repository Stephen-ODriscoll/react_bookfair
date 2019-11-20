import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../CSS/PageTitle.css';

const books = [
  {
    id:"1",
    name:"Harry Potter and the Philosophers Stone",
    desc:"Its story follows Harry Potter's first year at Hogwarts School of Witchcraft and Wizardry as he discovers that he is a famous wizard and begins his education."
  },
  {
    id:"2",
    name:"Harry Potter and the Chamber of Secrets",
    desc:"The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the \"Chamber of Secrets\" has been opened and that the \"heir of Slytherin\" would kill all pupils who do not come from all-magical families."
  },
  {
    id:"3",
    name:"Harry Potter and the Prisoner of Azkaban",
    desc:"The story follows Harry Potter's third year at Hogwarts as he is informed that a prisoner named Sirius Black has escaped from Azkaban and intends to kill him."
  },
  {
    id:"4",
    name:"Harry Potter and the Goblet of Fire",
    desc:"It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete."
  },
  {
    id:"5",
    name:"Harry Potter and the Order of the Pheonix",
    desc:"The Order is a group of wizards, led by Hogwarts headmaster Albus Dumbledore, dedicated to fighting evil Lord Voldemort and his followers. The Order is forced to operate in secrecy, outside of the jurisdiction of the Ministry of Magic, which is headed by the dense and corrupt Cornelius Fudge."
  },
  {
    id:"6",
    name:"Harry Potter and the Half Blood Prince",
    desc:"The novel starts with Severus Snape meeting with Narcissa Malfoy, who expresses concern that his son Draco might not survive a dangerous mission given to him by Voldemort. He makes an Unbreakable Vow with her to protect and assist Draco in his mission."
  },
  {
    id:"7",
    name:"Harry Potter and the Deathly Hallows",
    desc:"As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows. Voldemort's power is growing stronger. He now has control over the Ministry of Magic and Hogwarts."
  }
]

class Search extends Component {

  state = {
    toDisplay: books
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  showBooks = () => {
    let display = []

    for (let i = 0; i < this.state.toDisplay.length;) {
      let children = []
      //Inner loop to create children
      for (let x = 0;x < 3; i++, x++) {
        if (i < this.state.toDisplay.length) {
          children.push(<Col style={colStyle}><h3 style={titleStyle}>{this.state.toDisplay[i].name}</h3><img src={process.env.PUBLIC_URL + 'books/' + this.state.toDisplay[i].id + '.jpg'} style={imgStyle} alt={this.state.toDisplay[i].id} />{this.state.toDisplay[i].desc}</Col>)
        }
        else {
          children.push(<Col></Col>)
        }
      }
      //Create the parent and add the children
      display.push(<Row style={rowStyle}>{children}</Row>)
    }

    if (display.length === 0) {
      display.push(<p><br/>No Results Found</p>)
    }

    return display
  }

  updateSearch = (event) => {
    this.setState({
      toDisplay: [...books.filter((book) => book.name.toLowerCase().includes(event.target.value.toLowerCase()))]
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <img src={process.env.PUBLIC_URL + 'headerImages/search.jpg'} className="title-image" alt="header" />
        <h1 className="title-text">Search</h1>

        <br/>
        <br/>
        <div class="active-cyan-3 active-cyan-4 mb-4" style = {searchStyle}>
          <input class="form-control" onChange={this.updateSearch} type="text" placeholder="Search" aria-label="Search" align="right"/>
        </div>

        <Container>
          {this.showBooks()}
        </Container>
      </React.Fragment>
    );
  }
}

const searchStyle = {
  marginLeft: '8vw',
  width: '40%'
}

const titleStyle = {
  fontSize: "2vw",
  color: '#fff'
}

const rowStyle = {
  padding: '5px'
}

const colStyle = {
  borderStyle:'solid',
  borderWidth: 'thin',
  borderRadius: '10px',
  background: '#4f4f4f',
  fontSize: "1.2vw",
  color: '#000',
  padding: '5px',
  margin: '10px'
}

const imgStyle = {
  float: 'left',
  width: 'auto',
  height: '15vw',
  margin: '5px'
}

export default Search;