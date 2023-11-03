import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Teste from './pages/Teste';
import Contas from './pages/Contas';
import LoginPage from './pages/LoginPage';
import Header from './assets/Components/Header';
import Task from './assets/Components/Task';
import Form from './assets/Components/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Teste />} />
        <Route path="/contas" element={<Contas />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
