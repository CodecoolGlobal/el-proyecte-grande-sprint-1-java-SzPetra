import React from 'react';

function SingleCompany({company, handleCheck}) {
    return (
        <ol className='company'>
            <input
                type="checkbox"
                onChange={() => handleCheck(company.id)}
                checked={company.checked}
            />
            <label style={{color: "white"}}>
                {company.company}
            </label>
        </ol>
    )
}

export default SingleCompany;