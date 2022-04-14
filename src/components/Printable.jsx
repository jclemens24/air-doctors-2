import { forwardRef } from 'react';
import classes from './Printable.module.css';
import serviceAd from '../images/service-ad.jpg';

const Printable = forwardRef((_, ref) => {
  return (
    <div className={classes.rightBox}>
      <img
        ref={ref}
        className={classes.rightBoxAd}
        src={serviceAd}
        alt='Service Ad'
      />
    </div>
  );
});

export default Printable;
