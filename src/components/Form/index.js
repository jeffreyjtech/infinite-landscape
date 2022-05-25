import DescriptionForm from "./DescriptionForm";
import ToolTipForm from "./TooltipForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from '@mui/material/Button';

import { useState } from 'react'

function Form(props){
  //state for description form
  const [descriptions, setDescriptions] = useState({
    category: "Horror",
    color: 'Blue',
    description: 'stuff',
    summary: 'more stuff',
    title: 'this is title'
  });
  //state for tooltip form
  const [tooltip, setTooltip] = useState({
    key: "stuff",
    text: 'this is the value',
    keys: [{
      key: 'key',
      value: 'value'
    }]
  });

  //function to handle submit to API
  function onSumbit(e){
    let object = {
      title: descriptions.title,
      username: 'PLACEHOLDER',
      penName: 'PLACEHOLDER_STUFF',
      uuid: 'PLACEHOLDER',
      summary: descriptions.summary,
      description: descriptions.description,
      category: descriptions.category,
      color: descriptions.color,
      tooltips: tooltip.toolTipList
    }
    console.log(object)
    //call the POST api route passing in the object above (as requested by Micha)
  }

  //function to handle the description form and the state updates
  //something being whatever we return from the form 
  function descriptionHandler(formData){
    setDescriptions(formData)
    console.log('state-d:', descriptions)
  }
  
  //function to handle the tooltip form and the state updates
  function tooltipHandler(something){
    setTooltip(something)
    console.log('state-tt:', tooltip )
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
      <Button className="m-4" variant="contained" onClick={onSumbit}>Submit</Button>
    </Container>
  )
}

export default Form;