import DescriptionForm from "./DescriptionForm";
import ToolTipForm from "./TooltipForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from '@mui/material/Button';

import { useState } from 'react'

function Form(props){
  
  
  //state for description form
  const [descriptions, setDescriptions] = useState({});
  //state for tooltip form
  const [tooltip, setTooltip] = useState({});

  //function to handle submit to API
  function onSumbit(e){
    e.preventDefault()
    //build this object:
    // {
    //   "title": "The first room",
    //   "username": "micha",
    //   "penName": "Michanations",
    //   "uuid": 10001,
    //   "summary": "A simple room with information placqards on one wall.",
    //   "description": "This room is completely unadorned, save for a gigantic information diagram on the east wall. There is a single door leading out of the room.",
    //   "category": "TUTORIAL",
    //   "color": "blue",
    //   "tooltips": {
    //     "information": "You can hover over words like this to get more information",
    //     "door": "This door leads to the next room. Hover over that room in the map view to see what might be inside."
    //   }
    //call the POST api route passing in the object above (as requested by Micha)
  }

  //function to handle the description form and the state updates
  //something being whatever we return from the form 
  function descriptionHandler(something){
    setDescriptions(something)
  }
  
  //function to handle the tooltip form and the state updates
  function tooltipHandler(something){
    setTooltip(something)
  }
  return(
    <Container style={{marginTop: '75px'}}>
      <Row>
        <Col className="w-75 m-4" style={{backgroundColor: "lightblue"}}>
        <DescriptionForm descriptionHandler={descriptionHandler}/>
        </Col>
        <Col className="w-25 m-4" style={{backgroundColor: "lightgreen"}}>
        <ToolTipForm tooltipHandler={tooltipHandler}/>
        </Col>
      </Row>
      <Button className="m-4" variant="contained">Preview</Button>
      <Button className="m-4" variant="contained">Submit</Button>
    </Container>
  )
}

export default Form;