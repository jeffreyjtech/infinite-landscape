import { configureStore, combineReducers } from '@reduxjs/toolkit';
import graphSlice from './graph';
import { composeWithDevTools } from 'redux-devtools-extension';
import authSlice from './auth';

let reducers = combineReducers({
  graph: graphSlice.reducer,
  auth: authSlice.reducer
});

export default configureStore({ reducer: reducers }, composeWithDevTools());
