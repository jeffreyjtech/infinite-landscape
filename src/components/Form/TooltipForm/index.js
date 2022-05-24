import * as React from "react";
import { useState } from "react";
import { TextField, List, ListItem, ListItemText } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const toolTipList = [];

function ToolTipForm({ tooltipHandler }) {
  const [toolTipData, setToolTipData] = useState({});

  function handleChangeToolTip(e) {
    // console.log(e.target.name, e.target.value)
    let toolTip = { ...toolTipData };
    const field = e.target.name;
    const value = e.target.value;
    toolTip[field] = value;
    setToolTipData(toolTip);
    tooltipHandler(toolTipData);
    // console.log(toolTipData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log('state:', toolTipData)
    const key = toolTipData.key;
    const value = toolTipData.text;
    toolTipList.push({key: key, value: value});
    setToolTipData({...toolTipData, toolTipList})
  }

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
          {toolTipList.map(({key, value}) => {
            return (
              <ListItem>
                <ListItemText>{`${key}: ${value}`}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Form>
    </div>
  );
}

export default ToolTipForm;
