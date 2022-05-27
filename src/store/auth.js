import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const storedAuth = JSON.parse(localStorage.getItem('auth'));
const initialState = storedAuth || {
  username: '',
  password: '', 
  token: '',
  role: '',
  signedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    //function to set user
    setUser(state, action){
      let newState = { ...state, ...action.payload, signedIn: true };
      localStorage.setItem('auth', JSON.stringify(newState));
      return newState;
    },
    // Logout function goes here, make sure to clear local storage
    logOutUser(state, action){
    let logoutState = {...state, ...initialState};
    localStorage.clear('auth');
    return logoutState;
    },
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
    dispatch(setUser(response.data));
    console.log(response.data);
  } else {
    console.log('bad username')
  }
}

export const getNewUser = (userData) => async(dispatch) => {
  if (userData.password && userData.username) {
    let response = await axios.post(`${API_URL}/signup`, {
      username: userData.username, 
      password: userData.password,
    });
    dispatch(setUser(response.data));
    console.log(response.data);
  }
}

export const { setUser } = authSlice.actions;
export const { logOutUser } = authSlice.actions;

export default authSlice;
