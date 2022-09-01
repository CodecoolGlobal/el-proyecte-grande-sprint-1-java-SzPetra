import React from 'react';
import SingleCompany from "./SingleCompany";

function CompanyList({companies, handleCheck}) {
    return (
        <ul>
            {companies.map((company) => (
                <SingleCompany
                    key={company.id}
                    company={company}
                    handleCheck={handleCheck}
                />
            ))}
        </ul>
    );
}

export default CompanyList;