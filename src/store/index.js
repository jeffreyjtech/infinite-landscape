import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import graphSlice from "./graph";
import { composeWithDevTools } from "redux-devtools-extension";

let reducer = combineReducers({
  graph: graphSlice.reducer,
});

export default function store() {
  return configureStore({ reducer }, composeWithDevTools());
}
