import React from 'react';
import CompanyList from "./CompanyList";


function Content({companies, setCompanies, addFavoriteCompany}) {
    console.log(companies, 'content')
    return (
        <div className={"content-con"} style={{backgroundColor: "white"}}>
            {companies.length ? (
                <CompanyList
                    companies={companies}
                    setCompanies={setCompanies}
                    addFavoriteCompany={addFavoriteCompany}
                />
            ): (
                <p>There are no available Companies right now :(</p>
            )}
        </div>
    );
}

export default Content;