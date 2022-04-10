import classes from './SideDrawer.module.css';
import '../index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const SideDrawer = props => {
  const container = document.getElementById('side-drawer');
  const drawer = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames='slide-in-right'
      mountOnEnter
      unmountOnExit>
      <aside onClick={props.onClick} className={classes.sideDrawer}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(drawer, container);
};

export default SideDrawer;
