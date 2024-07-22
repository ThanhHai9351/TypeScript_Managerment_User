import React from 'react';
import { Alert, Snackbar } from '@mui/material';

type AlertSeverity = 'error' | 'warning' | 'info' | 'success';

interface AlertMessageProps {
  isOpen: boolean;
  handleClose: () => void;
  text:string;
  type:AlertSeverity;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ isOpen, handleClose, text,type }) => {

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{maxWidth: "300px"}}
    >
      <Alert onClose={handleClose} severity={type} variant="filled" sx={{ width: '100%' }}>
       {text}
      </Alert>
    </Snackbar>
  );
}

export default AlertMessage;
