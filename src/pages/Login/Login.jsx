import React, { use } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lotties/login.json";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
  const { loginUser } = use(AuthContext);
  const location = useLocation();
  const path = location.state;
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(path || "/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-around px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to account
            </h1>
            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary cursor-pointer hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have any account?{" "}
                <Link
                  to={"/register"}
                  className="font-medium text-primary hover:underline dark:text-primary"
                >
                  Register here
                </Link>
              </p>
            </form>
            <SocialLogin path={path} />
          </div>
        </div>
        <div className="w-6/12">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Login;
