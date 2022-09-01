import React, {useEffect, useState} from 'react';
import {getData} from "../../../util/Fetch";
import {useParams} from "react-router-dom";

function CompanyProfile() {
    const [companyData, setCompanyData] = useState();
    const { id } = useParams();

    const getCompanyById = async () => {
        return await getData(`/company/profile/${id}`)
    }

    useEffect( () => {
        getCompanyById().then((result) => {
            if(!result) {
                console.log("No Company");
            } else {
                setCompanyData(result);
                console.table(result);
            }

        })

    }, [])
    return (
        <div></div>
    );
}

export default CompanyProfile;