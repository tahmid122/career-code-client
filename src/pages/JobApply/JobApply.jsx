import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { user } = useAuth();
  const { id: jobId } = useParams();
  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const {
      linkedinUrl: linkedin,
      githubUrl: github,
      resume,
    } = Object.fromEntries(formData.entries());
    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="p-10">
      <h4 className="text-4xl">
        Apply for this job <Link to={`/jobs/${jobId}`}>details</Link>
      </h4>
      <form
        onSubmit={handleApply}
        className="space-y-4 md:space-y-6 md:w-3/12 mx-auto mt-20"
      >
        <div>
          <label
            htmlFor="linkedinUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Linkedin URL
          </label>
          <input
            type="url"
            name="linkedinUrl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required={true}
          />
        </div>
        <div>
          <label
            htmlFor="githubUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Github URL
          </label>
          <input
            type="url"
            name="githubUrl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required={true}
          />
        </div>
        <div>
          <label
            htmlFor="resume"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Resume URL
          </label>
          <input
            type="url"
            name="resume"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required={true}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-primary cursor-pointer hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default JobApply;
