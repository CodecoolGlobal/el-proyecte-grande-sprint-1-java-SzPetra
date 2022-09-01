import React from 'react';

function StudentProfileItem({ name, email, phone, city, id }) {

    return (
        <div>
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
            <p>Phone: {phone}</p>
            <p>City: {city}</p>
        </div>
    )
}

export default StudentProfileItem;