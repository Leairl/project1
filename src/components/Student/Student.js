
import { StudentWrapper } from './Student.styled';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateStudent from '../CreateStudent/CreateStudent';

const Student = () => (
 <StudentWrapper>
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Create Student
        </AccordionSummary>
        <AccordionDetails>
          <CreateStudent></CreateStudent>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          View or Update Student
        </AccordionSummary>
        <AccordionDetails>
          update student
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Delete Student
        </AccordionSummary>
        <AccordionDetails>
          delete student
        </AccordionDetails>
      </Accordion>
 </StudentWrapper>
);

Student.propTypes = {};

Student.defaultProps = {};

export default Student;
