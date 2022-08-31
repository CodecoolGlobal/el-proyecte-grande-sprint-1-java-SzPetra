import React from 'react';
import {useParams} from "react-router-dom";
import { getData } from "../../../util/Fetch";

function CompanyProfile(props) {
    const { id } = useParams();
    const api = ``;
    const companyData = getData();





    return (
        <div></div>
    );
}

export default CompanyProfile;