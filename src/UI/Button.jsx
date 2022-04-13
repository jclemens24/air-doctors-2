import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const Button = ({
  href,
  to,
  inverse,
  type,
  onClick,
  disabled,
  style,
  children
}) => {
  if (href) {
    return (
      <a
        className={`${classes.button} ${inverse && classes['button--inverse']}`}
        href={href}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link
        to={to}
        className={`${classes.button} ${
          inverse && classes['button--inverse']
        }`}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${classes.button} ${
        inverse ? classes['button--inverse'] : ''
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}>
      {children}
    </button>
  );
};

export default Button;
