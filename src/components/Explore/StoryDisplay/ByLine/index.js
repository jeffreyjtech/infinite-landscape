import Typography from "@mui/material/Typography";

export default function StoryTitle(props) {
  return <Typography sx={{ textAlign: "right", marginTop: "2%", color: "lightgray" }} >by {props.penName}</Typography>
}
