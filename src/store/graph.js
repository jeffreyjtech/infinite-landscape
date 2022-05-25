import { createSlice } from '@reduxjs/toolkit';

const stories = [
  {
    label: 'The first room',
    username: 'micha',
    penName: 'Michanations',
    id: 10001,
    summary: 'A simple room with information placards on one wall.',
    description:
      'This room is completely unadorned, save for a gigantic series of information diagrams on the east wall. There is a single door leading out of the room.',
    group: 'TUTORIAL',
    color: 'blue',
    tooltips: {
      information: 'You can hover over words like this to get more information',
      door: 'This door leads to the next room. Hover over that room in the map view to see what might be inside.',
    },
  },
  {
    label: 'The second room',
    username: 'micha',
    penName: 'Michanations',
    id: 10002,
    summary: 'An elaborately decorated room.',
    description:
      'This room is festooned with gaudy decorations. Nearly every surface is covered with some kind of intricate pattern.',
    group: 'TUTORIAL',
    color: 'blue',
    tooltips: {
      decorations: 'Sometimes there will be hidden information in these descriptions',
      pattern:
        'One repeated motif is a series of colors arranged in a circle, each color signifying a different region of the landscape.',
    },
  },
  {
    label: 'The third room',
    username: 'micha',
    penName: 'Michanations',
    id: 10003,
    summary: 'A simple room with information placards on one wall.',
    description:
      'This room is completely unadorned, save for a gigantic series of information diagrams on the east wall. There is a single door leading out of the room.',
    group: 'TUTORIAL',
    color: 'green',
    tooltips: {
      information: 'You can hover over words like this to get more information',
      door: 'This door leads to the next room. Hover over that room in the map view to see what might be inside.',
    },
  },
  {
    label: 'The other third room',
    username: 'micha',
    penName: 'Michanations',
    id: 10004,
    summary: 'A simple room with information placards on one wall.',
    description:
      'This room is completely unadorned, save for a gigantic series of information diagrams on the east wall. There is a single door leading out of the room.',
    group: 'TUTORIAL',
    color: 'purple',
    tooltips: {
      information: 'You can hover over words like this to get more information',
      door: 'This door leads to the next room. Hover over that room in the map view to see what might be inside.',
    },
  },
];

const initialState = {
  stories,
  currentStory: stories[1],
  edges: [
    {
      from: 10002,
      to: 10001,
    },
    {
      from: 10002,
      to: 10003,
    },
    {
      from: 10002,
      to: 10004,
    },
  ],
};

const graphSlice = createSlice({
  name: 'graph',
  initialState: initialState,
  reducers: {
    setCurrent(state, action) {
      let newState = { ...state };
      newState.currentStory = state.stories.find((story) => story.id === action.payload);
      console.log('newState:', newState);
      return { ...state, ...newState };
    },
    setStories(state, action) {
      console.log('Setting stories from API');
      return { ...state, stories: action.payload };
    },
  },
});

export const { setCurrent, setStories } = graphSlice.actions;

export default graphSlice;

export const getAPIStories = (nodeId) => async (dispatch, getState) => {
  const { setStories } = graphSlice.actions;
  // axios call goes here
  dispatch(setStories(stories));
};
