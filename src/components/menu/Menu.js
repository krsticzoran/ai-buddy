import React from 'react';
import './menu.css';

import TopMenu from './topMenu/TopMenu';
import BottomMenu from './bottomMenu/BottomMenu';
import MiddleMenu from './middleMenu/MiddleMenu';

const Menu = () => {
  return (
    <div className="container-style">
      <TopMenu />
      <MiddleMenu />
      <BottomMenu />
    </div>
  );
};

export default Menu;
