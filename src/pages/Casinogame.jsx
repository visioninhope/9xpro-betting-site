import React from "react";
import Header from "../components/Header.jsx";

function Casinogame() {
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
              <img src="/assets/andar.png" alt="" className="p-1" />

              <img src="/assets/teenPatti.png" alt="" className="p-1" />

              <img src="/assets/rummy.png" alt="" className="p-1" />

              <img src="/assets/pool.png" alt="" className="p-1" />
            </div>

            {/* 2nd Column */}
            <div className="flex flex-col items-center justify-center w-1/2 m-auto mt-8 space-y-6">
              <img src="/assets/ludo.png" alt="" className="p-1" />
              <img src="/assets/7upDown.png" alt="" className="p-1" />
              <img src="/assets/pocker.png" alt="" className="p-1" />

              <img src="/assets/roulette.png" alt="" className="p-1" />
            </div>
          </div>
          <div className=" bg-[#82c6db]  w-full flex items-center justify-center">
            <img src="/assets/carrom.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Casinogame;
