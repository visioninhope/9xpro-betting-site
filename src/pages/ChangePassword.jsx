import React from "react";
import Header from "../components/Header";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import PasswordApp from "../components/PasswordInput";

function ChangePassword() {
  return (
    <>
      <div className="flex justify-center min-h-screen bg-rose-50">
        {/* Card Container */}
        <div className="relative flex flex-col shadow-2xl md:bg-white md:p-6 rounded-2xl md:space-y-0 md:m-0">
          {/* Header */}
          <Header />
          {/* Hero Section */}
          <div className="relative bg-[#82c6db] w-full pb-8 min-h-screen">
            <div className="bg-[#d9d9d9] w-full h-11 mt-4 md:h-14 md:mt-8 shadow-md flex ">
              <Link to="/">
                <IoReturnUpBackSharp className="flex w-6 h-6 mt-2 ml-2 md:w-9 md:h-9" />
              </Link>

              <span className="flex items-center justify-center m-auto font-sans font-semibold md:text-lg">
                Change Password
              </span>
            </div>

            <div className="flex flex-col items-start justify-center mx-auto mt-10 mb-6 ml-10">
              <label className="items-start justify-start block mb-2 text-sm font-semibold text-gray-900 text">
                OLD PASSWORD
              </label>

              <PasswordApp />
          
            </div>

            <div className="flex flex-col items-start justify-center mx-auto mt-10 mb-6 ml-10 ">
              <label className="items-start justify-start block mb-2 text-sm font-semibold text-gray-900 text">
                NEW PASSWORD
              </label>

              
              <PasswordApp />

         
            </div>

            <div className="flex flex-col items-start justify-center mx-auto mt-10 mb-6 ml-10 ">
              <label className="items-start justify-start block mb-2 text-sm font-semibold text-gray-900 text">
                CONFIRM PASSWORD
              </label>

              <PasswordApp />
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
