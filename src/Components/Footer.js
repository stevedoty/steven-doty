import MAINDATA from "./data.js"
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { layergroup, coffee } from '@fortawesome/fontawesome-svg-core'
import {Accordion, Card, Button, Badge} from 'react-bootstrap'
import { Icon, InlineIcon } from '@iconify/react'
import ResumeModal from './ResumeModal'
import MessageMeModal from './MessageMeModal'


let skillColorIcons = MAINDATA.skillColorIcons
let accordionItems = [
{
  title:"Skills",
  body:"skill icons & labels"
},
{
  title:"Projects",
  body:"project card tiles"
},
{
  title:"Experience",
  body:"AW Construction 2014-2020. After school I began as an independent contractor in fine woodworking & carpentry"
},
{
  title:"Education",
  body:"Education timeline"
},
{
  title:"Bio",
  body:"Bio profile"
}
]
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

class Footer extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  render(){
    return (
      <div className="App-footer">

        <div className="section-container">
          <Card className="section" >
            <Card.Body className="section-body" style={{padding:"0.5rem 0.5rem 0.75rem 0.5rem"}}>
              <div>
                {skillColorIcons.map((skillIcon, j) => {return(

                  <div className="skill-color-icon_container">
                    {skillIcon.iconTitle}
                    <br/>
                    <Icon className="skill-color-icon" icon={skillIcon.iconLogo}/>

                  </div>
                )})}
              </div>
            </Card.Body>

            <Card.Header className="section-header">
              Tech Skills
            </Card.Header>
          </Card>
        </div>
        
      </div>

  );}
}

export default Footer;
