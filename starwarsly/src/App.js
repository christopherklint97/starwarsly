import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';

import NavBar from "./NavBar";
import Routes from "./Routes";

/**
 * App component containing the entire app, including:
 * - BrowserRouter from React Router
 * - Navbar component
 * - Routes from React Router
 * 
 */
function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}


export default App;
