import React from 'react';
import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './components/ShopPage/ShopPage';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='hats' element={<ShopPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
