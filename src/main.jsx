import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import View from './components/View';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/view" element={<View formData={JSON.parse(localStorage.getItem('formData')) || {}} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

window.addEventListener('storage', () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/view" element={<View formData={JSON.parse(localStorage.getItem('formData')) || {}} />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
});
