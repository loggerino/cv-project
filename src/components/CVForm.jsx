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
    const [description, setDescription] = useState('');
    const [educations, setEducations] = useState([{ schoolName: '', studyTitle: '', studyStartDate: '', studyEndDate: '' }]);
    const [schoolName, setSchoolName] = useState('');
    const [studyTitle, setStudyTitle] = useState('');
    const [studyStartDate, setStudyStartDate] = useState('');
    const [studyEndDate, setStudyEndDate] = useState('');
    const [jobs, setJobs] = useState([{ companyName: '', positionTitle: '', workFrom: '', workUntil: '' }]);
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
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
        setJobs([...jobs, { companyName: '', positionTitle: '', workFrom: '', workUntil: '' }]);
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
        } else if (name === 'companyName' || name === 'positionTitle' || name === 'workFrom' || name === 'workUntil') {
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
            case 'description':
                setDescription(value);
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

    const handlePrint = () => {
        window.print();
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
                            description={description}
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
                        <div className="description">
                            <h3>Description</h3>
                            <hr />
                            <p>{description}</p>
                        </div>
                        <div className="education">
                            <h3>Education</h3>
                            <hr />
                            {educations.map((education, index) => (
                                <div key={index} className="education-item">
                                    <div className="education-date">
                                        <p>{education.studyStartDate} - {education.studyEndDate}</p>
                                    </div>
                                    <div className="education-info">
                                        <p className='schoolName'>{education.schoolName}</p>
                                        <p>Degree: {education.studyTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="experience">
                            <h3>Experience</h3>
                            <hr />
                            {jobs.map((job, index) => (
                                <div key={index} className="experience-item">
                                    <div className="experience-date">
                                        <p>{job.workFrom} - {job.workUntil}</p>
                                    </div>
                                    <div className="experience-info">
                                        <p className='positionTitle'>{job.positionTitle}</p>
                                        <p>{job.companyName}</p>
                                    </div>
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
                    <button onClick={handlePrint}>Save a copy</button>
                </div>
            )}
        </div>
    );
};

export default CVForm;
