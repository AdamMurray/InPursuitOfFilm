import React from 'react';
import './Nav.css';

// Needed to get round build issue where /media is put in a folder
// based on root, e.g. https://adammurray.github.io/
const logoFilePath = `${window.location.href}/film-icon.png`;

const Nav = () =>
  <nav className="ipof__nav">
    <img src={logoFilePath} alt="logo" className="ipof__nav__logo" />
    <h1 className="ipof__nav__title">
      In Pursuit of Film
    </h1>
  </nav>

export default Nav;
