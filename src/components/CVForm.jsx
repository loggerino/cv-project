import React, { useState, useEffect } from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

const CVForm = () => {
    const [personalImage, setPersonalImage] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [educations, setEducations] = useState([{ schoolName: '', studyTitle: '', studyStartDate: '', studyEndDate: '' }]);
    const [schoolName, setSchoolName] = useState('');
    const [studyTitle, setStudyTitle] = useState('');
    const [studyStartDate, setStudyStartDate] = useState('');
    const [studyEndDate, setStudyEndDate] = useState('');
    const [jobs, setJobs] = useState([{ companyName: '', positionTitle: '', tasks: '', workFrom: '', workUntil: '' }]);
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [tasks, setTasks] = useState('');
    const [workFrom, setWorkFrom] = useState('');
    const [workUntil, setWorkUntil] = useState('');
    const [isEditing, setIsEditing] = useState(true);

    const addEducation = () => {
        setEducations([...educations, { schoolName: '', studyTitle: '', studyStartDate: '', studyEndDate: '' }]);
    };

    const deleteEducation = (index) => {
        const updatedEducations = [...educations];
        updatedEducations.splice(index, 1);
        setEducations(updatedEducations);
    };

    const addJob = () => {
        setJobs([...jobs, { companyName: '', positionTitle: '', tasks: '', workFrom: '', workUntil: '' }]);
    };

    const deleteJob = (index) => {
        const updatedJobs = [...jobs];
        updatedJobs.splice(index, 1);
        setJobs(updatedJobs);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setPersonalImage(file);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        if (name === 'schoolName' || name === 'studyTitle' || name === 'studyStartDate' || name === 'studyEndDate') {
            const updatedEducations = [...educations];
            updatedEducations[index][name] = value;
            setEducations(updatedEducations);
        } else if (name === 'companyName' || name === 'positionTitle' || name === 'tasks' || name === 'workFrom' || name === 'workUntil') {
            const updatedJobs = [...jobs];
            updatedJobs[index][name] = value;
            setJobs(updatedJobs);
        }
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            case 'title':
                setTitle(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'schoolName':
                setSchoolName(value);
                break;
            case 'studyTitle':
                setStudyTitle(value);
                break;
            case 'studyStartDate':
                setStudyStartDate(value);
                break;
            case 'studyEndDate':
                setStudyEndDate(value);
                break;
            case 'companyName':
                setCompanyName(value);
                break;
            case 'positionTitle':
                setPositionTitle(value);
                break;
            case 'tasks':
                setTasks(value);
                break;
            case 'workFrom':
                setWorkFrom(value);
                break;
            case 'workUntil':
                setWorkUntil(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleDownload = () => {
        const cvContent = `Name: ${name}
Email: ${email}
Phone Number: ${phoneNumber}
School Name: ${schoolName}
Study Title: ${studyTitle}
Study Date: ${studyDate}
Company Name: ${companyName}
Position Title: ${positionTitle}
Tasks: ${tasks}
Work From: ${workFrom}
Work Until: ${workUntil}`;

        const blob = new Blob([cvContent], { type: 'text/plain' });

        const url = URL.createObjectURL(blob);

        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'cv.txt';

        document.body.appendChild(downloadLink);
        downloadLink.click();

        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    };

    useEffect(() => {
        document.title = isEditing ? 'CV Form - Edit Mode' : 'CV Form - Preview Mode';
    }, [isEditing]);

    return (
        <div className="CVWrapper">
            {isEditing ? (
                <div className="CVForm">
                    <div className="title">
                        CV BUILDER
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Personal
                            name={name}
                            email={email}
                            phoneNumber={phoneNumber}
                            title={title}
                            address={address}
                            personalImage={personalImage}
                            handleChange={handleChange}
                            handleImageChange={handleImageChange}
                        />
                        <Education
                            educations={educations}
                            handleChange={handleChange}
                            addEducation={addEducation}
                            deleteEducation={deleteEducation}
                        />
                        <Experience
                            jobs={jobs}
                            addJob={addJob}
                            deleteJob={deleteJob}
                            handleChange={handleChange}
                        />
                        <button type="submit">Generate CV Preview</button>
                    </form>
                </div>
            ) : (
                <div className="CVPreview">
                    <header className='head'>
                        <h1>{name}</h1>
                        <p>{title}</p>
                    </header>
                    <div className="mainPanel">
                        <div className="education">
                            <h3>Education</h3>
                            {educations.map((education, index) => (
                                <div key={index}>
                                    <p>University: {education.schoolName}</p>
                                    <p>Degree: {education.studyTitle}</p>
                                    <p>Study Date: {education.studyStartDate} - {education.studyEndDate}</p>
                                </div>
                            ))}
                        </div>
                        <div className="experience">
                            <h3>Experience</h3>
                            {jobs.map((jobs, index) => (
                                <div key={index}>
                                    <p>Company: {jobs.companyName}</p>
                                    <p>Position: {jobs.positionTitle}</p>
                                    <p>Tasks: {jobs.tasks}</p>
                                    <p>Year: {jobs.workFrom} - {jobs.workUntil}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sidePanel">
                        <img src={URL.createObjectURL(personalImage)} alt="Personal" />
                        <div className="email">
                            <h4>Email</h4>
                            {email}
                        </div>
                        <div className="phone">
                            <h4>Phone</h4>
                            {phoneNumber}
                        </div>
                        <div className="address">
                            <h4>Address</h4>
                            {address}
                        </div>
                    </div>
                    <button onClick={handleEdit}>Edit</button>
                    <button type="button" onClick={handleDownload}>
                        Download CV
                    </button>
                </div>
            )}
        </div>
    );
};

export default CVForm;
