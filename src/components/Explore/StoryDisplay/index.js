import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import StoryTitle from "./StoryTitle";
import StoryView from "./StoryView";
import ByLine from "./ByLine";


export default function StoryDisplay() {
  const currentStory = useSelector((state) => state.graph.currentStory)
  return (
    <Box id="story-display" sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "darkslategray",
      color: "whitesmoke",
      maxWidth: "40%",
      margin: "2%",
      padding: "2%",
      textAlign: "left",
    }}>
      <StoryTitle title={currentStory.label} />
      <StoryView description={currentStory.description} tooltips={currentStory.tooltips} />
      <ByLine penName={currentStory.penName} />
    </Box>
  );
}
