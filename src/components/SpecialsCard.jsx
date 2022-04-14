import React, { useRef } from 'react';
import classes from './SpecialsCard.module.css';
import Card from './Card';
import {
  CheckCircleOutlineRounded,
  BuildCircleRounded,
  RecommendRounded,
  AdUnitsRounded,
  LocalOfferRounded
} from '@mui/icons-material';
import Button from '../UI/Button';
import { useReactToPrint } from 'react-to-print';
import Printable from './Printable';

const SpecialsCard = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  const tuneUpContent = [
    { id: 1, content: 'Check and adjust blower motor and belts' },
    { id: 2, content: 'Thermostat testing and settings review' },
    { id: 3, content: 'Air Filter Change' },
    { id: 4, content: 'Lubrication for all moving parts' },
    { id: 5, content: 'Inspect Ductwork' },
    { id: 6, content: 'Electrical connection checks' },
    { id: 7, content: 'Clean condensate drain' },
    { id: 8, content: 'Coil cleaning' }
  ];
  return (
    <section className={classes.specialInfo}>
      <Card
        style={{
          border: '1px dashed #ff2e63',
          background: 'transparent',
          color: '#eaeaea',
          margin: '3em 0'
        }}>
        <div className={classes.cardTitle}>
          <h2>Full Service Tune-Up</h2>
          <span>$79.00</span>
        </div>
        <div className={classes.box}>
          <div className={classes.leftBox}>
            <h3>What Does A Tune-Up Consist Of?</h3>
            <BuildCircleRounded
              sx={{
                height: '4em',
                width: '4em',
                fontSize: '3em',
                alignSelf: 'center',
                fill: '#ff2e63',
                stroke: '#08d9d6'
              }}
              role='img'
            />
          </div>
          <div className={classes.rightBox}>
            <ul className={classes.list}>
              {tuneUpContent.map(item => (
                <li key={item.id} className={classes.listItem}>
                  <CheckCircleOutlineRounded
                    sx={{ marginRight: '0.3em', fill: '#08d9d6' }}
                    role='img'
                  />
                  <span>{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.cardFooter}>
          <h3>How often should you service your HVAC ?</h3>
          <div className={classes.recommended}>
            <RecommendRounded
              sx={{
                marginRight: '0.3em',
                fill: '#ff2e63',
                stroke: '#08d9d6'
              }}
              role='img'
            />
            <p>
              We recommend to get your HVAC unit tuned up at least once a year
              regardless of the make and model you have. Our best recommendation
              is to tune up your air conditioning unit in the spring and your
              heating unit in the fall.
            </p>
          </div>
        </div>
      </Card>
      <Card
        style={{
          border: '1px dashed #ff2e63',
          background: 'transparent',
          color: '#eaeaea',
          margin: '3em 0'
        }}>
        <div className={classes.cardTitle}>
          <h2>Any Service Call</h2>
          <span>$20.00 off</span>
        </div>
        <div className={classes.box}>
          <div className={classes.leftBox}>
            <h3>Just Mention This Ad to receive your discount</h3>
            <p>Or print this ad out</p>
            <AdUnitsRounded
              role='img'
              sx={{
                height: '4em',
                width: '4em',
                fontSize: '3em',
                alignSelf: 'center',
                fill: '#ff2e63',
                stroke: '#08d9d6'
              }}
            />
            <Button onClick={handlePrint}>Print Coupon</Button>
            <span>Expires: 05/30/2022</span>
          </div>
          <Printable ref={componentRef} />
        </div>
      </Card>
      <Card
        style={{
          border: '1px dashed #ff2e63',
          background: 'transparent',
          color: '#eaeaea',
          margin: '3em 0'
        }}>
        <div className={classes.cardTitle}>
          <h2>Military & Senior Citizen Discount</h2>
          <span>10% Off</span>
        </div>
        <div className={classes.box}>
          <div className={classes.leftBox}>
            <h3>Proof Required Upon Contract Agreement</h3>
            <LocalOfferRounded
              role='img'
              sx={{
                height: '4em',
                width: '4em',
                fontSize: '3em',
                alignSelf: 'center',
                fill: '#ff2e63',
                stroke: '#08d9d6'
              }}
            />
            <span>Expires: 12/31/2022</span>
          </div>
          <div className={classes.rightBox}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <CheckCircleOutlineRounded
                  sx={{ marginRight: '0.3em', fill: '#08d9d6' }}
                  role='img'
                />
                <span>DD-214</span>
              </li>
              <li className={classes.listItem}>
                <CheckCircleOutlineRounded
                  sx={{ marginRight: '0.3em', fill: '#08d9d6' }}
                  role='img'
                />
                <span>Military/Veterans ID</span>
              </li>
              <li className={classes.listItem}>
                <CheckCircleOutlineRounded
                  sx={{ marginRight: '0.3em', fill: '#08d9d6' }}
                  role='img'
                />
                <span>DFAS/SCRA Check</span>
              </li>
              <li className={classes.listItem}>
                <CheckCircleOutlineRounded
                  sx={{ marginRight: '0.3em', fill: '#08d9d6' }}
                  role='img'
                />
                <span>Valid Driver License or Government-issued ID</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default SpecialsCard;
