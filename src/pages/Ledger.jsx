import React from "react";
import Header from "../components/Header";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Ledger() {
  return (
    <>
      <div className="flex justify-center min-h-screen bg-rose-50">
        {/* Card Container */}
        <div className="relative flex flex-col shadow-2xl md:bg-white md:p-6 rounded-2xl md:space-y-0 md:m-0">
          {/* Header */}
          <Header />
          {/* Hero Section */}
          <div className="relative bg-[#82c6db] w-full pb-8 min-h-full">
            <div className="bg-[#d9d9d9] w-full h-11 mt-4 md:h-14 md:mt-8 shadow-md flex ">
             <Link to= "/">
             <IoReturnUpBackSharp className="flex w-6 h-6 mt-2 ml-2 md:w-9 md:h-9" />
             </Link>
           

              <span className="flex items-center justify-center m-auto font-sans font-semibold md:text-lg">
                Ledger
              </span>
            </div>

            {/* Table */}

            <div class="overflow-x-auto">
              <table class=" mx-auto border-gray-300 md:w-full text-sm md:text-base mt-6 md:mt-8 ">
                <thead className="bg-[#233388] text-white">
                  <tr>
                    <th className="border-r-2 border-[#82c6db]">Match Name</th>
                    <th className="border-r-2 border-[#82c6db]">Won By</th>
                    <th className="border-r-2 border-[#82c6db]">Won</th>
                    <th className="border-r-2 border-[#82c6db]">Lost</th>
                    <th className="">Balance</th>
                  </tr>
                </thead>
                <tbody class="text-center text-sm bg-[#82c6db]">
                  <tr>
                    <td class="px-4 py-2 border-t">Won India vs Pakistan</td>
                    <td className="px-4 py-2 border-t">India</td>
                    <td className="px-4 py-2 border-t">0.00</td>
                    <td className="px-4 py-2 border-t">5000</td>
                    <td className="px-4 py-2 border-t">347358.00</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border-t">Won -10 over run CK</td>
                    <td class="px-4 py-2 border-t">CK</td>
                    <td class="px-4 py-2 border-t">1000.00</td>
                    <td class="px-4 py-2 border-t">0.00</td>
                    <td class="px-4 py-2 border-t">347358.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ledger;
