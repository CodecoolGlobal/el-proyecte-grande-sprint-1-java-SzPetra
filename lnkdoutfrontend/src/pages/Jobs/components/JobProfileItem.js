import React from 'react';

function JobProfileItem(id, jobTitle, description, location, isOpen, seats, company, deadline) {
    return (
        <div>
            <h2>{jobTitle}</h2>
            <h4>{company}</h4>
            <p>{description}</p>
            <p>{location}</p>
            <p>{seats}</p>
            <p>{deadline}</p>
        </div>
    );
}

export default JobProfileItem;