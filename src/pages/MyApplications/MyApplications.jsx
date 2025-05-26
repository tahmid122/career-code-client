import React, { Suspense } from "react";
import ApplicationStates from "./ApplicationStates";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../api/application.api";
const MyApplications = () => {
  const { user } = useAuth();

  return (
    <div>
      <ApplicationStates />
      <Suspense fallback={"Loading  your applications"}>
        <ApplicationList
          myApplicationPromise={myApplicationPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
