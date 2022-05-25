import { Modal } from 'react-bootstrap'
import StoryDisplay from '../../Explore/StoryDisplay'

function PreviewModal(props){
  
  //handle show and close


  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>PREVIEW</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StoryDisplay currentStory={props.currentStory}  />
      </Modal.Body>
    </Modal>
  )
}

export default PreviewModal;