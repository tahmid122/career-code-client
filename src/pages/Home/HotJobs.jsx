import React, { use } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-10">
        Hot jobs of the day
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {jobs?.map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
