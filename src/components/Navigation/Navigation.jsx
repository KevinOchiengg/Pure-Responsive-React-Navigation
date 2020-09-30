import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../Navigation/Navigation.css';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';
import MobileMenu from '../MobileMenu/MobileMenu';
import LargeScreenMenu from '../LargeScreenMenu/LargeScreenMenu';

const Navigation = () => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const [navbarOpen, setIsnavbarOpen] = useState(false);

  const mobileMenuToggle = () => {
    setIsnavbarOpen(!navbarOpen);
  };
  return (
    <animated.nav className='navbar__container' style={barAnimation}>
      <div className='navbar__content'>
        <Logo />
        <LargeScreenMenu />
        <Burger navbarState={navbarOpen} handleNavbar={mobileMenuToggle} />
      </div>
      <MobileMenu navbarState={navbarOpen} handleNavbar={mobileMenuToggle} />
    </animated.nav>
  );
};

export default Navigation;
