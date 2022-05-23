import { Box, Button } from "@mui/material"

export default function NetworkControls() {
  return <Box sx={{ backgroundColor: "darkslategrey" }}>
    <Button>North</Button>
    <Button>East</Button>
    <Button>South</Button>
    <Button>West</Button>
  </Box>
}
