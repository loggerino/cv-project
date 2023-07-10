import React from 'react';

const Personal = ({ name, email, phoneNumber, handleChange }) => {
  return (
    <div>
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
    </div>
  );
};

export default Personal;
