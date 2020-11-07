import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { layergroup, coffee } from '@fortawesome/fontawesome-svg-core'

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
