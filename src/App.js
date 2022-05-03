// importar Browser router, Routes,  Route y link
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Landing from './views/Home/index.js';
import About from './views/About/index.js';
import Products from './views/Products/index.js';
import Services from './views/Services/index.js';
import Contact from './views/Contact/index.js';


import logo from './logo.svg';
import './App.css';


function App() {
 
  return (
    
    <BrowserRouter>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse d flex justify-content-end" id="navbarNav">
            <div className="navbar-nav">               
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/About">About</Link>
              <Link className="nav-link" to="/Products">Products</Link>
              <Link className="nav-link" to="/Services">Services</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </div>
          </div>
      </div>
    </nav>
    <div className="App">
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/services" element={<Services/>} />     
            <Route path="/contact" element={<Contact/>} />    
        </Routes>
    </div> 
    </BrowserRouter>      
  );
}

export default App;



 