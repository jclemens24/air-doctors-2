import { Fragment } from 'react';
import classes from './Services.module.css';
import MainNavigation from '../components/MainNavigation';

const Services = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}></main>
    </Fragment>
  );
};

export default Services;
