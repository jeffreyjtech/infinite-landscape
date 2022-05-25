import * as React from "react";
import { useState} from "react";
// import { MenuItem, TextField } from "@mui/material";
// import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const categories = [ 'Horror', 'Sci-Fi', 'Fantasy']
const colors = ["Blue", "Green", "Red", "Yellow", "Orange"]

function DescriptionForm({ descriptionHandler }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value)
    let store = { ...formData };
    const field = e.target.name;
    const value = e.target.value;
    store[field] = value;
    setFormData(store);
    descriptionHandler(store);
  };
  return (
    <>
      <div>
        <p>Description Form</p>
        <Form className="mt-4">
          <Row className="g-2">
            <Col>
              <Form.Group controlId="storeName">
                <Form.Control
                  type="text"
                  placeholder="Title"
                  name="label"
                  onChange={handleChange}
                  style={{ height: '58px' }}
                />
              </Form.Group>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="SELECT">
                <Form.Select name="category" onChange={handleChange}>
                  <option>Categories</option>
                  {categories.map(value => {
                    return <option value={value}>{value}</option>
                  })}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="SELECT">
                <Form.Select name="color" onChange={handleChange}>
                  <option>Colors</option>
                  {colors.map(value => {
                    return <option value={value}>{value}</option>
                  })}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel controlId="floatingTextarea2" label="summary" className="mt-2">
            <Form.Control
              as="textarea"
              placeholder="enter info here"
              name='summary'
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="description" className="mt-2">
            <Form.Control
              as="textarea"
              placeholder="enter description here"
              style={{ height: '100px' }}
              name='description'
              onChange={handleChange}
            />
          </FloatingLabel>
        </Form>
      </div>
    </>
  );
};

export default DescriptionForm;
