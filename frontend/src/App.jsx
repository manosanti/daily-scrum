import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Teste from './pages/Teste';
import Contas from './pages/Contas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Teste />} />
        <Route path="/contas" element={<Contas />} />
      </Routes>
    </Router>
  );
}

export default App;
