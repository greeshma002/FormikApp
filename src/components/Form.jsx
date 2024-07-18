import React from 'react';
import '../assets/Form.css';

const Form = ({ formData, onInputChange, onViewClick }) => {
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
      
      <button type="button" className="view-button" onClick={onViewClick}>
        View Form Data
      </button>
    </form>
  );
};

export default Form;
