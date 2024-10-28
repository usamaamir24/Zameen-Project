// src/components/GrayNavbar.js
import React from 'react';
import './GrayNavbar.css';

const GrayNavbar = ({ hiddenLinks }) => {
//   const links = [
//     { name: "BUY", href: "/" },
//     { name: "Homes", href: "/" },
//     { name: "Plots", href: "/" },
//     { name: "Commercial", href: "/" },
//     { name: "Rent", href: "/" },
//     { name: "Agents", href: "/" },
//     { name: "New Projects", href: "/" },
//   ];

  return (
    <div className="gray-navbar">
      <div className="logo-section">
        <a href="/" className="home-icon"><i className="fa-solid fa-house"></i></a>
        <div className="logo-text">
            <div className="a">
          <b><a href="/" className="brand-name">Zameen.com</a></b>
          </div>
          <div className="b">
          <p className="tagline">Har Pata, Humain Pata Hai</p>
          </div>
        </div>
      </div>
      <div className="navbar-links">

        {!hiddenLinks.includes("BUY") && <a href="/">BUY</a>}
        {!hiddenLinks.includes("Homes") && <a href="/">Homes</a>}
        {!hiddenLinks.includes("Plots") && <a href="/">Plots</a>}
        {!hiddenLinks.includes("Commercial") && <a href="/">Commercial</a>}
        {!hiddenLinks.includes("Rent") && <a href="/">Rent</a>}
        {!hiddenLinks.includes("Agents") && <a href="/">Agents</a>}
        {!hiddenLinks.includes("New Projects") && <a href="/">New Projects</a>}

      </div>
    </div>
  );
};

export default GrayNavbar;
