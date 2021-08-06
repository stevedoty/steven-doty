import MAINDATA from "./data.js"
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { layergroup, coffee } from '@fortawesome/fontawesome-svg-core'
import {Accordion, Card, Button, Badge} from 'react-bootstrap'
import { Icon, InlineIcon } from '@iconify/react'
import ResumeModal from './ResumeModal'
import MessageMeModal from './MessageMeModal'


let skillColorIcons = MAINDATA.skillColorIcons
let accordionItems =  MAINDATA.accordionItems
let contactIcons = MAINDATA.contactIcons

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
