import React from 'react';
import {Link} from "react-router-dom";
import {FaHeart} from "react-icons/fa";

function JobCard({job, applyJob}) {

    const {
        jobTitle,
        location,
        seats,
        company,
        deadline
    } = job

    return (
        <div className={"card-con"} style={{backgroundColor: "white"}}>
            <Link id={`job-${job.id}`} className={"Link"} style={{textDecoration: 'none'}} to={`/job/${job.id}`}>
                <div className={"studentCard"}>
                    <div className={"StudentInfo"}>
                        <p className={"studentName"}>{jobTitle}<span> in {location}</span></p>
                        <p><span>Company: {company}</span></p>
                        <p>Deadline: {deadline}</p>
                        <p>Available seats: {seats}</p>
                    </div>
                </div>
            </Link>
            <FaHeart className={"heart"} onClick={() => applyJob(1, job.id)}/>
        </div>
    );
}

export default JobCard;