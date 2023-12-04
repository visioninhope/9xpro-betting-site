import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

function Index() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-rose-50">
        {/* Card Container */}
        <div className="relative flex flex-col m-6 shadow-2xl md:bg-white md:p-6 rounded-2xl md:space-y-0 md:m-0">
          {/* Header */}
          <Header />

          {/* Hero Section */}
          <div className="relative flex bg-[#82c6db] w-full pb-8">
            {/* 1st Column */}
            <div className="flex flex-col items-center justify-center w-1/2 m-auto mt-8 space-y-6">
              <img src="/assets/cricket_logo1.png" alt="" className="p-1" />
              Cricket
              <Link to="/casinogame" className="flex flex-col items-center">
                <img src="/assets/casino-games.png" alt="" className="p-1" />
                Casino Games
              </Link>
              <Link to="/myledger" className="flex flex-col items-center">
                <img src="/assets/ledger.png" alt="" className="p-1" />
                My Ledger
              </Link>
              <Link to="/changepassword" className="flex flex-col items-center">
                <img src="/assets/change-password.png" alt="" className="p-1" />
                Change Password
              </Link>
            </div>

            {/* 2nd Column */}
            <div className="flex flex-col items-center justify-center w-1/2 m-auto mt-8 space-y-6">
              <Link to="/matka" className="flex flex-col items-center">
                <img src="/assets/matka.png" alt="" className="p-1" />
                Matka
              </Link>
              <Link to="/statement" className="flex flex-col items-center">
                <img src="/assets/statement.png" alt="" className="p-1" />
                Statement
              </Link>
              <Link to="/allgames" className="flex flex-col items-center">
                <img src="/assets/all-games.png" alt="" className="p-1" />
                All Games
              </Link>
              <Link to="/myprofile" className="flex flex-col items-center">
                <img src="/assets/myprofile.png" alt="" className="p-1" />
                My Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
