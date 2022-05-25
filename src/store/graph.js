import { createSlice } from "@reduxjs/toolkit";

const graphSlice = createSlice({
  name: "graph",
  initialState: {
    nodes: [],
    edges: []
  },
  reducers: {
    addNode(state, action) {
      let newState = { ...state, nodes: [...state.nodes, action.payload] }
      //send new state to server
      return newState;
    },
    addEdge(state, action) {
      let newState = { ...state, edges: [...state.edges, action.payload] }
      //send new state to server
      return newState;
    }
  }
});

export default graphSlice;

// {
//   "label": "The first room",
//   "username": "micha",
//   "penName": "Michanations",
//   "id": 10001,
//   "summary": "A simple room with information placards on one wall.",
//   "description": "This room is completely unadorned, save for a gigantic information diagram on the east wall. There is a single door leading out of the room.",
//   "group": "TUTORIAL",
//   "color": "blue",
//   "tooltips": {
//     "information": "You can hover over words like this to get more information",
//     "door": "This door leads to the next room. Hover over that room in the map view to see what might be inside."
//   }
// }
