import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Teste from './pages/Teste';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Teste />} />
      </Routes>
    </Router>
  );
}

export default App;
