import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import App from './App';
import View from './components/View';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
