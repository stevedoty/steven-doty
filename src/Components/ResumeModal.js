import React, {Component, useState} from 'react'
import {Modal, Button} from 'react-bootstrap'


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
              My resume will go here
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
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Resume / CV
          </Button>

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
