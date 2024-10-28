import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GreenNavbar from './Components/GreenNavbar';
import GrayNavbar from './Components/GrayNavbar';
import Finder from './Components/Finder';

function App() {
  const [hiddenLinks, setHiddenLinks] = useState([]);
  const hideLinksForBuy = () => {
    setHiddenLinks(["Homes", "Plots", "Commercial"]); // List the links to hide
  };
  const showAllLinks = () => {
    setHiddenLinks([]); // Clear hidden links to show everything
  };

  
  return (
    <div className="App">
   <GreenNavbar/>
   <GrayNavbar   hiddenLinks={hiddenLinks}/>
   <Finder  onBuyClick={hideLinksForBuy} onRentClick={showAllLinks}/>
    </div>
  );
}

export default App;
