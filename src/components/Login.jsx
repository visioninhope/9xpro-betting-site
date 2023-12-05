import React from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  return (
    <>
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen bg-rose-50">
        {/* Card Container */}
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
          {/* Left Side */}
          <div className="p-6 md:p-20">
            {/* Top Content */}
            <h2 className="mb-4 font-mono text-5xl font-bold text-center capitalize text-rose-700">
              Cupid x Pro
            </h2>
            <h2 className="mb-5 font-mono text-3xl font-bold text-center text-black capitalize">
              Login
            </h2>
            <p className="max-w-full mb-12 font-sans font-light text-center text-gray-600">
              Log in to your Account
            </p>
            <div className="relative flex mb-4 md:mb-8">
              <input
                type="text"
                className="w-full px-8 py-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "
                placeholder="Enter Your Email Address"
              />
              <i className="absolute -translate-y-1/2 left-2 top-1/2">
                <FaUser />
              </i>
            </div>

            <div className="relative flex">
              <input
                type="password"
                className="w-full px-8 py-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "
                placeholder="Enter Your Password"
              />
              <i className="absolute -translate-y-1/2 left-2 top-1/2">
                <RiLockPasswordFill />
              </i>
            </div>

            {/* Middle Content */}
            <div></div>

            {/* Border */}
            <div className="mt-8 border border-b-b-gray-300"></div>

            {/* Bottom Content */}
            {/* <p className="py-6 text-sm font-thin text-center text-gray-400">
              Login
            </p> */}

            {/* Bottom Buttons Container */}
            <div className="flex flex-col py-4 space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 w-full">
                Login
              </button>
            </div>
          </div>

          {/* Right Side */}

          <img
            src="./assets/playing-cards.jpg"
            alt=""
            className="w-[400px] hidden md:block"
          />
        </div>
      </div>
    </>
  );
}

export default Login;
