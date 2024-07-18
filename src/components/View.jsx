import React, { useEffect, useState } from 'react';
import '../assets/View.css';

const View = () => {

    //state to manage formdata
  const [formData, setFormData] = useState(() => {
    // initialize formdata from localStorage if available or default values
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    return storedFormData || { name: '', email: '' };
  });


  // Effect to update formdata from localStorage on component mount
  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }
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
