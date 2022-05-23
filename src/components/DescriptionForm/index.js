import * as React from "react";
import { useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const categories = [
  {
    value: "Horror",
    label: "Horror",
  },
  {
    value: "Sci-fi",
    label: "Sci-fi",
  },
  {
    value: "Fantasy",
    label: "Fantasy",
  },
];

// const colors = [

// ]

const DescriptionForm = () => {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="w-75" style={{backgroundColor: "lightblue"}}>
            <h1>Description Form</h1>
              <TextField
                id="title-input"
                label="Title"
                helperText="Please enter a title"
                magin="normal"
                color="success"
                focused
                sx={{ mx: 1 }}
              />
              <TextField
                id="select-category"
                select
                label="Select"
                value={category}
                onChange={handleChange}
                helperText="Please select your category"
                magin="normal"
                color="success"
                focused
              >
                {categories.map((category) => (
                  <MenuItem key={category.value} value={category.value}>
                    {category.value}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="select-color"
                select
                label="Select"
                value={category}
                // onChange={handleChange}
                helperText="Please select your color"
                magin="normal"
                color="success"
                focused
                sx={{ mx: 1 }}
              >
                <MenuItem> Blue </MenuItem>
                <MenuItem> Green </MenuItem>
                <MenuItem> Red </MenuItem>
                <MenuItem> Yellow </MenuItem>
                <MenuItem> Orange </MenuItem>
              </TextField>
              <TextField
                id="summary-input"
                label="Summary"
                helperText="Please enter a summary"
                magin="normal"
                color="success"
                fullWidth
                focused
              ></TextField>
              <TextField
                id="description-input"
                label="Description"
                multiline
                rows={6}
                fullWidth
                helperText="Please enter a description"
                magin="normal"
                color="success"
                focused
              ></TextField>
          </Col>
          <Col className="w-25">
          <h1>Tooltip Form</h1>
              <TextField
                id="title-input"
                label="Title"
                helperText="Please enter a title"
                magin="normal"
                color="success"
                focused
                sx={{ mx: 1 }}
              />
              <TextField
                id="select-category"
                select
                label="Select"
                value={category}
                onChange={handleChange}
                helperText="Please select your category"
                magin="normal"
                color="success"
                focused
              >
                {categories.map((category) => (
                  <MenuItem key={category.value} value={category.value}>
                    {category.value}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="select-color"
                select
                label="Select"
                value={category}
                // onChange={handleChange}
                helperText="Please select your color"
                magin="normal"
                color="success"
                focused
                sx={{ mx: 1 }}
              >
                <MenuItem> Blue </MenuItem>
                <MenuItem> Green </MenuItem>
                <MenuItem> Red </MenuItem>
                <MenuItem> Yellow </MenuItem>
                <MenuItem> Orange </MenuItem>
              </TextField>
              <TextField
                id="summary-input"
                label="Summary"
                helperText="Please enter a summary"
                magin="normal"
                color="success"
                fullWidth
                focused
              ></TextField>
              <TextField
                id="description-input"
                label="Description"
                multiline
                rows={6}
                fullWidth
                helperText="Please enter a description"
                magin="normal"
                color="success"
                focused
              ></TextField>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DescriptionForm;
