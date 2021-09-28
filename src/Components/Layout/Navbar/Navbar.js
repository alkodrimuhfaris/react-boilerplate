import React from 'react';
import Contact from './Contact';
import Menu from './Menu';

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="container navbar-cont">
        <img className="logo" src="/assets/logo/admin_avatar.svg" alt="logo" />
        <Menu />
        <Contact />
      </div>
    </div>
  );
}
