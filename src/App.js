import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Firstbook from './pages/Firstbook';
import Cats from './pages/Cats';
import { Provider } from 'react-redux';
import store from './component/redux/configureStore';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/categories" element={<Cats />} />
            <Route path="/" element={<Firstbook />} />
          </Routes>
        </div>
      </Provider>
    </>
  );
}

export default App;
