import React, { useEffect, useState } from 'react';
import '../assets/View.css';

const View = () => {
  // state to manage formData
  const [formData, setFormData] = useState(() => {
    // initialize formData from localStorage if available or default values
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    return storedFormData || { name: '', email: '' };
  });

  // Effect to update formData from localStorage on component mount
  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }

    // Function to handle storage events
    const handleStorageChange = (event) => {
      if (event.key === 'formData') {
        const newFormData = JSON.parse(event.newValue);
        setFormData(newFormData);
      }
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="view-container">
      <h2>Here is Your Form Data</h2>
      <div className="data-container">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>
    </div>
  );
};

export default View;
