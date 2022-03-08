// import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
// import Biodata from './Pages/Biodata';
import Home from './Pages/Home';
 
const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/biodata' element={<Biodata/>}/> */}
          <Route path='*' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;