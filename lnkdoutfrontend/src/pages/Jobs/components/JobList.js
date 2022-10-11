import React from 'react';

function JobList({jobs, setJobs,applyJobs}) {
    return (
        <div className={"list-con"}>
            {jobs.map((job) => (
                <JobCard
                    job={job}
                    setJob={setJobs}
                    applyJob={applyJobs}
                    key={job.id}
                />
            ))}
        </div>
    );
}

export default JobList;