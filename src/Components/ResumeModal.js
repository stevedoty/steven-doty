import React, {Component, useState} from 'react'
import {Modal, Button, Badge} from 'react-bootstrap'


class ResumeModal extends Component{

  render(){

    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Steven Doty
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Resume</h4>
            
            <p>
              My resume (pdf & download) will go here
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }

    function App() {
      const [modalShow, setModalShow] = React.useState(false);

      return (
        <div style={{textAlign:"center"}}>
          <Badge id="messageMe-button" className="modal-button pill-button" pill onClick={() => setModalShow(true)} style={{margin:"0", marginBottom:"0.38rem"}}>
            <div id="messageMe-button_text" className="modal-button_text pill-button_text">Resume</div>
          </Badge>


          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div >
      );
    }


    return(
        <App/>
    )
  }
}

export default ResumeModal;
