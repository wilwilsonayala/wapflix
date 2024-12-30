import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewVideo />} />
    </Routes>
  );
};

export default App;
