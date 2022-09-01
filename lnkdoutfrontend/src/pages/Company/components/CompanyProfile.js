import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getData} from "../../../util/Fetch";


function CompanyProfile() {
    const [companyData, setCompanyData] = useState({});
    const { id } = useParams();
    const apiRoute = `company/api/get-company/${id}`;

    useEffect(()=> {
        getData(apiRoute)
            .then(data => setCompanyData(data))
    }, []);

    return (
        <div>
        </div>
    );
}

export default CompanyProfile;