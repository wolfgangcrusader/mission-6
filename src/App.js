import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./landingpage";
import {Listing} from './components/pages/listing.js'



function App() {
  return (
       <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/:id" element={<Listing />} />
        </Routes>
      </Router>    
  );
}

export default App;
