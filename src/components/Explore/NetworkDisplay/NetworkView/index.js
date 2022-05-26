import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import GraphDisplay from "../../../GraphDisplay";

export default function NetworkView() {
  const currentStory = useSelector((state) => state.graph.currentStory)
  return <Box sx={{
    display: "flex",
    flexDirection: "column",
    backgroundColor: "darkslategray",
  }}>
    <Typography>{currentStory.category}</Typography>
    <GraphDisplay />
  </Box>
}
