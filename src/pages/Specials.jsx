import React from 'react';
import classes from './Specials.module.css';
import MainNavigation from '../components/MainNavigation';

const Specials = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <div className={classes.container}>
          <h1>Specials</h1>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Specials;
