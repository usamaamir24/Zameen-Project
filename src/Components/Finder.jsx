// src/components/Finder.js
import React from 'react';
import './Finder.css';
import pic from './Media/pexels-2.jpg'

export default function Finder( {onBuyClick , onRentClick}) {
  function show(params) {
  const a =document.getElementsByClassName('search-bar2');
  if (a.length > 0) {
    a[0].style.display = "flex"; // Access the first element in the collection
  }
 }

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
     <div className="search-bar1 row">
    <div className="dropdown2 col-3">
      <label>City</label>
      <select>
        <option>Islamabad</option>
        <option>Karachi</option>
        <option>Lahore</option>
      </select>
    </div>
    <div className="location-input col-6">
      <label>Location</label>
      <input type="text" placeholder="Enter Location"  onClick={show} />
    </div>
     <div className='col-3'>
      <button className="find-btn ">Find</button>
      </div>
  </div>
  <div className="search-bar2 row">
    <div className="a col-3">
      <input type="text" placeholder="Enter Home" />
    </div>
    <div className="a col-3">
      <input type="text" placeholder="Enter Home" />
    </div>
    <div className="a col-3">
      <input type="text" placeholder="Enter Home" />
    </div>
    <div className="a col-3">
      <input type="text" placeholder="Enter Home" />
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
