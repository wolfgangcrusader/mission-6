import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./products";
import './App.css';

function App() {
  return (
       <Router>
        <Routes>
          <Route exact path="/" element={<Products/>}/>
        </Routes>
      </Router>    
  );
}

export default App;
