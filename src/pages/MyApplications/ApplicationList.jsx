import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
  console.log(applications);
  return (
    <div>
      <h1 className="text-3xl">apply job so far {applications.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application, index) => (
              <JobApplicationRow
                key={application._id}
                index={index}
                application={application}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
