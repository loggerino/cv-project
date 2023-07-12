const Experience = ({ jobs, handleChange, addJob, deleteJob }) => {
  return (
    <div>
      <h2>Practical Experience</h2>
      {jobs.map((job, index) => (
        <div key={index}>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={job.companyName}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <br />
          <label>
            Position Title:
            <input
              type="text"
              name="positionTitle"
              value={job.positionTitle}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <br />
          <label>
            Tasks:
            <input
              type="text"
              name="tasks"
              value={job.tasks}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <br />
          <label>
            Work From:
            <input
              type="text"
              name="workFrom"
              value={job.workFrom}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <br />
          <label>
            Work Until:
            <input
              type="text"
              name="workUntil"
              value={job.workUntil}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <br />
          {jobs.length > 1 && (
            <button type="button" onClick={() => deleteJob(index)}>Delete Job</button>
          )}
        </div>
      ))}
      <br />
      <button type="button" onClick={addJob}>Add Job</button>
    </div>
  );
};

export default Experience;
