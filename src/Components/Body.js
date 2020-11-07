import React from 'react';
import {Accordion, Card, Button, Badge} from 'react-bootstrap'

import { Icon, InlineIcon } from '@iconify/react'
import gitIcon from '@iconify/icons-logos/git'
import reactIcon from '@iconify/icons-logos/react'
import reduxIcon from '@iconify/icons-logos/redux'
import es6Icon from '@iconify/icons-logos/es6'
import javascriptIcon from '@iconify/icons-logos/javascript'
import typescriptIcon from '@iconify/icons-logos/typescript'
import jqueryIcon from '@iconify/icons-logos/jquery'
import html5Icon from '@iconify/icons-logos/html-5'
import css3Icon from '@iconify/icons-logos/css-3'
import sassIcon from '@iconify/icons-logos/sass'
import bootstrapIcon from '@iconify/icons-logos/bootstrap'
import nodejsIcon from '@iconify/icons-logos/nodejs'
import expressIcon from '@iconify/icons-logos/express'
import mongodbIcon from '@iconify/icons-logos/mongodb'
import stripeIcon from '@iconify/icons-logos/stripe'
import firebaseIcon from '@iconify/icons-logos/firebase'
import graphqlIcon from '@iconify/icons-logos/graphql'
import gatsbyIcon from '@iconify/icons-logos/gatsby'
import flutterIcon from '@iconify/icons-logos/flutter'
import dartIcon from '@iconify/icons-logos/dart'
//
import pythonIcon from '@iconify/icons-logos/python'
import javaIcon from '@iconify/icons-logos/java'
import vueIcon from '@iconify/icons-logos/vue'
import restIcon from '@iconify/icons-logos/rest'
import kotlinIcon from '@iconify/icons-logos/kotlin'
import cIcon from '@iconify/icons-logos/c'
import mysqlIcon from '@iconify/icons-logos/mysql'
import dockerIcon from '@iconify/icons-logos/docker'

import ResumeModal from './ResumeModal'
import MessageMeModal from './MessageMeModal'


let skillColorIcons = [
  {
    iconTitle:"Git",
    iconLogo:gitIcon
  },//git
  {
    iconTitle:"React",
    iconLogo:reactIcon
  },//react
  {
    iconTitle:"Redux",
    iconLogo:reduxIcon
  },//redux
  {
    iconTitle:"ES6",
    iconLogo:es6Icon
  },//es6
  {
    iconTitle:"JavaScript",
    iconLogo:javascriptIcon
  },//js
  {
    iconTitle:"TypeScript",
    iconLogo:typescriptIcon
  },//ts
  {
    iconTitle:"jQuery",
    iconLogo:jqueryIcon
  },//jQuery
  {
    iconTitle:"HTML5",
    iconLogo:html5Icon
  },//html
  {
    iconTitle:"CSS3",
    iconLogo:css3Icon
  },//css
  {
    iconTitle:"Sass",
    iconLogo:sassIcon
  },//sass
  {
    iconTitle:"Bootstrap",
    iconLogo:bootstrapIcon
  },//bootstrap
  {
    iconTitle:"Node.js",
    iconLogo:nodejsIcon
  },//node
  {
    iconTitle:"Express",
    iconLogo:expressIcon
  },//express
  {
    iconTitle:"MongoDB",
    iconLogo:mongodbIcon
  },//mongodb
  {
    iconTitle:"Stripe",
    iconLogo:stripeIcon
  },//stripe
  {
    iconTitle:"Firebase",
    iconLogo:firebaseIcon
  },//firebase
  {
    iconTitle:"graphQL",
    iconLogo:graphqlIcon
  },//graphQL
  {
    iconTitle:"Gatsby",
    iconLogo:gatsbyIcon
  },//gatsby
  {
    iconTitle:"Flutter",
    iconLogo:flutterIcon
  },//flutter
  {
    iconTitle:"Dart",
    iconLogo:dartIcon
  },//dart
  {
    iconTitle:"Python",
    iconLogo:pythonIcon
  },//python
  {
    iconTitle:"Java",
    iconLogo:javaIcon
  },//java
  {
    iconTitle:"Vue.js",
    iconLogo:vueIcon
  },//vue
  {
    iconTitle:"Rest",
    iconLogo:restIcon
  },//rest
  {
    iconTitle:"Kotlin",
    iconLogo:kotlinIcon
  },//kotlin
  {
    iconTitle:"C",
    iconLogo:cIcon
  },//c
  {
    iconTitle:"MySQL",
    iconLogo:mysqlIcon
  },//mysql
  {
    iconTitle:"Docker",
    iconLogo:dockerIcon
  },//docker
]

// redux, react-router, ts, mongodb,firebase, express, jquery, es6,
//graphql, gatsby, vue.js, ajax, rest, flutter, dart,
// kotlin, flutter, dart, C++, mysql,


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
                            style={{height:"45px", width:"45px", backgroundColor:"black", borderRadius:"25%", float:"left", margin:"5px", color:"white"}}>0</div>


                          <div
                            style={{height:"45px", width:"45px", backgroundColor:"black", borderRadius:"25%", float:"left", margin:"5px", color:"white"}}>0</div>


                          <div
                            style={{height:"45px", width:"45px", backgroundColor:"black", borderRadius:"25%", float:"left", margin:"5px", color:"white"}}>0</div>


                          <div
                            style={{height:"45px", width:"45px", backgroundColor:"black", borderRadius:"25%", float:"left", margin:"5px", color:"white"}}>0</div>


                          <div
                            style={{height:"45px", width:"45px", backgroundColor:"black", borderRadius:"25%", float:"left", margin:"5px", color:"white"}}>0</div>


                          <div
                            style={{height:"45px", width:"45px", backgroundColor:"black", borderRadius:"25%", float:"left", margin:"5px", color:"white"}}>0</div>


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
                      <i><p>Multimillion homes</p></i>

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
