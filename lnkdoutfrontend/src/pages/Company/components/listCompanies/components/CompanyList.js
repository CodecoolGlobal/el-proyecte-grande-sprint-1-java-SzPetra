import React from 'react';
import CompanyCard from "./CompanyCard";

function CompanyList({companies ,setCompanies, addFavoriteCompany}) {
    console.log(companies, 'list')
    return (
        <>
            {companies.map((company) => (
                    <CompanyCard
                        company={company}
                        setCompany={setCompanies}
                        key={company.id}
                        addFavoriteCompany={addFavoriteCompany}
                    />
                )
            )}
        </>
    );
}

export default CompanyList;