import { Fragment, useEffect, useState } from 'react';
import classes from './Services.module.css';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { ArrowCircleRightRounded } from '@mui/icons-material';
import { Divider } from '@mui/material';
import DialogModal from '../UI/DialogModal';

const Services = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(prevState => {
      return !prevState;
    });
  };

  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    document.title = 'Air Doctors Heating & Cooling | Services';
  }, []);

  return (
    <Fragment>
      <DialogModal open={open} onClose={handleClose} />
      <MainNavigation onClick={handleClick} />
      <main className={classes.main}>
        <div className={classes.headerBar}>
          <div className={classes.overlay}></div>
          <div className={classes.headerText}>
            <h1 className={classes.services}>Services</h1>
          </div>
        </div>
        <section className={classes.residential}>
          <h1>residential hvac services</h1>
          <div className={classes.box}>
            <div className={classes.leftBox}>
              <p>
                Air Doctors Heating & Cooling has been proudly serving homes in
                New Hanover County and surrounding areas since 2011. We are a
                family-owned business, here to provide you with exceptional
                heating and air conditioning services.
              </p>
            </div>
            <div className={classes.rightBox}>
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                <div className={classes.cardHeader}>
                  <h3>Residential Services Include:</h3>
                </div>
                <div className={classes.cardContent}>
                  <ul className={classes.cardList}>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>AC Repair/Installation</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{
                          marginRight: '0.2em',
                          fill: '#08d9d6'
                        }}
                      />
                      <span>Boiler Services</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>Electric Furnace Repair/Installation</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>Gas Furnace Repair/Installation</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>Heater Repair/Installation</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>Thermostat Repair</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>Emergency Services</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <Divider sx={{ backgroundColor: '#eaeaea' }} />
        <section className={classes.commercial}>
          <h1>commercial hvac services</h1>
          <div className={classes.box}>
            <div className={classes.rightBox}>
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                <div className={classes.cardHeader}>
                  <h3>Commercial Services Include:</h3>
                </div>
                <div className={classes.cardContent}>
                  <ul className={classes.cardList}>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>Full System Repair/Installation</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{
                          marginRight: '0.2em',
                          fill: '#08d9d6'
                        }}
                      />
                      <span>AC Coolant & Recharge</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>Electric Furnace Repair/Installation</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>AC Replacement</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>HVAC Troubleshooting</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>Ductwork and Cleaning</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>Emergency Services</span>
                    </li>
                    <li className={classes.cardItem}>
                      <ArrowCircleRightRounded
                        sx={{ marginRight: '0.2em', fill: '#08d9d6' }}
                      />
                      <span>And More</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
            <div className={classes.leftBox}>
              <p>
                We carry a wide array of commercial HVAC parts and equipment
                such as filters, water heaters, and more. Our state-of-the-art
                commercial solutions are highly affordable and we base our
                reputations by only using the most trusted brands. Our trained
                techs are dedicated to providing you with the best solutions.
                Give us a call today!
              </p>
            </div>
          </div>
        </section>
        <section className={classes.emergency}></section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Services;
