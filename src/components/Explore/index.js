import { Box } from '@mui/material';
import StoryDisplay from './StoryDisplay';
import NetworkDisplay from './NetworkDisplay';

export default function Explore() {
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
      <StoryDisplay />
      <NetworkDisplay />
    </Box>
  );
}
