import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const { min, max, currency, responsibilities, requirements, ...newJob } =
      data;
    newJob.requirements = requirements
      .split(",")
      .map((requirement) => requirement.trim());
    newJob.responsibilities = responsibilities
      .split(",")
      .map((responsibility) => responsibility.trim());
    newJob.salaryRange = { min: parseInt(min), max: parseInt(max), currency };
    newJob.status = "active";
    console.log(newJob);
    //save job to the database
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your job has been posted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <form onSubmit={handleAddJob} className="lg:w-1/2 mx-auto">
        <h1 className="text-2xl font-bold text-center mb-10">Add a Job</h1>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Company Location"
          />
          <label className="label">Company Logo</label>
          <input
            type="text"
            name="company_logo"
            className="input w-full"
            placeholder="Company Logo URL"
          />
        </fieldset>
        {/*  Job Type*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="On-Site"
              value={"on-site"}
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value={"remote"}
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value={"hybrid"}
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Next.js"
            />
          </div>
        </fieldset>
        {/* JOb Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Job Category"
            className="select w-full"
            name="category"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application Dead Line</legend>
          <input type="date" name="deadline" className="input w-full" />
        </fieldset>
        {/*Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
            <div className="w-full">
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input w-full"
                placeholder="Minimum Salary"
              />
            </div>

            <div className="w-full">
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                name="max"
                className="input w-full"
                placeholder="Maximum Salary"
              />
            </div>
            <div className="w-full">
              <label className="label">Currency</label>
              <select
                defaultValue="Select a Currency"
                className="select"
                name="currency"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EURO</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            className="textarea w-full"
            placeholder="Job Description"
            name="description"
          ></textarea>
        </fieldset>
        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea w-full"
            placeholder="Requirements (separate by comma)"
            name="requirements"
          ></textarea>
        </fieldset>
        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea w-full"
            placeholder="Responsibilities (separate by comma)"
            name="responsibilities"
          ></textarea>
        </fieldset>
        {/* Hr */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            className="input w-full"
            defaultValue={user.email}
            placeholder="HR Email"
          />
        </fieldset>
        <button className="btn">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
