import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library, coffee } from '@fortawesome/fontawesome-svg-core'
import {
  fab,
  fas,
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faNode,
  faStripe,
  faPython,
  faJava
} from '@fortawesome/free-brands-svg-icons'


// const element = <FontAwesomeIcon icon={faCoffee} />
// const element1 = <FontAwesomeIcon icon={fab fa-react} />
// const element = <FontAwesomeIcon icon={faCoffee} />


// redux, ts, mongodb,firebase, express
// kotlin, flutter, dart, C++,
let skillIcons = [
  {
    name:"React",
    icon:faReact
  },
  {
    name:"Javascript",
    icon:faJs
  },
  {
    name:"HTML5",
    icon:faHtml5
  },
  {
    name:"CSS",
    icon:faCss3
  },
  {
    name:"Sass",
    icon:faSass
  },
  {
    name:"React",
    icon:faBootstrap
  },
  {
    name:"React",
    icon:faNode
  },
  {
    name:"React",
    icon:faStripe
  },
  {
    name:"React",
    icon:faPython
  },
  {
    name:"React",
    icon:faJava
  }
]
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
  body:"experince timeline"
},
{
  title:"Education",
  body:"Education timeline"
},
{
  title:"Bio",
  body:"Bio profile"
},
]


function Body() {
  return (
    <div className="App-body">



    <div>Experience in turning ideas into reality</div>

    <div style={{backgroundColor:"grey", height:"200px", width:"100%"}}>

      {skillIcons.map((skill, j) => {
        return (
          <div
            style={{
              margin:"4px",
              padding:"4px",
              float:"left",
              border:"2px solid white",
              borderRadius:"50%",
              color:"white",
              height:"38px",
              width:"38px"}}>
            <FontAwesomeIcon
            icon={skill.icon}
            style={{ color:"white", height:"100%", width:"100%"}}/>
          </div>
        )
      })}

    </div>

    <Accordion>

    {accordionItems.map((item, i)=>{
      return (
        <Card style={{textAlign:"center"}}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey={i.toString()}>
              {item.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={i.toString()}>
            <Card.Body>{item.body}</Card.Body>
          </Accordion.Collapse>
        </Card>
      )
    })}
    </Accordion>



    </div>
  );
}

export default Body;

//
