import * as React from "react";
import { useState } from 'react';
import { TextField, List, ListItem, ListItemText } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';

const ToolTipForm = () => {

  const [keys, setKeys] = useState();

  function handleSubmitKey (e){
    e.preventDefault();

  }

  function handleSubmitForm (e){
    e.preventDefault();

  }

  return (
    <div id="tooltip-form">
      <h1>Tooltip Form</h1>
      <TextField
        id="key-input"
        label="Key"
        helperText="Please enter a keyword"
        magin="normal"
        color="success"
        focused
        sx={{ mx: 1 }}
      />
      <TextField
        id="text-input"
        label="Text"
        helperText="Please enter text for your keyword"
        magin="normal"
        color="success"
        focused
        sx={{ mx: 1 }}
      />
      <IconButton>
      <AddBoxIcon color="success" fontSize="large" />
      </IconButton>
      <List>
        <ListItem>
          <ListItemText >sdfasdf</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText >sdfasdf</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText >sdfasdf</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default ToolTipForm;
