import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Components from './Components/Components';
import Homes from './Pages/Homes/Homes';
import Competences from './Pages/Competences/Competences';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Components />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Homes />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;