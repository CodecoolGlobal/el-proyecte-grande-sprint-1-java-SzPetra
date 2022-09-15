import React from 'react';
import {Link} from "react-router-dom";
import {FaHeart, FaRegEnvelope} from "react-icons/fa";

function CompanyCard({company, addFavoriteCompany}) {
    return (
        <>
            <Link className={"Link"} style={{textDecoration: 'none'}} to={`/company/profile/${company.id}`}>
                <div className={"studentCard"}>
                    <div className={"StudentInfo"}>
                        <p className={"studentName"}>{company.name}<span> in {company.city}</span></p>
                        <p><span>Contact info: {company.email}</span></p>
                        <p>Phone: {company.phone}</p>
                    </div>
                    <FaRegEnvelope className={"envelope"}/>
                </div>
            </Link>
            <FaHeart className={"heart"} onClick={() => addFavoriteCompany(1, company.id)}/>
        </>

    );
}

export default CompanyCard;