import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import Firstbook from './pages/Firstbook.js';
import Cats from './pages/Cats';
import { Provider } from 'react-redux';
import store from './redux/Books/ConfigureStore';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/categories" element={<Cats />} />
          <Route path="/" element={<Firstbook />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
