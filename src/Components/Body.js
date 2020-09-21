import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap'



let contacts = [
  {
    name:"email",
    link:"",
    icon:""
  },
  {
    name:"phone",
    link:"",
    icon:""
  },
  {
    name:"github",
    link:"",
    icon:""
  },
  {
    name:"linkedin",
    link:"",
    icon:""
  },
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

    <div>{contacts.map((contact, i)=>{
      return <> {contact.name} </>
    })}</div>

    <div>Experience in turning ideas into reality</div>

    <Accordion>
    {accordionItems.map((item, i)=>{
      return (
        <Card style={{textAlign:"center"}}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={i.toString()}>
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
