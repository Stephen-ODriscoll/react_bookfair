import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <a href="https://hea.ie">
          <img src={process.env.PUBLIC_URL + '/HEA.png'} style={imgStyle} className="HEA-logo" alt="hea" />
        </a>
        <a href="https://enterprise-ireland.com/en/">
          <img src={process.env.PUBLIC_URL + '/EI.png'} style={imgStyle} className="EI-logo" alt="ei" />
        </a>
      </div>

      <h2 style={{marginRight: '25%'}} >Book Fair </h2>
      <Link style={linkStyle} to="">Home</Link>
      <Link style={linkStyle} to="/search">Search</Link>
      <Link style={linkStyle} to="/visitors">Visitors</Link>
      <Link style={linkStyle} to="/exhibitors">Exhibitors</Link>
      <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  backgroundColor: '#4f4f4f',
  color: '#fff',
  padding: '10px'
}

const logoStyle = {
  width: "24%",
  height: "5%",
  background: "#bababa",
  float: "left",
  borderRadius: "5px"
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  textAlign: 'center',
  padding: '5px 3%',
  hover: 'yes'
}

const imgStyle = {
  width: '50%',
  height: 'auto',
  float: 'left'
}

export default Header;