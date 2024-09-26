import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
export default function Update(props) {
    const {state,city,pin}=props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
const handleSubmit=(e)=>{
    const s=document.getElementById('nameState').value;
    const c=document.getElementById('nameCity').value;
    const p=document.getElementById('namePin').value;
    handleClose()

}
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"update form"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <TextField
            autoFocus
            required
            margin="dense"
            id="nameCity"
            name="City"
            label="City"
            type="email"
            fullWidth
            defaultValue={city}
            variant="standard"
          />

        <TextField
          autoFocus
          required
          margin="dense"
          id="phone no"
          name="Phone no"
          label="Phone no"
          type="email"
          fullWidth
          defaultValue={pin}
          variant="standard"
        />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
