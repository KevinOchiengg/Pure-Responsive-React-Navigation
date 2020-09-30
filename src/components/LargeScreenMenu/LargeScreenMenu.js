import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import '../LargeScreenMenu/LargeScreenMenu.css';

const LargeScreenMenu = () => {
  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <animated.div className='links__container' style={linkAnimation}>
      <a className='link' href='#'>
        Home
      </a>
      <a className='link' href='#'>
        About
      </a>
      <a className='link' href='#'>
        Services
      </a>
      <a className='link' t href='#'>
        Project
      </a>
      <a className='link' href='#'>
        Contact
      </a>
    </animated.div>
  );
};

export default LargeScreenMenu;
