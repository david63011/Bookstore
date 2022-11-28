import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/books/ConfigureStore';
import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import Firstbook from './pages/Firstbook';
import Cats from './pages/Cats';

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
