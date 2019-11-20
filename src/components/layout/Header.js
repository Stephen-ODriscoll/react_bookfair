import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Header.css';

function Header() {
  return (
    <header style={headerStyle} className="header-container">
      <div className="logo-icon-container">
        <div className="logo-main">
          <a href="https://hea.ie">
            <img src={process.env.PUBLIC_URL + '/HEA.png'} style={imgStyle} className="HEA-logo" alt="hea" />
          </a>
          <a href="https://enterprise-ireland.com/en/">
            <img src={process.env.PUBLIC_URL + '/EI.png'} style={imgStyle} className="EI-logo" alt="ei" />
          </a>
        </div>
        <div className="header-text">Book Fair </div>
      </div>

      <div className="link-container">
        <Link className="link-items" to="">Home</Link>
        <Link className="link-items" to="/search">Search</Link>
        <Link className="link-items" to="/visitors">Visitors</Link>
        <Link className="link-items" to="/exhibitors">Exhibitors</Link>
        <Link className="link-items" to="/about">About</Link>
      </div>
    </header>
  )
}

const headerStyle = {
  backgroundColor: '#4f4f4f',
  color: '#fff',
  padding: '10px'
}

const imgStyle = {
  width: '50%',
  height: 'auto',
}

export default Header;