import React from 'react';
import classes from './Card.module.css';

const Card = props => {
  return (
    <div
      className={classes.card}
      style={props.style}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}>
      {props.children}
    </div>
  );
};

export default Card;
