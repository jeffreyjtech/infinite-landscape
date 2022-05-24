import * as React from "react";
import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import Button from 'react-bootstrap/Button'

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

const colors = ["Blue", "Green", "Red", "Yellow", "Orange"]

// const handleChange = (e) => {
//   let store = {...object};
//   const field = e.target.name;
//   const value = e.target.value;
//   store[field] = value;
//   setObject(store);
//   console.log(object)
// };


function DescriptionForm({descriptionHandler}){
  const [category, setCategory] = useState(categories);

  const handleChange = (event) => {
    console.log(event.target)
    setCategory(event.target.value);
  };

  return (
    <div id="description-form" >
      <h1>Description Form</h1>
      <TextField
        id="title-input"
        label="Title"
        helperText="Please enter a title"
        color="success"
        sx={{ mx: 1 }}
        onChange={handleChange}
      />
      <TextField
        id="select-category"
        select
        label="Select"
        value={category}
        onChange={handleChange}
        helperText="Please select your category"
        color="success"
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
        onChange={handleChange}
        helperText="Please select your color"
        color="success"
        sx={{ mx: 1 }}
      >
      {colors.map(value => {
        return <MenuItem>{value}</MenuItem>
      })}
      </TextField>
      <TextField
        id="summary-input"
        label="Summary"
        helperText="Please enter a summary"
        color="success"
        fullWidth
        onChange={handleChange}
      ></TextField>
      <TextField
        id="description-input"
        label="Description"
        multiline
        rows={6}
        fullWidth
        helperText="Please enter a description"
        color="success"
        onChange={handleChange}
      ></TextField>
      <Button></Button>
    </div>
  );
};

export default DescriptionForm;
