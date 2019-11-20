import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
import '../../CSS/PageTitle.css';

class Tickets extends Component {

  state = {
    accepted: false,
    runningTotal: 0,
    showTerms: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onCancel = (event) => {
    this.props.history.push('/');
  }

  onSubmit = (event) => {
    this.props.history.push('/submitted');
  }

  onChange = (event) => {
    var total = 0;
    var accepted = false;

    if (event.target.type === "checkbox") {
      total = this.state.runningTotal;
      accepted = event.target.checked;

      this.setState({
        accepted: accepted
      })
    }
    else if (event.target.type === "number") {
      var numChildren = document.getElementById("childTickets").value;
      var numAdults = document.getElementById("adultTickets").value;
      total = (numChildren * 3) + (numAdults * 5);
      accepted = this.state.accepted;

      this.setState({
        runningTotal: total
      })
    }

    if (total !== 0 && accepted === true) {
      document.getElementById("submit").disabled = false;
    }
    else {
      document.getElementById("submit").disabled = true;
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Modal
        size="lg"
        show={this.state.showTerms}
        onHide={() => this.setState({showTerms: false})}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Rules and Regulations
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{terms}</Modal.Body>
      </Modal>
        <img src={process.env.PUBLIC_URL + 'headerImages/tickets.jpg'} className="title-image" alt="header"/>
        <h1 className="title-text">Tickets</h1>
        <br/>
        <form style={formStyle}>
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
              <input type="email" class="form-control" id="inputEmail" placeholder="Email" required/>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col">
              <input type="number" min="0" class="form-control" id="adultTickets" onChange={this.onChange} placeholder="Number of Adults"/>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col">
              <input type="number" min="0" class="form-control" id="childTickets" onChange={this.onChange} placeholder="Number of Children (under 10 years old)"/>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col">
              <DropdownButton id="dropdown-button" variant="default" title="Date of attendence">
                <Dropdown.Item href="#/action-1">July 18th</Dropdown.Item>
                <Dropdown.Item href="#/action-2">July 19th</Dropdown.Item>
                <Dropdown.Item href="#/action-3">July 20th</Dropdown.Item>
                <Dropdown.Item href="#/action-3">July 21st</Dropdown.Item>
                <Dropdown.Item href="#/action-3">July 22nd</Dropdown.Item>
              </DropdownButton>
            </div>
            <div class="col">
              Morning Admission Ticket (entry before 12:00 noon):<br/>
              3 euros (available for sale each day during the event)
            </div>
          </div>
          <br/>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" onClick={this.onChange}/>
            <label class="form-check-label" for="inlineCheckbox1">I have read and accept the <Link onClick={() => this.setState({showTerms: true})}>rules and regulations</Link></label>
          </div>
          <br/>
          <br/>
          <h2>Total: €{this.state.runningTotal}</h2>
          <br/>
          <div class="row">
            <div class="col">
              <button type="button" class="btn-lg" style={buttonStyle} onClick={this.onCancel}>Cancel</button>
            </div>
            <div class="col">
              <button type="submit" class="btn-lg" id="submit" style={buttonStyle} onClick={this.onSubmit} disabled={true}>Submit</button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const buttonStyle = {
  width: '80%'
}

const formStyle = {
  marginRight: '20%',
  marginLeft: '20%'
}

const terms = <Modal.Body>Your registration for the Exhibition, or entry to our exhibition venue, 
  signifies your acceptance of theseRules and Regulations and any other rules and regulations referenced 
  herein or reasonably notified to youat the Exhibition venue, with which you agree to observe and comply.
  <br/>
  Visitors do not have the Organizer’s permission to attend, and may not attend, the Exhibition without 
  confirming your acceptance of these Rules and Regulations in writing prior to your attendance. Your 
  admission badge allows you entrance to concurrent Exhibitions organized by the government with otherevent 
  partners. By doing so, you accept and agree to abide by the Visitor’s Rules and Regulations of 
  respective Exhibition.
  <br/><br/>

  1. Visitor’s Conduct: You shall not do or permit to be done any action which causes or may causeany 
  disturbance, nuisance, annoyance, inconvenience, damage or danger to any person or thing or which in the 
  opinion of the Organizer does not conform to the general standards of the Exhibitionor constitutes a breach 
  of these Rules and Regulations.
  <br/>
  We reserve the right to refuse admittance to any visitor or to require any 
  visitor to leave if their behavior is in breach of these Rules and Regulations, or contravenes applicable 
  laws or regulations. Our opinion is final in this regard.
  <br/><br/>

  2. Liability: We shall not be liable for any loss of or damage to any of your property occurring in orabout 
  the Exhibition venue, or for the death of or any injury sustained by any visitor whilst in orabout the 
  Exhibition venue, other than for death or injury resulting from our negligence or whichotherwise cannot be 
  excluded or restricted at law.
  <br/>
  You agree that we shall not incur any liability to you for any goods or services offered or sold by, or 
  representations made by, any Exhibitor at the Exhibition.
  <br/>
  You agree to indemnify and hold us harmless against any damage or allegations of damage causedby you to the 
  property, business or reputation of us, other Exhibitors or Visitors or the operator ofthe Exhibition venue, 
  including but not limited to damages arising from your breach of these Rulesand Regulations.
  <br/>
  You agree that we shall not incur any liability to you for any error or omission in any informa-tion relating 
  to any Exhibitor or its products in the Exhibition’s official directory or in any otherpromotional or other 
  printed materials or information provided by us or that Exhibitor.
  <br/><br/>

  3. Recording: You shall not record images in any form while attending the Exhibition without ourprior written 
  consent. Such prohibition includes, but is not limited to, the taking of photographs, video or digital recording 
  of any type and drawing or sketching of images. You agree to surrender to us on demand whatever media on which 
  images may be recorded in violation of this rule.
  <br/>
  The copyright and other intellectual property or other rights (including for the avoidance of doubt,rights in 
  sound recording and broadcasts) in materials created in violation of this clause 4, whether arising now or in 
  the future, shall belong to us unconditionally from the time of their creation, andyou agree to do all acts 
  and execute all such documents as may be required to properly vest the same.
  <br/>
  You agree to indemnify and hold us harmless against all claims, liabilities, losses, proceedings, 
  damages, judgments, expenses, costs (including legal fees) and charges of any kind howsoever incurred by or on 
  behalf of or made against us arising out of any infringement or other claimrelating to or arising out of the 
  unauthorized making of any recordings by you.
  <br/>
  You acknowledge and agree that we may take photographs/videos which could include imagesof you while attending 
  the Exhibition. You hereby consent to and grant to us, the unrestricted, perpetual, worldwide, royalty-free and 
  transferable right and license to use such images worldwide without any compensation. You acknowledge that we 
  are the exclusive owner of all rights in such images and hereby waive (a) any and all rights in and to them, 
  and (b) any and all claims you mayhave relating to or arising from our use of them.</Modal.Body>
export default Tickets;