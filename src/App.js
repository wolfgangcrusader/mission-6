import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RentalSearch from './components/pages/products.js'
import Listing from './components/pages/listing.js'
import MapLocations from './components/Map.js'

import './App.css'


function App() {
  return (
       <Router>
        <Routes>
          <Route path="/" element={<RentalSearch/>}/>
          <Route path="/:id" element={<Listing />} />
          <Route path="/map" element={<MapLocations/>}/>
        </Routes>
      </Router>    
  );
}

export default App;
