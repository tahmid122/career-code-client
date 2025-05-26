import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    title,
    location,
    _id,
    salaryRange,
    description,
    requirements,
    company,
    company_logo,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm dark:shadow-white p-2">
      <div className="flex items-center gap-4">
        <figure>
          <img src={company_logo} className="w-16" alt="Shoes" />
        </figure>
        <div>
          <h4>{company}</h4>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title} <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions justify-start">
          {requirements.map((requirement, index) => (
            <div key={index} className="badge badge-outline">
              {requirement}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`jobs/${_id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
