import { Box } from '@mui/material';
import Graph from 'react-graph-vis';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent, getAPIStories } from '../../store/graph';

// This will display graphs for the explore and user profile pages
export default function GraphDisplay() {
  const dispatch = useDispatch();
  const { stories, edges, currentStory } = useSelector((state) => state.graph);

  function handleClick({ nodes }) {
    const node = nodes[0];
    dispatch(setCurrent(node));
    dispatch(getAPIStories(node))
  }

  // const handleHover = (id) => {
  //   props.handleHover(id);
  // };

  console.log('Current story', currentStory);
  console.log('Stories', stories);

  return (
    <Box
      sx={{
        minHeight: '160px',
      }}
    >
      <Graph
        key={Math.random().toString()}
        graph={{
          nodes: JSON.parse(JSON.stringify(stories)),
          edges: JSON.parse(JSON.stringify(edges)),
        }}
        getNetwork={(network) => {
          network.focus(currentStory.id);
          network.fit({ maxZoomLevel: 0.55 });
        }}
        options={{
          physics: {
            enabled: false,
          },
          nodes: {
            shape: 'square',
            font: {
              color: 'white',
            },
          },
          interaction: {
            dragNodes: false,
            dragView: true,
            selectable: true,
            zoomView: false,
          },
          edges: {
            arrows: {
              to: false,
              from: false,
            },
            color: 'white',
          },
        }}
        events={{
          select: handleClick
          // hoverNode: handleHover,
        }}
      />
    </Box>
  );
}
