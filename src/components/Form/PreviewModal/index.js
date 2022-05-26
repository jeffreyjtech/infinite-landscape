import { Modal } from 'react-bootstrap'
import StoryDisplay from '../../Explore/StoryDisplay'

/**
 * 
 * @param {*} props
 * data entered into the form that was ggregated in the parent component Form/index.js
 * @returns 
 * Modal popup that displayes a preview of what the site might look like after the form is complete and the submission is in.
 */
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