
import React from 'react';
import './GreenNavbar.css';

const GreenNavbar = () => {
    return (
        <div className="green-navbar">
            <div className="navbar-left">
                <a href="/" className="logo">🏠</a>
                <a href="/" className="properties">Properties</a>
                <a href="/" className="plot-finder">Plot Finder</a>
                <a href="/" className="area-guides">Area Guides</a>
                <a href="/" className="blog">Blog</a>
                <a href="/" className="maps">Maps</a>
                <div className="dropdown">
                    <button className="dropdown-btn">Tools ▼</button>
                </div>
                <div className="dropdown">
                    <button className="dropdown-btn">More ▼</button>
                </div>
            </div>
            <div className="navbar-right">
                <input type="text" placeholder="Property ID" className="search-input" />
                <button className="add-property-btn">+ Add Property</button>
                <a href="/" className="language">اردو</a>
                <a href="/" className="flag">🇵🇰</a>
                <a href="/" className="settings">⚙️</a>
                <a href="/" className="profile">👤</a>
            </div>
        </div>
    );
};

export default GreenNavbar;
