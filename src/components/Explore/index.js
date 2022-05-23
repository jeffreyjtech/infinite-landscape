import { Box } from "@mui/material";
import StoryDisplay from "./StoryDisplay";
import NetworkDisplay from "./NetworkDisplay";

const stories = {
  nodes: [
    {
      title: "The first room",
      username: "micha",
      penName: "Michanations",
      uuid: 10001,
      summary: "A simple room with information placqards on one wall.",
      description: "This room is completely unadorned, save for a gigantic information diagram on the east wall. There is a single door leading out of the room.",
      category: "TUTORIAL",
      color: "blue",
      tooltips: {
        information: "You can hover over words like this to get more information",
        door: "This door leads to the next room. Hover over that room in the map view to see what might be inside."
      }
    },
    {
      title: "The second room",
      username: "micha",
      penName: "Michanations",
      uuid: 10002,
      summary: "An elaborately decorated room.",
      description: "This room is festooned with gaudy decorations. Nearly every surface is covered with some kind of intricate pattern.",
      category: "TUTORIAL",
      color: "blue",
      tooltips: {
        decorations: "Sometimes there will be hidden information in these descriptions",
        pattern: "One repeated motif is a series of colors arranged in a circle, each color signifying a different region of the landscape."
      }
    }
  ],
  edges: [
    {
      source: 10001,
      target: 10002
    },
    {
      source: 10002,
      target: 10001
    }
  ]
};
let currentStory = stories.nodes[0];

export default function Explore() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      maxWidth: "88%",
      margin: "auto",
      backgroundColor: "darkgray",
      justifyContent: "space-evenly",
      padding: "2%"
    }}>
      <StoryDisplay currentStory={currentStory} />
      <NetworkDisplay currentStory={currentStory} stories={stories} />
    </Box>
  );
}
