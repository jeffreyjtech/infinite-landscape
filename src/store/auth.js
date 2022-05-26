import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const authSlice = createSlice({
  name: "auth",
  initialState: {
      username: '',
      password: '', 
      token: '',
      role: '',
  },
  reducers: {
    //function to set user
    setUser(state, action){
      return action.payload;
    }
  }
})

// function to send user login through the signin route
export const getUser = (userData) => async(dispatch) => {
  if (userData.password && userData.username) {
    let response = await axios.post(`${API_URL}/signin`, {}, {
      auth: {
        username: userData.username, 
        password: userData.password,
      },
    });
    dispatch(response.data);
  }
}
export const getNewUser = (userData) => async(dispatch) => {
  if (userData.password && userData.username) {
    let response = await axios.post(`${API_URL}/signup`, {
      username: userData.username, 
      password: userData.password,
    });
    dispatch(response.data);
  }
}

export const { setUser } = authSlice.actions;

export default authSlice;