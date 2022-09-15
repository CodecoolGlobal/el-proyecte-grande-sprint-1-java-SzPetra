import React from 'react';
import CompanyCard from "../../Company/components/listCompanies/components/CompanyCard";

function FavoriteCompaniesList({favCompanies, getFavoriteCompanies}) {
    return (
        <>
            {favCompanies.map((favCompany) => (
                <CompanyCard
                    company={favCompany}
                    key={favCompany.id}
                />
                )
                )}
        </>
    );
}

export default FavoriteCompaniesList;