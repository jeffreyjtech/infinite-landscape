import { Box } from "@mui/material";
import StoryDisplay from "./StoryDisplay";
import NetworkDisplay from "./NetworkDisplay";

const stories = {
  nodes: [
    {
      label: "The first room",
      username: "micha",
      penName: "Michanations",
      id: 10001,
      summary: "A simple room with information placards on one wall.",
      description: "This room is completely unadorned, save for a gigantic series of information diagrams on the east wall. There is a single door leading out of the room.",
      category: "TUTORIAL",
      color: "blue",
      tooltips: {
        information: "You can hover over words like this to get more information",
        door: "This door leads to the next room. Hover over that room in the map view to see what might be inside."
      }
    },
    {
      label: "The second room",
      username: "micha",
      penName: "Michanations",
      id: 10002,
      summary: "An elaborately decorated room.",
      description: "This room is festooned with gaudy decorations. Nearly every surface is covered with some kind of intricate pattern.",
      category: "TUTORIAL",
      color: "blue",
      tooltips: {
        decorations: "Sometimes there will be hidden information in these descriptions",
        pattern: "One repeated motif is a series of colors arranged in a circle, each color signifying a different region of the landscape."
      }
    },
    {
      label: "The third room",
      username: "micha",
      penName: "Michanations",
      id: 10003,
      summary: "A simple room with information placards on one wall.",
      description: "This room is completely unadorned, save for a gigantic series of information diagrams on the east wall. There is a single door leading out of the room.",
      category: "TUTORIAL",
      color: "green",
      tooltips: {
        information: "You can hover over words like this to get more information",
        door: "This door leads to the next room. Hover over that room in the map view to see what might be inside."
      }
    },
    {
      label: "The other third room",
      username: "micha",
      penName: "Michanations",
      id: 10004,
      summary: "A simple room with information placards on one wall.",
      description: "This room is completely unadorned, save for a gigantic series of information diagrams on the east wall. There is a single door leading out of the room.",
      category: "TUTORIAL",
      color: "purple",
      tooltips: {
        information: "You can hover over words like this to get more information",
        door: "This door leads to the next room. Hover over that room in the map view to see what might be inside."
      }
    },
  ],
  edges: [
    {
      from: 10001,
      to: 10002
    },
    {
      from: 10002,
      to: 10001
    },
    {
      from: 10002,
      to: 10003
    },
    {
      from: 10002,
      to: 10004
    },
    {
      from: 10004,
      to: 10002
    },
    {
      from: 10003,
      to: 10002
    },
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
