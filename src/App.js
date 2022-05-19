// importar Browser router, Routes,  Route y link
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Landing from './views/Home/index.js';
import About from './views/About/index.js';
import Products from './views/Products/index.js';
import Services from './views/Services/index.js';
import Contact from './views/Contact/index.js';
import Footer from './views/Footer/footer.js';

import './App.css';

function App() {
 
  return (
    <section>

      <Landing/>
      <About/>
      <Products/>
      <Services/>
      <Contact/>
      <Footer/>
      
    </section>
  
  );
}

export default App;



 