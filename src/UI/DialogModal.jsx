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
  FormControl,
  Stack
} from '@mui/material';
import Button from '../UI/Button';
import Localization from '../components/Localization';
import { DateTimePicker } from '@mui/x-date-pickers';

const selectOptions = ['Quote', 'Service', 'Repair'];

const DialogModal = ({ open, onClose }) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [dateTime, setDateTime] = useState(null);

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

  const getDateTime = value => {
    setDateTime(value || null);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name, email, reason, dateTime);
    setName('');
    setEmail('');
    setReason('');
    setDateTime(null);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} scroll='body'>
      <DialogTitle sx={{ textAlign: 'center' }}>
        SCHEDULE A QUOTE OR SERVICE
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
        <DialogContentText>
          Please fill out the form and select a date, time and reason. After
          submitting, we will send confirmation details to the email provided.
        </DialogContentText>
        <form onSubmit={handleSubmit}>
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
            autoComplete='name'
            inputProps={{ inputMode: 'text', pattern: '[A-Za-z A-Za-z]+' }}
          />
          <TextField
            inputProps={{ inputMode: 'email' }}
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
            autoComplete='email'
          />
          <InputLabel id='reason'>Reason for Appointment</InputLabel>
          <FormControl margin='normal' sx={{ width: '100%' }}>
            <Select
              fullWidth
              open={selectOpen}
              onOpen={handleSelect}
              onClose={handleSelect}
              value={reason}
              id='reason'
              label={'Reason'}
              onChange={getReasonValue}
              required
              labelId='reason'
              defaultValue='Repair'>
              {selectOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Localization>
            <Stack spacing={5}>
              <DateTimePicker
                label={'Date & Time'}
                value={dateTime}
                onChange={getDateTime}
                renderInput={params => <TextField {...params} />}
              />
            </Stack>
          </Localization>
          <DialogActions sx={{ marginTop: '0.5em' }}>
            <Button type='submit'>Submit</Button>
            <Button onClick={onClose} type='button'>
              Close
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogModal;
