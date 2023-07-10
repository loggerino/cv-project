import React from 'react';

const Experience = ({ companyName, positionTitle, tasks, workFrom, workUntil, handleChange }) => {
  return (
    <div>
      <h2>Practical Experience</h2>
      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          value={companyName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Position Title:
        <input
          type="text"
          name="positionTitle"
          value={positionTitle}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Tasks:
        <input
          type="text"
          name="tasks"
          value={tasks}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Work From:
        <input
          type="text"
          name="workFrom"
          value={workFrom}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Work Until:
        <input
          type="text"
          name="workUntil"
          value={workUntil}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Experience;
