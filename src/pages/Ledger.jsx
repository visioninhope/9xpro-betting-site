import React from "react";
import Header from "../components/Header";
import { IoReturnUpBackSharp } from "react-icons/io5";

function Ledger() {
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
                Ledger
              </span>
            </div>

            {/* Table */}

            <div className="min-h-screen overflow-x-auto">
              <div className="w-full ">
                <div className="flex ">
                  <td className=" border-b text-lg bg-[#233388] text-white border border-r-2 px-1 md:px-4 md:text-lg">
                    Match Name
                  </td>
                  <td className=" border-b text-lg bg-[#233388] text-white border border-r-2 px-1 md:px-2 md:text-lg ">
                    Won By
                  </td>
                  <td className=" border-b text-lg bg-[#233388] text-white border border-r-2 px-1 md:px-2 md:text-lg">
                    Won
                  </td>
                  <td className=" text-lg border-b bg-[#233388] text-white border border-r-2 px-1 md:px-2 md:text-lg">
                    Lost
                  </td>
                  <td className=" text-lg border-b bg-[#233388] text-white border border-r-2 px-1 md:px-4 md:text-lg">
                    Balance
                  </td>
                </div>

                <div className="">
                  <div className="flex mx-auto">
                    <div className="p-1 text-sm border-b">
                      Won India vs Pakistan
                    </div>
                    <div className="p-1 text-sm border-b">India</div>
                    <div className="p-1 text-sm border-b ">0.00</div>
                    <div className="p-1 text-sm border-b ">5000.00</div>
                    <div className="p-1 text-sm border-b ">347358.00</div>
                  </div>

                  <div className="flex mx-auto ">
                    <div className="p-1 text-sm border-b">
                      Won -10 over run CK
                    </div>
                    <div className="p-1 text-sm border-b">CK</div>
                    <div className="p-1 text-sm border-b ">10000.00</div>
                    <div className="p-1 text-sm border-b ">0.00</div>
                    <div className="p-1 text-sm border-b ">357358.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ledger;
