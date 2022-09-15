import React from 'react';
import CompanyCard from "../../Company/components/listCompanies/components/CompanyCard";

function FavoriteCompaniesList({favCompanies}) {
    return (
        <>
            {favCompanies.length ? (favCompanies.map((favCompany) => (
                <CompanyCard
                    company={favCompany}
                    key={favCompany.id}
                />
                )
                )) : <p>No favorite Company added yet</p>}
        </>
    );
}

export default FavoriteCompaniesList;