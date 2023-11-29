import React from "react";
import { LuLogOut } from "react-icons/lu";

function Index() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-rose-100">
        {/* Card Container */}
        <div className="relative flex flex-col m-6 shadow-2xl md:bg-white md:p-6 rounded-2xl md:space-y-0 md:m-0">
          {/* Header */}
          <div className="flex justify-around items-center bg-[#514a97] space-x-14 border border-t-4 border-b-4 shadow-md border-[#ff8227] p-1 md:space-x-20">
            <div className="flex-1 p-1">
              <img src="/assets/logo.png" className="w-full h-auto " />
            </div>

            <div className="flex-1 p-1 leading-tight text-white md:text-lg">
              Username(ID) <br /> Coins:100000 <br /> Expo: 80000
              {/* 2nd content */}
            </div>

            <div className="flex-col items-center justify-center flex-1 p-1 ">
              <LuLogOut className="w-6 h-6 m-auto md:w-8 md:h-8" />
              <span className="font-semibold text-white md:text-lg ">
                Logout
              </span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative flex bg-[#82c6db] w-full pb-8">
            {/* 1st Column */}
            <div className="flex flex-col items-center justify-center w-1/2 m-auto mt-8 space-y-6">
              <img src="/assets/cricket_logo1.png" alt="" className="p-1" />
              Cricket
              <img src="/assets/casino-games.png" alt="" className="p-1" />
              Statement
              <img src="/assets/ledger.png" alt="" className="p-1" />
              All Games
              <img src="/assets/change-password.png" alt="" className="p-1" />
              My Profile
            </div>

            {/* 2nd Column */}
            <div className="flex flex-col items-center justify-center w-1/2 m-auto mt-8 space-y-6">
              <img src="/assets/matka.png" alt="" className="p-1" />
              Matka
              <img src="/assets/statement.png" alt="" className="p-1" />
              Statement
              <img src="/assets/all-games.png" alt="" className="p-1" />
              All Games
              <img src="/assets/myprofile.png" alt="" className="p-1" />
              My Profile
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
