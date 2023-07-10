import React from 'react';

const Education = ({ schoolName, studyTitle, studyDate, handleChange }) => {
  return (
    <div>
      <h2>Educational Experience</h2>
      <label>
        School Name:
        <input
          type="text"
          name="schoolName"
          value={schoolName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Study Title:
        <input
          type="text"
          name="studyTitle"
          value={studyTitle}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Study Date:
        <input
          type="text"
          name="studyDate"
          value={studyDate}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Education;
