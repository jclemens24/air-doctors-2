import classes from './MainNavigation.module.css';
import '../index.css';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { MedicalServicesRounded } from '@mui/icons-material';
import TopBar from './TopBar';
import Backdrop from '../UI/Backdrop';
import SideDrawer from '../UI/SideDrawer';
import { Link } from 'react-router-dom';

const MainNavigation = props => {
  const [drawer, setDrawer] = useState(false);

  const handleSideDrawer = () => {
    setDrawer(prevState => {
      return !prevState;
    });
  };

  return (
    <React.Fragment>
      <TopBar />
      <header className={classes.header}>
        <div className={classes.logo}>
          <div className={classes.airDoctorsDiv}>
            <MedicalServicesRounded className={classes.airDoctorsIcon} />
            <h1 className={classes.title}>
              <Link className={classes.index} to={'/'}>
                <span>Air Doctors</span>
                <span className={classes.heatingAndCooling}>
                  Heating &amp; Cooling
                </span>
              </Link>
            </h1>
          </div>
        </div>
        <nav className={classes.nav}>
          <NavLinks onClick={props.onClick} />
          <button onClick={handleSideDrawer} className={classes.drawerButton}>
            <span />
            <span />
            <span />
          </button>
        </nav>
        <React.Fragment>
          {drawer && <Backdrop onClick={handleSideDrawer} />}
          {drawer && (
            <SideDrawer onClick={handleSideDrawer} show={drawer}>
              <nav className={classes.navDrawer}>
                <NavLinks onClick={props.onClick} />
              </nav>
            </SideDrawer>
          )}
        </React.Fragment>
      </header>
    </React.Fragment>
  );
};

export default MainNavigation;
