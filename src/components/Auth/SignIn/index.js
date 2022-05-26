import * as React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function SignIn() {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    let store = { ...formData };
    const field = e.target.name;
    const value = e.target.value;
    store[field] = value;
    console.log(store);
    setFormData(store);
  };

  // function handleSubmit(userData){
  //   //call API with the appriate user data object
  // }

  return (
    <>
      <Container className="w-25 mt-4" style={{backgroundColor:'skyblue'}}>
        <Row>
          <Form>
            <Col>
              <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit" className='mb-4'>
                Log In!
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </>
  )
}

export default SignIn;
