import classes from './HomeAdvisorSection.module.css';
import { StarRounded } from '@mui/icons-material';
import EliteService from '../images/elite-border.png';
import TopRated from '../images/toprated-border.png';

const HomeAdvisorSection = () => {
  return (
    <section className={classes.sectionHomeAdvisor}>
      <h2 className={classes.sectionCustomerServiceHeader}>
        Guaranteed Customer Service💯
      </h2>
      <div className={classes.sectionCustomerServiceRow}>
        <div className={classes.sectionCustomerServiceItem}>
          <a
            href={
              'https://www.homeadvisor.com/rated.AirDoctorsHeatingand.45210468.html'
            }
            target='_blank'
            rel='noreferrer'>
            <img src={EliteService} alt='Home Advisor Elite Service Badge' />
          </a>
          <div className={classes.stars}>
            <StarRounded sx={{ display: 'inline', fill: '#252a34' }} />
            <StarRounded sx={{ display: 'inline', fill: '#252a34' }} />
            <StarRounded sx={{ display: 'inline', fill: '#252a34' }} />
            <StarRounded sx={{ display: 'inline', fill: '#252a34' }} />
            <StarRounded sx={{ display: 'inline', fill: '#252a34' }} />
          </div>
          <p>Elite Service Badge</p>
        </div>
        <div className={classes.sectionCustomerServiceItem}>
          <a
            href='https://www.homeadvisor.com/rated.AirDoctorsHeatingand.45210468.html'
            target='_blank'
            rel='noreferrer'>
            <img src={TopRated} alt='Home Advisor Top Rated Badge' />
          </a>
          <div className={classes.stars}>
            <StarRounded sx={{ display: 'inline', fill: '#252a34' }} />
            <StarRounded sx={{ display: 'inline', fill: '#252a34' }} />
            <StarRounded sx={{ display: 'inline', fill: '#252a34' }} />
            <StarRounded sx={{ display: 'inline', fill: '#252a34' }} />
            <StarRounded sx={{ display: 'inline', fill: '#252a34' }} />
          </div>
          <p>Top Rated Badge</p>
        </div>
      </div>
    </section>
  );
};

export default HomeAdvisorSection;
