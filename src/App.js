import React from 'react';
import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './components/ShopPage/ShopPage';
import Header from './components/Header/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='hats' element={<ShopPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
