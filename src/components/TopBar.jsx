import classes from './TopBar.module.css';
import { LocationOn, Phone } from '@mui/icons-material';

const TopBar = () => {
  return (
    <div className={classes.topbar}>
      <div className={classes.location}>
        <LocationOn sx={{ fill: '#252a34', marginRight: '0.3rem' }} />
        <address>420 Tibbys Drive Wilmington, NC 28411</address>
      </div>
      <div className={classes.phone}>
        <span>24/7 Emergency Service&nbsp;</span>
        <Phone sx={{ fill: '#252a34', marginRight: '0.3rem' }} />
        <a href='tel:19107696665'>910-769-6665</a>
      </div>
    </div>
  );
};

export default TopBar;
