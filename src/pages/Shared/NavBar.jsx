import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
const NavBar = () => {
  const { logOut, user } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {/* for applicant links: check role as well */}
      {user && (
        <>
          <li>
            <NavLink to={"/myApplications"}>My Applications</NavLink>
          </li>
        </>
      )}
      {/* for recruiter links: check role as well */}
      {user && (
        <>
          <li>
            <NavLink to={"/addJob"}>Add Job</NavLink>
          </li>
          <li>
            <NavLink to={"/myPostedJobs"}>My Posted Jobs</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to={"/"}>Contact</NavLink>
      </li>
    </>
  );
  const handleLogout = () => {
    logOut()
      .then(() => alert("Sign out successful"))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-2xl font-bold">
          Career Code
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogout} className="btn btn-error">
            Signout
          </button>
        ) : (
          <>
            <span>
              <Link
                to={"/register"}
                className="underline mr-5 font-semibold text-base hover:text-indigo-600"
              >
                Register
              </Link>
            </span>
            <Link to={"/register"} className="btn bg-indigo-600 text-white">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
