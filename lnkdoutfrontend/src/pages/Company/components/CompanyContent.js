import React from 'react';
import CompanyList from "./CompanyList";

function CompanyContent({companies, setCompanies, handleCheck}) {


    return (
        <main>
            {companies.length ? (
                <CompanyList
                    companies={companies}
                    handleCheck={handleCheck}
                    />
            ) : (
                <p>There are no available Companies yet</p>
            )}
        </main>
    );
}

export default CompanyContent;