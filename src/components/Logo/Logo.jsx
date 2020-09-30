import React from 'react';
import logo from '../../images/logos/ko-logo.png';
import './Logo.css';

const Brand = () => {
  return (
    <div className='logo'>
      <a href='https://ko-technologies.netlify.app'>
        <img src={logo} alt='K&O Technologies' />
      </a>
    </div>
  );
};

export default Brand;
