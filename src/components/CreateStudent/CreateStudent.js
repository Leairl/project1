import React, { } from 'react';
import { CreateStudentWrapper } from './CreateStudent.styled';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Alert, Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';


function CreateStudent(){

   const [state, setState] = React.useState({
      showSuccessSnack: false,
      showErrorSnack: false,
      vertical: 'bottom',
      horizontal: 'center'
    });

   const { showSuccessSnack, showErrorSnack, vertical, horizontal } = state;

   const setSuccessSnackOpen = () => {
      setState({ ...state, showSuccessSnack: true });
   };

   const setSuccessSnackClosed = () => {
      setState({ ...state, showSuccessSnack: false });
   };

   const setErrorSnackOpen = () => {
      setState({ ...state, showErrorSnack: true });
   };

   const setErrorSnackClosed = () => {
      setState({ ...state, showErrorSnack: false });
   };

    function callCreateStudent(event) {
      var data = {
         name: event.target['studentname'].value,
         credits: event.target['studentcredits'].value
      }
      fetch('/student', {  
         method: "POST",
               headers: {
            "Content-Type": "application/json",
          },
         body: JSON.stringify(data)
      }).then( res => {
         if (res.ok) {
            setSuccessSnackOpen()
         }
         else {
            setErrorSnackOpen()
         }
      });
      event.preventDefault()
   }
   return (
 <CreateStudentWrapper>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={callCreateStudent}
    >
      <div className = "row">
          <TextField id="studentname" label="Name" variant="standard" required={true} />
      </div>
      <div className = "row">
          <TextField id="studentcredits" label="Credits" variant="standard" required= {true} />
      </div>
      <div className = "row">
         <Button type = 'submit'> Create Student </Button>
      </div>
    </Box>
    <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={5000}
        onClose={setSuccessSnackClosed}
        open={showSuccessSnack}
        severity="success"
        variant='filled'>
        <Alert
           onClose={setSuccessSnackClosed}
           severity="success"
           variant='filled'
           sx={{ width: '100%' }}>
           Student added
        </Alert>
     </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={5000}
        onClose={setErrorSnackClosed}
        open={showErrorSnack}
      >
         <Alert
            onClose={setErrorSnackClosed}
            severity="error"
            variant='filled'>
            Error adding student
         </Alert>
      </Snackbar>
 </CreateStudentWrapper>

   );

}
CreateStudent.propTypes = {};

CreateStudent.defaultProps = {};

export default CreateStudent;
