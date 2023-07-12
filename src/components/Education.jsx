import React from 'react';

const Education = ({ educations, handleChange, addEducation, deleteEducation }) => {
  return (
    <div>
      <h2>Educational Experience</h2>
      {educations.map((education, index) => (
        <div key={index}>
          <label>
            University:
            <input
              type="text"
              name="schoolName"
              value={education.schoolName}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <br />
          <label>
            Degree:
            <input
              type="text"
              name="studyTitle"
              value={education.studyTitle}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <br />
          <label>
            Study Start Date:
            <input
              type="text"
              name="studyStartDate"
              value={education.studyStartDate}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <br />
          <label>
            Study End Date:
            <input
              type="text"
              name="studyEndDate"
              value={education.studyEndDate}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <br />
          {educations.length > 1 && (
            <button type="button" onClick={() => deleteEducation(index)}>
              Delete
            </button>
          )}
          <hr />
        </div>
      ))}
      <button type="button" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
};

export default Education;
