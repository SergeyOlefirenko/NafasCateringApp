import React from "react";
import "./Navbar.scss";
import { useState } from 'react';
import logo from '../../images/logo.png';
export default function Navbar({menuOpen, setMenuOpen}) {
  const [showText, setShowText] = useState(false)
  return (
    <div className={menuOpen ? "navbar active": "navbar"}>
      <div className="wrapper">
          <div onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='nav-logo'>
        <img src={logo} className='logo' alt='logo' />
        </div>
        </div>
      </div>
  );
}
