// src/components/Header/Header.js
import React from 'react';
import './Header.css';


const Header = () => (
  <header>
    <div className="logo"> 
        <img src="" alt="" />
    </div>
    <nav className="bg-black">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;