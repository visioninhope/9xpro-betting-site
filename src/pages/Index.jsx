import React from "react";

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
              <img src="/assets/casino-games.png" alt="" className="p-1" />
              Casino Games
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
