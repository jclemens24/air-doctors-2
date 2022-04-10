import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <p>
          &copy; 2022 Air Doctors Heating &amp; Cooling. All Rights Reserved.
        </p>
      </div>
      <div className={classes.footerLinks}>
        <p>Follow us</p>
        <a
          href='https://www.facebook.com/AirDoctors/'
          target='_blank'
          rel='noreferrer'
          className={classes.footerLink}>
          {/* <img src={} width='50px' alt='Follow us on Facebook' /> */}
        </a>
      </div>
      <div className={classes.attribution}>
        <i>Designed &amp; developed by: Jordan M. Clemens</i>
      </div>
    </div>
  );
};

export default Footer;
