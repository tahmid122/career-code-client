import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ jobsCreatedByPromise }) => {
  const jobList = use(jobsCreatedByPromise);
  return (
    <div>
      JobList
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Count</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {jobList.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.application_count}</td>
                <td>{job.deadline}</td>
                <td>
                  <Link to={`/applications/${job._id}`}>View Applications</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
