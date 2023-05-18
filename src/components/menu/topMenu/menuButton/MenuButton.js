import React from 'react';
import './menu-button.css';
import { useDispatch, useSelector } from 'react-redux';
import { menuActions } from './../../../../store/menu';
const MenuButton = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  const toggleMenu = () => {
    dispatch(menuActions.toggleMenu());
  };

  return (
    <button onClick={toggleMenu} className="menu-button">
      {isMenuOpen ? (
        <i className="fa-solid fa-xmark"></i>
      ) : (
        <i className="fa-solid fa-bars"></i>
      )}
    </button>
  );
};

export default MenuButton;
