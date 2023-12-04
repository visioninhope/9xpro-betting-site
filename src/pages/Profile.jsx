import React, { useState } from "react";
import Header from "../components/Header";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-rose-50">
        {/* Card Container */}
        <div className="relative flex flex-col m-6 shadow-2xl md:bg-white md:p-6 rounded-2xl md:space-y-0 md:m-0">
          {/* Header */}
          <Header />
          {/* Hero Section */}
          <div className="relative bg-[#82c6db] w-full pb-8 min-h-screen">
            <div className="bg-[#d9d9d9] w-full h-11 mt-4 md:h-14 md:mt-8 shadow-md flex ">
              <IoReturnUpBackSharp className="flex w-6 h-6 mt-2 ml-2 md:w-9 md:h-9" />

              <span className="flex items-center justify-center m-auto font-sans font-semibold md:text-lg">
                Change Password
              </span>
            </div>
            <div className="bg-[#514a97] w-full h-14 mt-6 md:h-14 md:mt-8 shadow-md flex relative items-center justify-center">
              <img
                src="/assets/bigLogo.png"
                alt=""
                className="absolute mt-16"
              />
            </div>

            <div className="flex flex-col items-center justify-center mt-24 text-base md:text-lg">
              <div class="relative flex gap-4 justify-center items-center">
                <span>Rate Difference</span>

                {/* Trigger button for the dropdown */}
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="flex items-center justify-center px-2 py-1 mx-auto bg-gray-100 border border-gray-300 rounded"
                >
                  6
                  {!isOpen ? (
                    <IoMdArrowDropdown className="ml-3 border-l-2 " />
                  ) : (
                    <IoMdArrowDropup className="" />
                  )}
                </button>

                {/*  Dropdown content */}
                <div class="absolute hidden mt-2 bg-white border border-gray-300 rounded">
                  {/* Dropdown items */}
                  <a href="#" class="block px-4 py-2 text-gray-700">
                    Item 1
                  </a>
                  <a href="#" class="block px-4 py-2 text-gray-700">
                    Item 2
                  </a>
                  <a href="#" class="block px-4 py-2 text-gray-700">
                    Item 3
                  </a>
                </div>

                <button className="text-white bg-[#514a97] px-2 rounded-sm">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
