import MAINDATA from "./data.js"
import React from 'react';
import ResumeModal from './ResumeModal'
import MessageMeModal from './MessageMeModal'
import {Accordion, Card, Button, Badge} from 'react-bootstrap'
import { Icon, InlineIcon } from '@iconify/react'
import dockerIcon from '@iconify/icons-logos/docker'


let skillColorIcons = MAINDATA.skillColorIcons
let accordionItems = MAINDATA.accordionItems

function Body() {
  return (
    <div className="App-body">
      <div className="banner" style={{textAlign:"center", padding:"40px 6px 20px 6px", fontSize:"110%"}}>
        <p>FULL-STACK SOLUTIONS</p>
          <div className="modal-container" style={{width: "100%"}}>
            <ResumeModal />
            <MessageMeModal />
          </div>
      </div>

      <div>

            <div className="resume-body">
              <Card className="section" style={{textAlign:"center"}}>
                <Card.Header className="section-header" style={{padding:"0.5rem", textAlign:"center"}}>
                  Projects
                  <br/>

                          <div
                            style={{height:"45px", width:"45px", backgroundColor:"black",
                             borderRadius:"25%", float:"left", margin:"5px", color:"white"}}>0</div>


                          <div
                            style={{height:"45px", width:"45px", backgroundColor:"black",
                             borderRadius:"25%", float:"left", margin:"5px", color:"white"}}>0</div>


                          <div
                            style={{height:"45px", width:"45px", backgroundColor:"black",
                             borderRadius:"25%", float:"left", margin:"5px", color:"white"}}>0</div>


                          <div
                            style={{height:"45px", width:"45px", backgroundColor:"black",
                             borderRadius:"25%", float:"left", margin:"5px", color:"white"}}>0</div>


                          <div
                            style={{height:"45px", width:"45px", backgroundColor:"black",
                             borderRadius:"25%", float:"left", margin:"5px", color:"white"}}>0</div>


                          <div
                            style={{height:"45px", width:"45px", backgroundColor:"black",
                             borderRadius:"25%", float:"left", margin:"5px", color:"white"}}>0</div>


                </Card.Header>

                  <Card.Body className="resume-body">
                    <h5><b>eBay Skin-React & Skin-CSS</b></h5>
                    <h6>SUMMER 2020</h6>
                      <i><p>Original Skin into React</p></i>
                      <i><p>Scalable</p></i>
                      <i><p>https://github.com/eBay/skin-react Website</p></i>
                      <br/>
                    <h5><b>Helping Families in Silicon Valley</b></h5>
                    <h6>SPRING 2019 - PRESENT</h6>
                      <i><p>Built with React</p></i>
                      <i><p>Maintaining the website</p></i>
                      <i><p style={{width:"100%", fontSize:"", margin:"0.5rem 0"}}>
                        <u>http://www.helpingfamiliesisn.org/</u>
                      </p></i>

                  <div className="pills">
                    <Badge className="pill-button" pill>
                      <div className="pill-button_text">GITHUB</div>
                    </Badge>
                    <Badge className="pill-button" pill>
                      <div className="pill-button_text">PROJECTS</div>
                    </Badge>
                  </div>
                  </Card.Body>

              </Card>
              <Card className="section" style={{textAlign:"center"}}>
                <Card.Header className="section-header">
                  Xperience
                </Card.Header>

                  <Card.Body className="resume-body">
                    <h5><b>Front-End Software Developer Apprentice</b></h5>
                    <h6><b>eBay, Mountain View California</b></h6>
                      <h6>Skin-React & Skin-CSS</h6>
                      <i><p>Scalable & Responsive</p></i>
                      <i><p>Built with Typescript</p></i>
                      <i><p>Easy User Platform.</p></i>
                      <i><p>Increased accessibility by 12% and performance by 7%.</p></i>
                      <i><p>Maintained live UI error detection.</p></i>
                    <h5><b>Woodwork & Finish Carpentry</b></h5>
                    <h6><b>AW Construction, Atherton California</b></h6>
                      <i><p>Work After College</p></i>
                      <i><p>Experience in Project Management</p></i>
                      <i><p>Upscale Handmade Woodworking & Construction</p></i>
                      <i><p>Maintained Team Workflow</p></i>
                      <i><p>Multimillion Dollar Homes</p></i>

                  <Badge className="pill-button" pill>
                    <div className="pill-button_text">more info...</div>
                  </Badge>
                  </Card.Body>

              </Card>
              <Card className="section" style={{textAlign:"center", height:"auto"}}>
                <Card.Header className="section-header" style={{fontSize:"158%"}}>
                  Educación
                </Card.Header>

                  <Card.Body className="resume-body">
                  <h5>Bachelor's Electrical Engineering</h5>
                  <i><h6>San Jose State Univerity, San Jose California</h6></i>
                  <br/>
                  <h5>Associate's General Engineering</h5>
                  <i><h6>Cañada College, Redwood City California</h6></i>
                  <i><h6>&</h6></i>
                  <i><h6>Cuesta College, San Luis Obispo California</h6></i>
                  </Card.Body>

              </Card>
            </div>

      </div>
    </div>
  );
}

export default Body;

//
