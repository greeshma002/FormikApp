import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Form from './components/Form';
import './App.css'; 

const App = () => {
  const [formData, setFormData] = useState(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    return storedFormData || { name: '', email: '' };
  });

  const navigate = useNavigate(); 

  // Function to handle form input changes and update localStorage
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Update localStorage with new form data
    localStorage.setItem('formData', JSON.stringify({ ...formData, [name]: value }));
  };

  // Function to handle button click and navigate to the view page
  const handleViewClick = () => {
    navigate('/view');
  };

  return (
    <div className="app-container">
      <h1>Fill the Form</h1>
      <Form formData={formData} onInputChange={handleInputChange} onViewClick={handleViewClick} />
    </div>
  );
};

export default App;
