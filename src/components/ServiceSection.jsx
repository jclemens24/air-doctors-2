import React from 'react';
import Card from './Card';
import classes from './ServiceSection.module.css';
import {
  ThermostatRounded,
  HandymanRounded,
  HvacRounded,
  EngineeringRounded,
  ArticleRounded,
  AirRounded
} from '@mui/icons-material';

const ServiceSection = () => {
  return (
    <section className={classes.sectionService}>
      <h2 className={classes.sectionServiceHeader}>
        Repair &amp; Installation
      </h2>
      <div className={classes.serviceContainer}>
        <div className={classes.serviceContainerItem}>
          <Card
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <ThermostatRounded
              sx={{
                height: '3em',
                width: '3em',
                marginBottom: '0.5em',
                fill: '#08D9D6'
              }}
            />
            <p>Temperature</p>
            <p>Control</p>
          </Card>
        </div>
        <div className={classes.serviceContainerItem}>
          <Card
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <HandymanRounded
              sx={{
                height: '3em',
                width: '3em',
                marginBottom: '0.5em',
                fill: '#f76707'
              }}
            />
            <p>Inspection</p>
            <span>&amp;</span>
            <p>Repairs</p>
          </Card>
        </div>
        <div className={classes.serviceContainerItem}>
          <Card
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <HvacRounded
              sx={{
                height: '3em',
                width: '3em',
                marginBottom: '0.5em',
                fill: '#666a71'
              }}
            />
            <p>Ventilation</p>
            <p>Systems</p>
          </Card>
        </div>
      </div>
      <div className={classes.serviceContainer}>
        <div className={classes.serviceContainerItem}>
          <Card
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <ArticleRounded
              sx={{
                height: '3em',
                width: '3em',
                marginBottom: '0.5em',
                fill: '#3b5bdb'
              }}
            />
            <p>Service</p>
            <p>Contracts</p>
          </Card>
        </div>
        <div className={classes.serviceContainerItem}>
          <Card
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <AirRounded
              sx={{
                height: '3em',
                width: '3em',
                marginBottom: '0.5em',
                fill: '#20c997'
              }}
            />
            <p>Air Volume</p>
            <p>Control</p>
          </Card>
        </div>
        <div className={classes.serviceContainerItem}>
          <Card
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <EngineeringRounded
              sx={{
                height: '3em',
                width: '3em',
                marginBottom: '0.5em',
                fill: '#FF2E63'
              }}
            />
            <p>Expert</p>
            <p>Installation</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
