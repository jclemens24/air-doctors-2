import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavLinks.module.css';
import Button from '../UI/Button';

const NavLinks = () => {
  const navLinkItems = ['Home', 'About', 'Services', 'Specials'];
  return (
    <ul className={classes.headerList}>
      {navLinkItems.map(link => (
        <li key={link}>
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline' : ''
              };
            }}
            className={classes.headerLink}
            to={link === 'Home' ? '/' : `/${link}`.toLowerCase()}>
            {link}
          </NavLink>
        </li>
      ))}
      <li>
        <Button type='button'>Contact Us</Button>
      </li>
    </ul>
  );
};

export default NavLinks;
