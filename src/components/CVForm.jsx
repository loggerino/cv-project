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
    const [schoolName, setSchoolName] = useState('');
    const [studyTitle, setStudyTitle] = useState('');
    const [studyStartDate, setStudyStartDate] = useState('');
    const [studyEndDate, setStudyEndDate] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [tasks, setTasks] = useState('');
    const [workFrom, setWorkFrom] = useState('');
    const [workUntil, setWorkUntil] = useState('');
    const [isEditing, setIsEditing] = useState(true);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setPersonalImage(file);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
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
        <div className="CVForm">
            <h1>CV Form</h1>

            {isEditing ? (
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
                        schoolName={schoolName}
                        studyTitle={studyTitle}
                        studyStartDate={studyStartDate}
                        studyEndDate={studyEndDate}
                        handleChange={handleChange}
                    />
                    <Experience
                        companyName={companyName}
                        positionTitle={positionTitle}
                        tasks={tasks}
                        workFrom={workFrom}
                        workUntil={workUntil}
                        handleChange={handleChange}
                    />

                    <button type="submit">Generate CV Preview</button>
                </form>
            ) : (
                <div>
                    <h2>CV Preview</h2>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone Number: {phoneNumber}</p>
                    <p>Title: {title}</p>
                    <p>Address: {address}</p>
                    <p>University: {schoolName}</p>
                    <p>Degree: {studyTitle}</p>
                    <p>Study Date: {studyStartDate} - {studyEndDate}</p>
                    <p>Company Name: {companyName}</p>
                    <p>Position Title: {positionTitle}</p>
                    <p>Tasks: {tasks}</p>
                    <p>Work From: {workFrom}</p>
                    <p>Work Until: {workUntil}</p>
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
