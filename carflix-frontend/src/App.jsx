import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/HomePage/Home';
import Header from './components/Header/Header';
import CarMakes from './components/MakesPage/CarMakes';
import CarMakeInfo from './components/MakesPage/CarMakeInfo';
import YearCarInfo from './components/YearPage/YearCarInfo';
import Year from './components/YearPage/Year';
import FuelCarInfo from './components/FuelPage/FuelCarInfo';
import Fuel from './components/FuelPage/Fuel';
import Signup from './components/Favorites/Signup';
import Login from './components/Favorites/Login';
import Favorites from './components/Favorites/Favorites';


function App() {



  return (
    <>
      <Router> 
        <Header/>

        <main> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/makes" element={<CarMakes />} />
            <Route path="/fuel" element={<Fuel />} />
            <Route path="/year" element={<Year />} />
            <Route path="/makes/:makeName" element={<CarMakeInfo/>} />
            <Route path="/year/:yearCar" element={<YearCarInfo/>} />
            <Route path="/fuel/:fuelCar" element={<FuelCarInfo/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favorites" element={<Favorites />} />

          </Routes>
      </main>
      </Router>
    </>
  )
}

export default App
