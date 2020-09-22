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
            fontFamily:"Palatino-Bolditalic",
            letterSpacing:"0.38rem"}}>Steven Doty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <div style={{float:"left", width:"100%"}}>

        {contactIcons.map((contact, i)=>{
          return <div style={{float:"left", width:"25%", textAlign:"center"}}>
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
