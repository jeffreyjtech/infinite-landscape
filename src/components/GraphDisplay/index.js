import { Box } from "@mui/material";
import Graph from "react-graph-vis";

// This will display graphs for the explore and user profile pages
export default function GraphDisplay(props) {
  const handleClick = ({ items }) => {
    props.handleClick(items);
  }

  const handleHover = (id) => {
    props.handleHover(id);
  }

  return (
    <Box sx={{
      minHeight: "160px",
    }}>
      <Graph
        graph={props.graph}
        options={{
          physics: {
            enabled: false
          },
          nodes: {
            shape: "square",
            font: {
              color: "white"
            }
          },
          interaction: {
            dragNodes: false,
            dragView: false,
            selectable: false,
            zoomView: false
          },
          edges: {
            arrows: {
              to: false,
              from: false
            },
            color: "white"
          }
        }}
        events={{
          click: handleClick,
          hoverNode: handleHover,
        }}
      />
    </Box>
  );

}
