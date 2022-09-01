import React from 'react';

function CompanyProfileItem({ name, email, phone, city, id }) {

    return (
        <div>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <p>{phone}</p>
            <p>{city}</p>
        </div>
    );
}

export default CompanyProfileItem;