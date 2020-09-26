import React from 'react';
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


import ResumeModal from './ResumeModal'



let contactIcons = [
  {
    name:"email",
    link:"",
    icon:faEnvelope
  },
  {
    name:"phone",
    link:"",
    icon:faPhone
  },
  {
    name:"github",
    link:"",
    icon:faGithub
  },
  {
    name:"linkedin",
    link:"",
    icon:faLinkedin
  },
]

function Header() {
  return (
    <div className="App-header">

      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand
          href="#home"
          style={{
            marginLeft:"+1rem",
            fontFamily:"Palatino-Bolditalic",
            letterSpacing:"0.38rem"}}>Steven Doty</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border:"none", padding:"none"}}/>

        <Navbar.Collapse id="basic-navbar-nav">
          <ResumeModal/>
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

      <div style={{float:"left", width:"100%", backgroundColor:"#343a40"}}>

        {contactIcons.map((contact, i)=>{
          return <div style={{color:"white", float:"left", width:"25%", textAlign:"center"}}>
            <FontAwesomeIcon
            icon={contact.icon}/>
          </div>
        })}

      </div>

    </div>
  );
}

export default Header;

//
