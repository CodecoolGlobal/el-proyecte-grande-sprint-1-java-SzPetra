import React, {useState} from 'react';
import {postData} from "../../../util/Fetch";
import {useParams} from "react-router-dom";

function CreateJob() {

    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [seats, setSeats] = useState('');
    const [deadline, setDeadline] = useState('');
    const { companyId } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(`/job/create-job/${companyId}`, {jobTitle, company, companyId, description, location, seats, deadline});
        setJobTitle('');
        setCompany('');
        setDescription('');
        setLocation('');
        setSeats('');
        setDeadline('');

    }

    return (
        <div className={'company-container'}>
            <img src={'https://englishclassviaskype.com/wp-content/uploads/2018/12/in-company-English-classes-head2.jpg'}/>
            <form className="job-form" onSubmit={handleSubmit}>

                <div className="form-body">
                    <div className="username">
                        <label className="form_label" htmlFor="name" >Job Title</label>
                        <input
                            required={true}
                            className="form_input"
                            type="text"
                            id="jobTitle"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            placeholder="Enter Job Title"
                        />
                    </div>
                    <div className="company">
                        <label className="form_label" htmlFor="company">Company</label>
                        <input
                            required={true}
                            type="company"
                            id="company"
                            className="form_input"
                            value={company}
                        />
                    </div>
                    <div className="description">
                        <label className="form_label" htmlFor="description">Description </label>
                        <input
                            required={true}
                            className="form_input"
                            type="description"
                            id="description"
                            placeholder="Describe job"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="location">
                        <label className="form_label" htmlFor="location">Location</label>
                        <input
                            required={true}
                            className="form_input"
                            type="location"
                            id="location"
                            placeholder="Enter location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="seats">
                        <label className="form_label" htmlFor="seats">Seats</label>
                        <input
                            required={true}
                            className="form_input"
                            type="seats"
                            id="seats"
                            placeholder="Enter how much available seats your company have"
                            value={seats}
                            onChange={(e) => setSeats(e.target.value)}
                        />
                    </div>
                    <div className="deadline">
                        <label className="form_label" htmlFor="deadline">Deadline</label>
                        <input
                            required={true}
                            className="form_input"
                            type="deadline"
                            id="deadline"
                            placeholder="Enter deadline"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                        />
                    </div>
                </div>
                <div className="registration-footer">
                    <button
                        type="submit"
                        id="create-job-btn"
                        className="company-btn">Create Job Offer</button>
                </div>
            </form>
        </div>
    );
}

export default CreateJob;