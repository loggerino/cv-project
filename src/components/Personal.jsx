import React from 'react';

const Personal = ({ name, email, phoneNumber, personalImage, handleChange, handleImageChange }) => {
  return (
    <div className='personal'>
      <h2>General Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Personal Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      {personalImage && (
        <div className='image-preview'>
          <h4>Selected Image:</h4>
          <img src={URL.createObjectURL(personalImage)} alt="Personal" />
        </div>
      )}
    </div>
  );
};

export default Personal;
