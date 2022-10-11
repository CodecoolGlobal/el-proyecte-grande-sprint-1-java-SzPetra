import React from 'react';

import React, {useEffect, useState} from 'react';
import {getData} from "../../../util/Fetch";
import {useParams} from "react-router-dom";
import JobProfileItem from "./JobProfileItem";

function JobProfile() {
    const [jobData, setJobData] = useState();
    const { id } = useParams();

    const getJobId = async () => {
        return await getData(`/job/${id}`)
    }

    useEffect( () => {
        getJobId().then((result) => {
            if(!result) {
                console.log("No Job");
            } else {
                setJobData(result);
                console.table(result);
            }
        })

    }, [])
    return (
        <div>
            <JobProfileItem
                {...jobData}
            />
        </div>
    );
}

export default JobProfile;