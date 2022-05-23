import { Typography, Box } from "@mui/material";
import GraphDisplay from "../../../GraphDisplay";

export default function NetworkView(props) {
  return <Box sx={{
    display: "flex",
    flexDirection: "column",
    backgroundColor: "darkslategray"
  }}>
    <Typography>{props.currentStory.category}</Typography>
    <GraphDisplay graph={props.graph} />
  </Box>
}
