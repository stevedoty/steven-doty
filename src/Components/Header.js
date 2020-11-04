import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { layergroup, coffee } from '@fortawesome/fontawesome-svg-core'


let contactIcons = [
  {
    name:"Email",
    link:"stevedoty16@gmail.com",
    icon:faEnvelope
  },
  {
    name:"Phone",
    link:"6508983401",
    icon:faPhone
  },
  {
    name:"GitHub",
    link:"https://github.com/stevedoty",
    icon:faGithub
  },
  {
    name:"LinkedIn",
    link:"https://www.linkedin.com/in/steven-doty-256b4459/",
    icon:faLinkedin
  },
]



class Header extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  handleContactClick(event){
    let contact = event.target.parentNode.contact;
    console.log(contact);
    // if (contactName === "mail") {
    //   console.log("mail");
    // }
  }
  render(){

    return (
      <div className="App-header">

        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand
            href="#home"
            style={{
              fontSize:"160%",
              marginLeft:"1rem",
              marginRight:"0rem",
              fontFamily:"Palatino-Bolditalic",
              letterSpacing:"0.38rem",
              float:"left",}}>SD</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{float:"left", border:"none", padding:"none"}}/>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Skills</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#home">Experience</Nav.Link>
              <Nav.Link href="#link">Education</Nav.Link>
              <Nav.Link href="#home">Bio</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>

          </Navbar.Collapse>
        </Navbar>

        <div className="navbar_contacts" style={{}}>

          {contactIcons.map((contact, i)=>{
            return (

              <div name={contact.name} link={contact.link} onClick={this.handleContactClick}
                style={{color:"white", float:"left", width:"25%", textAlign:"center"}}>
                <FontAwesomeIcon
                  icon={contact.icon}/>
              </div>
            )
          })}

        </div>

      </div>
  );}
}

export default Header;

//
