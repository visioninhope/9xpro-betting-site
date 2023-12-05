import React from "react";
import Header from "../components/Header.jsx";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Casinogame() {
  return (
    <>
      <div className="flex justify-center min-h-screen bg-rose-50">
        {/* Card Container */}
        <div className="relative flex flex-col shadow-2xl md:bg-white md:p-6 rounded-2xl md:space-y-0 md:m-0">
          {/* Header */}
          <Header />

          {/* Hero Section */}
          <div className="bg-[#82c6db] min-h-full">
            <div className="bg-[#d9d9d9] w-full h-11 mt-4 md:h-14 md:mt-8 shadow-md flex ">
              
              <Link to ="/">
              <IoReturnUpBackSharp className="flex w-6 h-6 mt-2 ml-2 md:w-9 md:h-9" /> </Link>

              <span className="flex items-center justify-center m-auto font-sans font-semibold md:text-lg">
                Satta-Matka
              </span>
            </div>
            <div className="relative flex flex-col items-center justify-center w-full gap-4 pb-8 mt-8">
              {/* 1st Row */}
              <div className="flex gap-8">
                <img src="/assets/andar.png" alt="" className="p-1" />
                <img src="/assets/ludo.png" alt="" className="p-1" />
              </div>
              {/* 2nd row */}
              <div className="flex gap-8">
                <img src="/assets/teenPatti.png" alt="" className="p-1" />
                <img src="/assets/7upDown.png" alt="" className="p-1" />
              </div>
              {/* 3rd Row */}
              <div className="flex gap-8">
                <img src="/assets/rummy.png" alt="" className="p-1" />
                <img src="/assets/pocker.png" alt="" className="p-1" />
              </div>
              {/* 4th Row */}
              <div className="flex gap-8">
                <img src="/assets/pool.png" alt="" className="p-1" />
                <img src="/assets/roulette.png" alt="" className="p-1" />
              </div>

              {/* 5th Row */}
              <div>
                <img src="/assets/carrom.png" alt="" />
              </div>

              {/* <div className="flex flex-col items-center justify-center w-1/2 m-auto mt-8 space-y-6">
              <img src="/assets/andar.png" alt="" className="p-1" />

              <img src="/assets/teenPatti.png" alt="" className="p-1" />

              <img src="/assets/rummy.png" alt="" className="p-1" />

              <img src="/assets/pool.png" alt="" className="p-1" />
            </div> */}

              {/* 2nd Column */}
              {/* <div className="flex flex-col items-center justify-center w-1/2 m-auto mt-8 space-y-6">
              <img src="/assets/ludo.png" alt="" className="p-1" />
              <img src="/assets/7upDown.png" alt="" className="p-1" />
              <img src="/assets/pocker.png" alt="" className="p-1" />

              <img src="/assets/roulette.png" alt="" className="p-1" />
            </div> */}
            </div>
          </div>

          {/* <div className=" bg-[#82c6db]  w-full flex items-center justify-center">
            <img src="/assets/carrom.png" alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Casinogame;
