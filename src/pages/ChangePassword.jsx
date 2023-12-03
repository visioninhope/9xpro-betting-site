import React from "react";
import Header from "../components/Header";
import { IoReturnUpBackSharp } from "react-icons/io5";

function ChangePassword() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-rose-50">
        {/* Card Container */}
        <div className="relative flex flex-col m-6 shadow-2xl md:bg-white md:p-6 rounded-2xl md:space-y-0 md:m-0">
          {/* Header */}
          <Header />
          {/* Hero Section */}
          <div className="relative bg-[#82c6db] w-full pb-8">
            <div className="bg-[#d9d9d9] w-full h-11 mt-4 md:h-14 md:mt-8 shadow-md flex ">
              <IoReturnUpBackSharp className="flex w-6 h-6 mt-2 ml-2 md:w-9 md:h-9" />

              <span className="flex items-center justify-center m-auto font-sans font-semibold md:text-lg">
                Change Password
              </span>
            </div>

            <div class="mb-6 mt-10 mx-auto flex flex-col justify-center items-start ml-10 ">
              <label
                for="default-input"
                className="items-start justify-start block mb-2 text-sm font-semibold text-gray-900 text"
              >
                OLD PASSWORD
              </label>

              <input
                type="text"
                id="default-input"
                className="bg-[#82c6db] border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2"
              />
            </div>

            <div class="mb-6 mt-10 mx-auto flex flex-col justify-center items-start ml-10 ">
              <label
                for="default-input"
                className="items-start justify-start block mb-2 text-sm font-semibold text-gray-900 text"
              >
                NEW PASSWORD
              </label>

              <input
                type="text"
                id="default-input"
                className="bg-[#82c6db] border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2"
              />
            </div>

            <div class="mb-6 mt-10 mx-auto flex flex-col justify-center items-start ml-10 ">
              <label
                for="default-input"
                className="items-start justify-start block mb-2 text-sm font-semibold text-gray-900 text"
              >
                CONFIRM PASSWORD
              </label>

              <input
                type="text"
                id="default-input"
                className="bg-[#82c6db] border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;