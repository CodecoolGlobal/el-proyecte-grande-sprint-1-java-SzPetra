import React from 'react';
import JobList from "./JobList";


function Content({jobs, setJobs, applyJobs}) {
    return (
        <div className={"content-con"} style={{backgroundColor: "white"}}>
            {jobs.length ? (
                <JobList
                    jobs={jobs}
                    setJobs={setJobs}
                    applyJobs={applyJobs}
                />
            ): (
                <p>There are no available Jobs right now :(</p>
            )}
        </div>
    );
}

export default Content;