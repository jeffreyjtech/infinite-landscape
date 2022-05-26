import { Box } from '@mui/material';
import { useSelector } from "react-redux";
import StoryDisplay from './StoryDisplay';
import NetworkDisplay from './NetworkDisplay';

export default function Explore() {
  const currentStory = useSelector((state) => state.graph.currentStory)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '88%',
        margin: 'auto',
        backgroundColor: 'darkgray',
        justifyContent: 'space-evenly',
        padding: '2%',
      }}
    >
      { currentStory ? <StoryDisplay currentStory={currentStory} /> : null}
      <NetworkDisplay />
    </Box>
  );
}
