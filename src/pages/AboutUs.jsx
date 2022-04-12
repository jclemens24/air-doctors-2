import classes from './AboutUs.module.css';
import React, { useState } from 'react';
import MainNavigation from '../components/MainNavigation';
import Card from '../components/Card';
import {
  EmojiEventsRounded,
  AccessTimeRounded,
  CheckBoxRounded,
  SentimentVerySatisfiedRounded
} from '@mui/icons-material';
import Footer from '../components/Footer';
import FixingUnit from '../images/mikefixingunit.jpg';
import VanImg from '../images/air-doctors-van-and-truck.jpg';
import UnitImg from '../images/goodmanpic.jpg';
import DialogModal from '../UI/DialogModal';

const AboutUs = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <DialogModal open={open} onClose={handleClose} />
      <MainNavigation onClick={handleClick} />
      <main className={classes.main}>
        <div className={classes.aboutUsContainer}>
          <div className={classes.leftBox}></div>
          <div className={classes.rightBox}>
            <h1>Our Mission</h1>
            <p>
              We thank you for your interest in our company. At Air Doctors
              Heating &amp; Cooling, we strive to serve our customers with
              honesty, integrity and commitment so that you can focus on the
              things that matter most. Whether you are trying to stay cool
              during the "Dog Days of Summer", or needing to stay warm during
              the cool months of Winter, you can be rest assured that Air
              Doctors has you covered, offering a wide variety of services
              ranging from small residential repairs to large commercial
              property installation. We are dedicated to our goal of building a
              better community, a better Wilmington, and a better future.
            </p>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.title}>
            <h1>Our Customers Can Always Expect</h1>
          </div>
          <div className={classes.containerCards}>
            <div className={classes.cardItem}>
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <EmojiEventsRounded
                  sx={{ height: '3em', width: '3em', fill: '#ffd43b' }}
                />
                <p>Honesty</p>
              </Card>
              <div className={classes.cardSummary}>
                <p>
                  Our reputation is important to us. For 22 years, honesty has
                  been our policy. Today, nothing has changed. We vow to give
                  every customer truth and transparency so you can be sure
                  you're getting the best bang for you buck.{' '}
                </p>
              </div>
            </div>
            <div className={classes.cardItem}>
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <CheckBoxRounded
                  sx={{ height: '3em', width: '3em', fill: '#ff922b' }}
                />
                <p>Quality</p>
              </Card>
              <div className={classes.cardSummary}>
                <p>
                  Our highly trained and attentive staff is here to provide you
                  with professionalism, quality equipment, quality service,
                  competitive pricing and overall service that is better than
                  the rest!{' '}
                </p>
              </div>
            </div>
            <div className={classes.cardItem}>
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <AccessTimeRounded
                  sx={{ height: '3em', width: '3em', fill: '#f06595' }}
                />
                <p>Timeliness</p>
              </Card>
              <div className={classes.cardSummary}>
                <p>
                  Have a busy schedule? We get it. The Air Doctors should have
                  been gymnists, because we're flexible. We work with you to set
                  an appointment time that's convenient for you. Need reminders?
                  We got you covered.
                </p>
              </div>
            </div>
            <div className={classes.cardItem}>
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <SentimentVerySatisfiedRounded
                  sx={{ height: '3em', width: '3em', fill: '#63e6be' }}
                />
                <p>Satisfaction</p>
              </Card>
              <div className={classes.cardSummary}>
                <p>
                  Above all else, we want to do the right thing for you. We are
                  in the service business and that is what you will receive when
                  you hire Air Doctors Heating &amp; Cooling. We vow to go the
                  extra mile so that you're HVAC system is all that it was
                  designed to be and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.teamContainer}>
          <div className={classes.meetTheTeam}>
            <img
              className={`${classes.secondImg} ${classes.teamImg}`}
              src={FixingUnit}
              alt='Mike the owner fixing an HVAC unit'
            />
            <img
              className={`${classes.firstImg} ${classes.bottomImg}`}
              src={VanImg}
              alt='Air Doctors Van'
            />
            <img
              className={`${classes.thirdImg} ${classes.teamImg}`}
              src={UnitImg}
              alt='Goodman HVAC unit'
            />
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
