import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RentalSearch from './components/pages/products.js'
import {Listing} from './components/pages/listing.js'



function App() {
  return (
       <Router>
        <Routes>
          <Route path="/" element={<RentalSearch/>}/>
          <Route path="/:id" element={<Listing />} />
        </Routes>
      </Router>    
  );
}

export default App;
