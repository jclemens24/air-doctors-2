import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';

const selectOptions = ['Quote', 'Service', 'Repair'];

const DialogModal = ({ open, onClose }) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const handleSelect = () => {
    setSelectOpen(prevState => {
      return !prevState;
    });
  };

  const getNameValue = event => {
    setName(event.target.value);
  };

  const getEmailValue = event => {
    setEmail(event.target.value);
  };

  const getReasonValue = event => {
    setReason(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: 'center' }}>
        SCHEDULE A QUOTE OR SERVICE
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out the form and select a date, time and reason. After
          submitting, we will send confirmation details to the email provided.
        </DialogContentText>
        <TextField
          autoFocus
          margin='normal'
          id='name'
          label='Your Name'
          type='text'
          fullWidth
          variant='standard'
          onChange={getNameValue}
          value={name}
          placeholder='Bob Smith'
          required
        />
        <TextField
          error
          helperText='incorrect entry'
          margin='normal'
          id='email'
          label='Your Email'
          type='email'
          fullWidth
          variant='standard'
          onChange={getEmailValue}
          value={email}
          placeholder='you@example.com'
          required
        />
        <InputLabel id='reason'>Reason for Appointment</InputLabel>
        <FormControl margin='normal' sx={{ width: '100%' }}>
          <Select
            open={selectOpen}
            onOpen={handleSelect}
            onClose={handleSelect}
            value={reason}
            id='reason'
            label='Reason'
            onChange={getReasonValue}
            required>
            {selectOptions.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};

export default DialogModal;
