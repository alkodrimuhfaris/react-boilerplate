import React from 'react';
import Menu from './Menu';

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="container navbar-cont">
        <img className="logo" src="/assets/logo/Logo.svg" alt="logo" />
        <Menu />
      </div>
    </div>
  );
}
