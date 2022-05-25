import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from '@mui/material/Button';

function Navigator() {
  return (
    <div id="navbar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Infinite Landscape</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="create">Create a Room</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
          </Nav>
        </Container>
            <Button color="primary">Login</Button>
      </Navbar>
    </div>
  );
}

export default Navigator;