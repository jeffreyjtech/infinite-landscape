import NetworkView from "./NetworkView";
import NetworkControls from "./NetworkControls";
import { Box } from "@mui/material";

export default function NetworkDisplay(props) {
  return (<Box sx={{
    display: "flex",
    flexDirection: "column",
    MaxWidth: "32%",
    margin: "1%"
  }}>
    <NetworkView graph={props.stories} currentStory={props.currentStory} />
    <NetworkControls />
  </Box>
  )
}
