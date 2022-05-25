import { configureStore, combineReducers } from '@reduxjs/toolkit';
import graphSlice from './graph';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  graph: graphSlice.reducer,
});

export default configureStore({ reducer: reducers }, composeWithDevTools());
