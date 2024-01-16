import { Routes, Route } from 'react-router-dom';

import Components from './Components/Components';
import Home from './Pages/Home/Home';
import Competences from './Pages/Competences/Competences';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer'
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
    < Components/>  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/competences' element={<Competences/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>
    < Footer />
    </div>
  );
}

export default App;
