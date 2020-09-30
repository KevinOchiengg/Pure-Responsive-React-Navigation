import React from 'react';
import { useSpring, animated } from 'react-spring';
import './MobileMenu.css';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <animated.div
        className='mobile__links__container'
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <div className='mobile__links-content'>
          <a className='link' href='#' onClick={props.handleNavbar}>
            Home
          </a>
          <a className='link' href='#' onClick={props.handleNavbar}>
            About
          </a>
          <a className='link' href='#' onClick={props.handleNavbar}>
            Services
          </a>
          <a className='link' href='#' onClick={props.handleNavbar}>
            Project
          </a>
          <a className='link' href='#' onClick={props.handleNavbar}>
            Contact
          </a>
        </div>
      </animated.div>
    );
  }
  return null;
};

export default CollapseMenu;
