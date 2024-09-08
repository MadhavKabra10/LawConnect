import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


export default function DropList(props) {

  return (
    <div>
      <Accordion  defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Summary
        </AccordionSummary>
        <AccordionDetails>
          {props.data.summary
          }

          {
            console.log(props)
          }
        </AccordionDetails>
      </Accordion>
       {
       props.data.files&&props.data.files.length>0?props.data.files.map((file,count)=>(<>
      <div key={count}>
        {count=count+1}
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          </AccordionSummary>
          <AccordionDetails>
         {file}
        </AccordionDetails>
        </Accordion>
      </div>  
      </>)):<></>
      }
      
     
    </div>
  );
}
