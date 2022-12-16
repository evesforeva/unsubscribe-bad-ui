import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const App = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <CssBaseline />
      <Dialog maxWidth="md" open={state === 0}>
        <DialogTitle>Unsubscribe?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you not refuse to don't not want to not stop not unsubscribing?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setState(1)}>
            I don't not refuse to don't not want to not not stop not doing that
          </Button>
          <Button onClick={() => setState(2)}>
            I don't not refuse to don't not want to not not stop not not doing that
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog maxWidth="xs" open={state === 2}>
        <DialogTitle>Subscription confirmed</DialogTitle>
        <DialogContent>
          <DialogContentText>Thank you for confirming your subscription! We have automatically renewed you for 5 years.</DialogContentText>
        </DialogContent>
        <Button onClick={() => setState(1)}>
          OK
        </Button>
      </Dialog>
    </>
  );
};

export default App;
