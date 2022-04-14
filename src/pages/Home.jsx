import React, { useRef, useEffect } from 'react';
import classes from './Home.module.css';
import MainNavigation from '../components/MainNavigation';
import Map from '../components/Map';
import AnimatedHeader from '../UI/AnimatedHeader';
import {
  HomeRepairServiceRounded,
  AccessTimeFilledRounded,
  Inventory2Rounded
} from '@mui/icons-material';
import ServiceSection from '../components/ServiceSection';
import HomeAdvisorSection from '../components/HomeAdvisorSection';
import FormSection from '../components/FormSection';
import Footer from '../components/Footer';

const Home = () => {
  const scrollRef = useRef();

  const handleScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = 'Air Doctors Heating & Cooling | Home';
  }, []);
  return (
    <React.Fragment>
      <MainNavigation onClick={handleScroll} />
      <main className={classes.main}>
        <div className={classes.overlay}></div>
        <section className={classes.sectionHero}>
          <div className={classes.leftBox}>
            <div className={classes.topleftBox}>
              <AnimatedHeader />
              <p>The Wilmington Community.</p>
              <p>For 22+ years.</p>
            </div>
            <div className={classes.bottomleftBox}>
              <h2>We Get The Job Done Right.</h2>
              <h3>
                <span>Call an Air Doctor You Can Trust</span>
              </h3>
              <ul className={classes.leftBoxList}>
                <li>
                  <div className={classes.leftBoxListAlign}>
                    <HomeRepairServiceRounded
                      sx={{ fill: '#FF2E63', marginRight: '0.2em' }}
                    />
                    <p>
                      Prompt customer service, highly trained professional
                      service techs on call at all times
                    </p>
                  </div>
                </li>
                <li>
                  <div className={classes.leftBoxListAlign}>
                    <AccessTimeFilledRounded
                      sx={{ fill: '#FF2E63', marginRight: '0.2em' }}
                    />
                    <p>
                      24 hour emergency service on all commercial and
                      residential makes and models
                    </p>
                  </div>
                </li>
                <li>
                  <div className={classes.leftBoxListAlign}>
                    <Inventory2Rounded
                      sx={{ fill: '#FF2E63', marginRight: '0.2em' }}
                    />
                    <p>
                      We service and install all major brands of HVAC equipment
                      and stock a full line of parts
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.rightBox}>
            <Map />
          </div>
        </section>
        <ServiceSection />
        <HomeAdvisorSection />
        <FormSection ref={scrollRef} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
