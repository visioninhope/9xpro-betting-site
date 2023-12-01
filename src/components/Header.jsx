import React from "react";
import { LuLogOut } from "react-icons/lu";
function Header() {
  return (
    <>
      <header className="flex justify-around items-center bg-[#514a97] space-x-14 border border-t-4 border-b-4 shadow-md border-[#ff8227] p-1 md:space-x-20">
        <div className="flex-1 p-1">
          <img src="/assets/logo.png" className="h-auto w-14 " />
        </div>

        <div className="flex-1 p-1 leading-tight text-white md:text-lg">
          Username(ID) <br /> Coins:100000 <br /> Expo: 80000
          {/* 2nd content */}
        </div>

        <div className="flex-col items-center justify-center flex-1 p-1 ">
          <LuLogOut className="w-6 h-6 m-auto md:w-8 md:h-8" />
          <span className="font-semibold text-white md:text-lg ">Logout</span>
        </div>
      </header>
    </>
  );
}

export default Header;
