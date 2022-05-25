import * as React from "react";
import { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function ToolTipForm({ tooltipHandler }) {
  const [toolTipData, setToolTipData] = useState({});
  const [toolTipList, setToolTipList] = useState({});

  function handleChangeToolTip(e) {
    let toolTip = { ...toolTipData };
    const field = e.target.name;
    const value = e.target.value;
    toolTip[field] = value;
    setToolTipData(toolTip);
    tooltipHandler(toolTip);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const key = toolTipData.key;
    const value = toolTipData.text;
    toolTipList[key] = value;
    setToolTipData({...toolTipData, toolTipList})
    tooltipHandler({...toolTipData, toolTipList})
  }
  
  // function to delete tooltip from list
  //iterate through tooltip list
  //keep all data other than payload
  //if value !== target value
  //keep those in object
  function handleDelete(e, givenKey){
    e.preventDefault();
    let newObj = {}
    Object.entries(toolTipList).forEach(([key, value]) => {
      if (givenKey !== key){
        newObj[key] = value
      }
    })
    console.log('one', toolTipList)
    setToolTipList(newObj)
    // need to debug how state is being passed to StoryDisplay
    // tooltipHandler({newObj})
    console.log('two', toolTipList)
  }


  console.log(toolTipList)

  return (
    <div id="tooltip-form">
      <h1>Tooltip Form</h1>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="storeName">
              <Form.Control
                type="text"
                placeholder="Key"
                name="key"
                onChange={handleChangeToolTip}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="storeName">
              <Form.Control
                type="text"
                placeholder="Text"
                name="text"
                onChange={handleChangeToolTip}
              />
            </Form.Group>
          </Col>
          <Col>
            <IconButton onClick={handleSubmit}>
              <AddCircleIcon color="success" fontSize="large" />
            </IconButton>
          </Col>
        </Row>
        <List>
          {Object.entries(toolTipList).map(([key, value]) => {
            return (
              <ListItem>
                <ListItemText>{`${key}: ${value}`}</ListItemText>
                <IconButton onClick={(e) => handleDelete(e, key)} >
                  <DeleteForeverIcon />
                </IconButton>
              </ListItem>
            );
          })}
        </List>
      </Form>
    </div>
  );
}

export default ToolTipForm;
