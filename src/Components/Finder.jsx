// src/components/Finder.js
import React from 'react';
import './Finder.css';
import pic from './Media/pexels-2.jpg'

export default function Finder( {onBuyClick , onRentClick}) {
  return (
    <div className="finder" 
    style={{ '--bg-image': `url(${pic})` }} 
    >
      <div className="background">
        <div className="overlay">
          <h1>Search properties for sale in Pakistan</h1>
          <div className="buttons">
            <button className="option-btn" onClick={onBuyClick} >Buy</button>
            <button className="option-btn" onClick={onRentClick}>Rent</button>
            <button className="option-btn">Projects</button>
          </div>
          <div className="search-bar">
            <div className="dropdown2">
              <label>City</label>
              <select>
                <option>Islamabad</option>
                <option>Karachi</option>
                <option>Lahore</option>
              </select>
            </div>
            <div className="location-input">
              <label>Location</label>
              <input type="text" placeholder="Enter Location" />
            </div>
            <button className="find-btn">Find</button>
          </div>
        </div>
      </div>
    </div>
  );
}
