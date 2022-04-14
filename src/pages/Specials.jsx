import React, { useState, useEffect } from 'react';
import classes from './Specials.module.css';
import MainNavigation from '../components/MainNavigation';
import SpecialsCard from '../components/SpecialsCard';
import DialogModal from '../UI/DialogModal';
import Footer from '../components/Footer';

const Specials = () => {
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
    document.title = 'Air Doctors Heating & Cooling | Specials';
  }, []);

  return (
    <React.Fragment>
      <DialogModal open={open} onClose={handleClose} />
      <MainNavigation onClick={handleClick} />
      <main className={classes.main}>
        <div className={classes.container}>
          <h1>Specials</h1>
          <h5>
            Deals <span className={classes.solution}>Just For You</span>
          </h5>
          <SpecialsCard />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Specials;
