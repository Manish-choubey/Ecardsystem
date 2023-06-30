import React from 'react';
import "./Navbar.css";
import credLogo from "../../cred1.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <img src={credLogo} alt="CRED" /> {/* Add the CRED logo image */}
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">credit score check</a>
          </li>
          
         
          <li>
            <a href="/">CRED pay</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
