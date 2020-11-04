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
      <div className="banner" style={{textAlign:"center", padding:"40px 0 20px 0"}}>
        <p>Full-stack developer. Build your idea now.</p>
          <div className="modal-container" style={{width: "100%"}}>
            <ResumeModal />
            <MessageMeModal />
          </div>
      </div>

      <div>

              <Card className="section" style={{float:"left"}}>
                <Card.Header className="section-header" style={{textAlign:"center"}}>
                  Skills
                </Card.Header>

                  <Card.Body style={{backgroundColor:"#343a40"}}>
                      {skillColorIcons.map((skillIcon, j) => {return(

                        <div style={{width:"85px", textAlign:"center"}}>
                          <span style={{color:"white"}}>{skillIcon.iconTitle}</span>
                          <br/>
                          <Icon
                            icon={skillIcon.iconLogo}
                            style={{
                              backgroundColor:"white",
                              borderRadius:"25%",
                              padding:"10px",
                              height:"62px",
                              width:"62px"
                          }}/>

                        </div>
                      )})}
                  </Card.Body>

              </Card>
              <Card className="section" style={{textAlign:"center"}}>
                <Card.Header className="section-header">
                  Relevant Projects
                </Card.Header>

                  <Card.Body style={{backgroundColor:"#343a40", height:"500px", color:"white", textAlign:"left"}}>
                    <h2><b>eBay Skin-React & Skin-CSS,</b></h2><h6>Summer 2020</h6>
                    <p>Skin-React eases the use of the original skin for developers condensing it into React-styled components.</p>
                      <p>Scalability, developer performance, and profits all benefit</p>
                      <p>https://github.com/eBay/skin-react Website</p>
                    <h2><b>Helping Families in Silicon Valley,</b></h2><h6>Spring 2019 - Present</h6>
                    <ul>
                      <li>Refactored to React</li>
                      <li>Maintain and update website</li>
                      <li>http://www.helpingfamiliesisn.org/</li>
                    </ul>

                    <Badge className="pill-button" pill>
                      <div className="pill-button_text">github</div>
                    </Badge>
                    <Badge className="pill-button" pill>
                      <div className="pill-button_text">github.io</div>
                    </Badge>
                  </Card.Body>

              </Card>
              <Card className="section" style={{textAlign:"center"}}>
                <Card.Header className="section-header">
                  Relevant XP
                </Card.Header>

                  <Card.Body style={{backgroundColor:"#343a40", height:"600px", color:"white", textAlign:"left"}}>
                  <h2><b>Front-End Software Developer,</b></h2> <h6>eBay, Mountain View CA</h6>

                    <p>Skin-React and Skin-CSS</p>
                    <p>Maintained scalability and responsiveness throughout my involvement.</p>
                    <p>Refactored existing javascript components with typescript.</p>
                    <p>Used typescript to build react components and create an easy to use platform.</p>
                    <p>Increased accessibility by 12% and performance by 7%.</p>
                    <p>Maintained live UI error detection.</p>

                  <h2><b>Woodworker & Finish Carpenter,</b></h2> <h6>AW Construction, Atherton CA</h6>

                    <p>Helped in a family friend’s company after college.</p>
                    <p>Became youngest project manager and increased profits 8%</p>
                    <p>Build beautiful wood furniture with extreme precision and minimal waste.</p>
                    <p>Optimized team workflow utilizing each member’s strengths to full potential.</p>
                    <p>Managed multiple projects while working on the field in the most expensive homes.</p>

                  <Badge className="pill-button" pill>
                    <div className="pill-button_text">more info...</div>
                  </Badge>
                  </Card.Body>

              </Card>
              <Card className="section" style={{textAlign:"center"}}>
                <Card.Header className="section-header" style={{fontSize:"158%"}}>
                  Educación
                </Card.Header>

                  <Card.Body style={{backgroundColor:"#343a40", height:"200px", color:"white", textAlign:"left"}}>
                  <h2><b>BS Electrical Engineering</b></h2>
                  <h6>San Jose State Univerity, San Jose CA</h6>
                  <h2><b>AS Engineering</b></h2>
                  <h6>Cañada College, Redwood City CA</h6>
                  </Card.Body>

              </Card>

      </div>
    </div>
  );
}

export default Body;

//
