import React, { Component } from 'react';

class CVForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      schoolName: '',
      studyTitle: '',
      studyDate: '',
      companyName: '',
      positionTitle: '',
      tasks: '',
      workFrom: '',
      workUntil: '',
      isEditing: true,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isEditing: false });
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  render() {
    const {
      name,
      email,
      phoneNumber,
      schoolName,
      studyTitle,
      studyDate,
      companyName,
      positionTitle,
      tasks,
      workFrom,
      workUntil,
      isEditing,
    } = this.state;

    return (
      <div>
        <h1>CV Form</h1>

        {isEditing ? (
          <form onSubmit={this.handleSubmit}>
            {/* General Information Section */}
            <div>
              <h2>General Information</h2>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            {/* Educational Experience Section */}
            <div>
              <h2>Educational Experience</h2>
              <label>
                School Name:
                <input
                  type="text"
                  name="schoolName"
                  value={schoolName}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Study Title:
                <input
                  type="text"
                  name="studyTitle"
                  value={studyTitle}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Study Date:
                <input
                  type="text"
                  name="studyDate"
                  value={studyDate}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            {/* Practical Experience Section */}
            <div>
              <h2>Practical Experience</h2>
              <label>
                Company Name:
                <input
                  type="text"
                  name="companyName"
                  value={companyName}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Position Title:
                <input
                  type="text"
                  name="positionTitle"
                  value={positionTitle}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Tasks:
                <input
                  type="text"
                  name="tasks"
                  value={tasks}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Work From:
                <input
                  type="text"
                  name="workFrom"
                  value={workFrom}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Work Until:
                <input
                  type="text"
                  name="workUntil"
                  value={workUntil}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <button type="submit">Generate CV Preview</button>
          </form>
        ) : (
          <div>
            <h2>CV Preview</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>School Name: {schoolName}</p>
            <p>Study Title: {studyTitle}</p>
            <p>Study Date: {studyDate}</p>
            <p>Company Name: {companyName}</p>
            <p>Position Title: {positionTitle}</p>
            <p>Tasks: {tasks}</p>
            <p>Work From: {workFrom}</p>
            <p>Work Until: {workUntil}</p>
            <button onClick={this.handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default CVForm;
