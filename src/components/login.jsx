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
