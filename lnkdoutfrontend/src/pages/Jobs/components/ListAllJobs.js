import React from 'react';
import {useEffect, useRef, useState} from "@types/react";
import {getData, postData} from "../../../util/Fetch";
import SearchItem from "../../../util/SearchItem";
import Content from "./Content";

function ListAllJobs() {
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);

    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            const fetchCompanies = async () => {
                let data = await getData('/job');
                if(data.status){
                    setError(true)
                }
                setJobs(data);
            }
            fetchCompanies().then(() => console.log('hello'));
            return () => {
                effectRan.current = true;
            }
        }
    }, []);


    const applyJob= async (studentId, jobId) => {
        await postData(`/student/apply-job/${studentId}`, jobId).then(()=> console.log("like"));
    }


    return (
        <>
            {error ? <p>You are not authorized to see this webpage!</p> : ( <div className={"AllCompanyContainer"}>
                    <h2 className={"AllCompanyHeader"}>List of all available Jobs</h2>
                    <SearchItem
                        search={search}
                        setSearch={setSearch}
                    />
                    <Content
                        jobs={jobs.filter(job => ((job.name).toLowerCase()).includes(search.toLowerCase()))}
                        setJobs={setJobs}
                        applyJob={applyJob()}
                    />
                </div>
            )}
        </>
    )

}

export default ListAllJobs;