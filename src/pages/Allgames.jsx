import React from "react";
import Header from "../components/Header";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Allgames() {
  return (
    <div className="flex justify-center min-h-screen bg-rose-50">
      {/* Card Container */}
      <div className="relative flex flex-col shadow-2xl md:bg-white md:p-6 rounded-2xl md:space-y-0 md:m-0">
        {/* Header */}
        <Header />
        {/* Hero Section */}
        <div className="relative bg-[#82c6db] w-full pb-8 min-h-full">
          <div className="bg-[#d9d9d9] w-full h-11 mt-4 md:h-14 md:mt-8 shadow-md flex ">
            <Link to="/">
              <IoReturnUpBackSharp className="flex w-6 h-6 mt-2 ml-2 md:w-9 md:h-9" />
            </Link>

            <span className="flex items-center justify-center m-auto font-sans font-semibold md:text-lg">
              All Games
            </span>
          </div>

          <div className="m-auto mt-6 overflow-x-auto md:mt-8 md:w-[26.5rem]">
            <div className="flex flex-col text-center">
              <div className="bg-[#233388] text-white text-base font-light p-1 md:text-base">
                New Jersey @ Morrisvilla Unity - 30-08-2023 11:30 PM
              </div>
              <div className="mt-3 leading-tight md:mt-4">
                Total P/L : 94050 Match Amt : 9600 Comm : 1920 Session Amt : 0
                Comm : 0 Declared : Yes Winner : Morrisvilla Unity
              </div>
              <div className="bg-[#233388] mt-3  md:mt-4 text-white text-base font-light p-1 md:text-base">
                pmBirmingham Phonenix V London Sprit - 31-08-2023 1:00
              </div>
              <div className="mt-3 leading-tight md:mt-4">
                Total P/L : 19400 Match Amt : 0 Comm : 1920 Session Amt : 0 Comm
                : 0 Declared : Yes Winner : Morrisvilla Unity
              </div>

              <div className="bg-[#233388] mt-3  md:mt-4 text-white text-base font-light p-1 md:text-base">
                New Jersey @ Morrisvilla Unity - 30-08-2023 11:30 PM
              </div>
              <div className="mt-3 leading-tight md:mt-4">
                Total P/L : 94050 Match Amt : 9600 Comm : 1920 Session Amt : 0
                Comm : 0 Declared : Yes Winner : Morrisvilla Unity
              </div>

              <div className="bg-[#233388] mt-3  md:mt-4 text-white text-base font-light p-1 md:text-base">
                pmBirmingham Phonenix V London Sprit - 31-08-2023 1:00
              </div>
              <div className="mt-3 leading-tight md:mt-4">
                Total P/L : 19400 Match Amt : 0 Comm : 1920 Session Amt : 0 Comm
                : 0 Declared : Yes Winner : Morrisvilla Unity
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allgames;
