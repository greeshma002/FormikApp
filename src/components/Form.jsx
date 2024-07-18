import React from 'react';
import './Form.css'; 

const Form = ({ formData, onInputChange }) => {
  return (
    <form className="form-container">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={onInputChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={onInputChange}
      />
    </form>
  );
};

export default Form;
