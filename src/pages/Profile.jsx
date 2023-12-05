import React, { useState } from "react";
import Header from "../components/Header";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { numbers } from "../Links";
import { Link } from "react-router-dom";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

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
                {" "}
                <IoReturnUpBackSharp className="flex w-6 h-6 mt-2 ml-2 md:w-9 md:h-9" />
              </Link>

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

            <div className="flex flex-col justify-center mx-auto mt-24 ml-6 text-base md:text-lg">
              <div class="relative flex  justify-center items-center">
                <span>Rate Difference</span>

                {/* Trigger button for the dropdown */}
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="flex items-center justify-center px-2 py-1 mx-auto ml-6 bg-gray-100 border border-gray-300 rounded"
                >
                  6
                  {!isOpen ? (
                    <IoMdArrowDropdown className="ml-3 border-l-2 " />
                  ) : (
                    <IoMdArrowDropup className="ml-3 border-l-2" />
                  )}
                  {isOpen && (
                    <div className="absolute flex flex-col items-start px-3 bg-gray-100 top-8">
                      {numbers.map((number) => {
                        const { id, item } = number;
                        return (
                          <ul className="hover:bg-gray-300" key={id}>
                            <li>{item}</li>
                          </ul>
                        );
                      })}
                    </div>
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

                <button className="text-white bg-[#514a97] px-2 rounded-sm mr-6">
                  Update
                </button>
              </div>

              <div className="flex gap-6 mt-4">
                <div className="flex flex-col items-start gap-3">
                  <span>Client Code:</span>
                  <span>Client Name:</span>
                  <span>Contact:</span>
                  <span>Date of Joining:</span>
                  <span>Address:</span>
                  <span>Company Info:</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span>B2589</span>
                  <span>Raj Kumar</span>
                  <span>9876543210</span>
                  <span>29-Feb-2020</span>
                  <span>INDIA</span>
                  <span>Nai Pata</span>
                </div>
              </div>
            </div>

            <div className="bg-[#514a97] w-full h-10 mt-10 md:h-14 md:mt-8 shadow-md flex relative items-center justify-center">
              <span className="text-white">Help Line No : +91-1234567890</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
