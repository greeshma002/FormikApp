import React, { useState } from 'react';
import Form from './components/Form';
import View from './components/View';
import './App.css'; 

const App = () => {
  const [formData, setFormData] = useState(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    return storedFormData || { name: '', email: '' };
  });

  // function to handle form input changes and update localStorage
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // update localStorage with new form data
    localStorage.setItem('formData', JSON.stringify({ ...formData, [name]: value }));
  };

  return (
    <div className="app-container">
      <h1>Fill the Form</h1>
     
        <Form formData={formData} onInputChange={handleInputChange} />
      
    </div>
  );
};

export default App;
