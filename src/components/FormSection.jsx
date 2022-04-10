import classes from './FormSection.module.css';
import Button from '../UI/Button';
import CalendarImage from '../images/55.png';
import {
  DiscountRounded,
  EventRounded,
  MonetizationOnRounded,
  PersonRounded,
  EmailRounded,
  PhoneIphoneRounded,
  HomeRounded
} from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../UI/TextInput';
import { useState } from 'react';

const FormSection = () => {
  const [focusForm, setFocusForm] = useState(false);

  const handleClick = () => {
    setFocusForm(prevState => {
      return !prevState;
    });
  };
  return (
    <section className={classes.formSection}>
      <div className={classes.overlap}></div>
      <div className={classes.wrapper}>
        <div className={!focusForm ? classes.content : classes.contentFocused}>
          <h1 className={classes.contentTitle}>schedule a quote today</h1>
          <div className={classes.contentItem}>
            <DiscountRounded sx={{ marginRight: '0.5em' }} />
            <span>We offer military and senior citizen discounts</span>
          </div>
          <div className={classes.contentItem}>
            <EventRounded sx={{ marginRight: '0.5em' }} />
            <span>Flexible scheduling to meet your needs </span>
          </div>
          <div className={classes.contentItem}>
            <MonetizationOnRounded sx={{ marginRight: '0.5em' }} />
            <span>Competitive rates. Finally, affordable doctors.</span>
          </div>
          <Button
            style={{ alignSelf: 'center', marginTop: '2em' }}
            inverse={true}
            onClick={handleClick}>
            Ready to Schedule ?
          </Button>
          <div className={classes.contentImg}>
            <img src={CalendarImage} alt='Calendar' />
          </div>
        </div>
        <div className={!focusForm ? classes.formBox : classes.formBoxFocused}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              zip: ''
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .trim()
                .required('A name is required')
                .matches(/([A-Za-z])\D\w+/g, 'Name must only contain letters'),
              email: Yup.string()
                .email('Invalid email address')
                .required('An email is required'),
              phone: Yup.string(),
              zip: Yup.string()
                .length(5, 'Enter your 5 digit zip code')
                .required('A zip code is required')
            })}
            onSubmit={async values => {
              const sleep = ms => new Promise(r => setTimeout(r, ms));
              await sleep(500);
              alert(JSON.stringify(values, null, 2));
            }}>
            <Form className={classes.quoteForm}>
              <div className={classes.formGroup}>
                <h4 className={classes.formTitle}>Comfort Starts Here</h4>
                <span className={classes.formSpan}>
                  100% Satisfaction guaranteed
                </span>
              </div>
              <div className={classes.formGroup}>
                <PersonRounded
                  sx={{
                    display: 'inline',
                    fontSize: 'medium',
                    marginRight: '0.3em'
                  }}
                />
                <TextInput
                  className={classes.formGroupInput}
                  type={'text'}
                  name='name'
                  id='name'
                  placeholder='Your Name'
                />
              </div>
              <div className={classes.formGroup}>
                <EmailRounded
                  sx={{
                    display: 'inline',
                    fontSize: 'medium',
                    marginRight: '0.3em'
                  }}
                />

                <TextInput
                  className={classes.formGroupInput}
                  type={'email'}
                  name='email'
                  id='email'
                  placeholder='you@example.com'
                />
              </div>
              <div className={classes.formGroup}>
                <PhoneIphoneRounded
                  sx={{
                    display: 'inline',
                    fontSize: 'medium',
                    marginRight: '0.3em'
                  }}
                />
                <TextInput
                  className={classes.formGroupInput}
                  type='text'
                  name='phone'
                  id='phone'
                  placeholder='Phone Number'
                />
              </div>
              <div className={classes.formGroup}>
                <HomeRounded
                  sx={{
                    display: 'inline',
                    fontSize: 'medium',
                    marginRight: '0.3em'
                  }}
                />

                <TextInput
                  className={classes.formGroupInput}
                  type={'text'}
                  name='zip'
                  id='zip'
                  placeholder='Zip Code'
                />
              </div>
              <Button inverse='true' type='submit'>
                Submit
              </Button>
              <Button
                inverse='true'
                style={{
                  marginTop: '0.5rem'
                }}
                type='reset'
                onClick={handleClick}>
                Reset
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
