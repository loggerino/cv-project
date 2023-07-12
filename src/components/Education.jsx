import React from 'react';

const Education = ({ schoolName, studyTitle, studyStartDate, studyEndDate, handleChange }) => {
  return (
    <div>
      <h2>Educational Experience</h2>
      <label>
        University:
        <input
          type="text"
          name="schoolName"
          value={schoolName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Degree:
        <input
          type="text"
          name="studyTitle"
          value={studyTitle}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Study Start Date:
        <input
          type="text"
          name="studyStartDate"
          value={studyStartDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Study End Date:
        <input
          type="text"
          name="studyEndDate"
          value={studyEndDate}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Education;
