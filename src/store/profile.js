import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {
      username: '',
      history: [''],
      favorites: [''],
      contributions: [''],
    },
  },
  reducers: {
    setProfile(state, action) {
      return { ...state, profile: action.payload };
    },
  },
});

export default profileSlice;

export const { setProfile } = profileSlice.actions;

// THUNK
export const getProfile = (profileId) => async (dispatch) => {
  console.log('checking profile id ', profileId);
  if(profileId) {
    try {
      const response = await axios.get(`${API_URL}/profile/${profileId}`);
      dispatch(setProfile(response.data));
    } catch (e) {
      console.error(e);
    }
  }
}
