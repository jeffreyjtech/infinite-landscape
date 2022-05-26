//component for list of favorite contributions the user has saved

// IMPORTS: from MUI Accordian component
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react'

/**
 * 
 * @param {*} props
 * takes in data to be rendered in accordian  
 * @returns 
 * component with rendered data from props
 * 
 */
function Favorites(props) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='mt-4' style={{ height: '500px', border: 'solid 3px black' }}>
      <p>My Favorites:</p>
      <div className='m-4'>
        {/* insert map here to iterate over data and populare accordians appriopriatley
          props.data.map((value)=>{})
        */}
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Favorites;
