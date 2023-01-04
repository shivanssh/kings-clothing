import React from 'react';
import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const HatsPage = () => {
    const navigate = useNavigate();
    return (
      <div>
        <button onClick={() => navigate('/')}>Click</button>
        <h1>Hats Page</h1>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='hats' element={<HatsPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
