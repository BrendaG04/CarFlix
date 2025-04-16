import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState} from 'react';

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
        <nav>
        <div className='nav-container'>
                  <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/makes">Car Makes</Link></li>
                      <li><Link to="/fuel">Fuel Type</Link></li>
                      <li><Link to="/year">Year</Link></li>
                      <li><Link to="/favorites">Favorites</Link></li>
                  </ul>
                  <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
        </div>
        </nav>
        </>
    );
}

export default Header;