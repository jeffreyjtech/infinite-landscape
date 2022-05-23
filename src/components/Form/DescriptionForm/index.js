import * as React from "react";
import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";

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
    <div id="description-form">
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
    </div>
  );
};

export default DescriptionForm;
