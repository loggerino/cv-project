import React from 'react';

const Personal = ({ name, email, phoneNumber, title, address, description, personalImage, handleChange, handleImageChange }) => {
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
          required
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
          required
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
          required
        />
      </label>
      <br />
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Personal Image:
        <input type="file" accept="image/*" onChange={handleImageChange} required/>
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
