import { Modal } from 'react-bootstrap'
import StoryDisplay from '../../Explore/StoryDisplay'

function PreviewModal(props){
  
  //handle show and close


  return (
    <Modal show={true}>
      <Modal.Header closeButton={true}>
        <Modal.Title>PREVIEW</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StoryDisplay currentStory={props.currentStory}/>
      </Modal.Body>
    </Modal>
  )
}

export default PreviewModal;