import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobList from "./JobList";
import { jobsCreatedByPromise } from "../api/jobsApi";

const MyPostedJob = () => {
  const { user } = useAuth();
  return (
    <div>
      <Suspense>
        <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyPostedJob;
