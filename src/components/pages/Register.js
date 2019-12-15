import React, { Component } from 'react';

class Register extends Component {

    state = {
    }
  
    componentDidMount() {
      window.scrollTo(0, 0)
    }
  
    onCancel = (event) => {
      this.props.history.push('/');
    }
  
    onChangeDate = (event) => {
      this.setState({
        date: event.target.textContent
      })
    }
  
    onSubmit = (event) => {
      window.print();
    }
    
    render() {
      return (
        <React.Fragment>
          <img src={process.env.PUBLIC_URL + '/headerImages/register.jpg'} className="title-image" alt="header"/>
          <h1 className="title-text">Register</h1>
          <br/>
          <form style={formStyle} onSubmit={this.onSubmit}>
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name" required/>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" required/>
            </div>
          </div>
          <br/>
            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Company Name" required/>
              </div>
            </div>
            <br/>
            <div class="row">
              <div class="col">
                <input type="url" class="form-control" placeholder="Website"/>
              </div>
            </div>
            <br/>
            <div class="row">
            <div class="col">
              <input type="text" minLength="16" class="form-control" id="childTickets" onChange={this.onChange} placeholder="Card Number" required/>
            </div>
            <div class="col">
              <input type="text" class="form-control" id="date" placeholder="Expiration Date (MM/YY)" required/>
            </div>
          </div>
          <br/>
            <h3> The booth will cost €300</h3>
            <br/>
            <div class="row">
                <div class="col">
                <button type="button" class="btn-lg" style={buttonStyle} onClick={this.onCancel}>Cancel</button>
                </div>
                <div class="col">
                <button type="submit" class="btn-lg" id="submit" style={buttonStyle}>Submit</button>
                </div>
            </div>
          </form>
        </React.Fragment>
      );
    }
  }

  const formStyle = {
    margin: '5% 20%'
  }

  const buttonStyle = {
    width: '80%'
  }

  export default Register;