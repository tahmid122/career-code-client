import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  const handleStatusChanged = (e, app_id) => {
    axios
      .patch(`http://localhost:3000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your status updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h2 className="text-3xl">
        {applications.length}Applications for {job_id}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application) => (
              <tr key={application._id}>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    defaultValue={application.status}
                    onChange={(e) => handleStatusChanged(e, application._id)}
                    className="select"
                  >
                    <option>Update Status</option>
                    <option value={"pending"}>Pending</option>
                    <option value={"interview"}>Interview</option>
                    <option value={"hired"}>Hired</option>
                    <option value={"rejected"}>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
