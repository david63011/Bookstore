/* eslint-disable no-unused-vars */

import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Firstbook from './pages/Firstbook';
import Cats from './pages/Cats';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />

      <div className="App">
        <Routes>
          <Route path="/categories" element={<Cats />} />
          <Route path="/" element={<Firstbook />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
