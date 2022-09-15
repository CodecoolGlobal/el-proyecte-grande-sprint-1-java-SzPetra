import React from 'react';
import StudentCard from "../../../../Student/components/listStudents/components/StudentCard";

function CompanyList({companies ,setCompanies}) {
    console.log(companies, 'list')
    return (
        <>
            {companies.map((company) => (
                    <StudentCard
                        company={company}
                        setCompany={setCompanies}
                        key={company.id}
                    />
                )
            )}
        </>
    );
}

export default CompanyList;