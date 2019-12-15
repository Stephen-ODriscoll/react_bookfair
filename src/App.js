import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Visitors from './components/pages/Visitors';
import Exhibitors from './components/pages/Exhibitors';
import About from './components/pages/About';
import Tickets from './components/pages/Tickets';
import Register from './components/pages/Register';
import './CSS/PageTitle.css';
import './CSS/Header.css';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/visitors' component={Visitors} />
          <Route path='/exhibitors' component={Exhibitors} />
          <Route path='/about' component={About} />
          <Route path='/tickets' component={Tickets} />
          <Route path='/register' component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
