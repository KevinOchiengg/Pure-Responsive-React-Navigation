import React from 'react';
import './Burger.css';

const Burger = ({ handleNavbar, navbarState }) => {
  return (
    <div className='burger-wrapper' onClick={handleNavbar}>
      <div className={navbarState ? 'open' : ''}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </div>
  );
};

export default Burger;
