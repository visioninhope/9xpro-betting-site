import React from "react";
import Header from "../components/Header";
import { IoReturnUpBackSharp } from "react-icons/io5";

function Statement() {
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
                My Statement
              </span>
            </div>

            {/* Table */}

            <div className="overflow-x-auto">
              <table className="mx-auto mt-6 text-sm border-gray-300 md:w-full md:text-base md:mt-8">
                <thead className="bg-[#24338a] text-white">
                  <tr className>
                    <th className="border-r-2 border-[#82c6db]">Date</th>
                    <th className="border-r-2 border-[#82c6db]">Description</th>
                    <th className="border-r-2 border-[#82c6db]">Prev</th>
                    <th className="border-r-2 border-[#82c6db]">Credit</th>
                    <th className="border-r-2 border-[#82c6db]">Debit</th>
                    <th className="">Balance</th>
                  </tr>
                </thead>
                <tbody className="text-center text-sm bg-[#82c6db]">
                  <tr>
                    <td className="px-4 py-2 border-t">30-08-23</td>
                    <td className="px-4 py-2 border-t">
                      Won India vs Pakistan
                    </td>
                    <td className="px-4 py-2 border-t">352358</td>
                    <td className="px-4 py-2 border-t">0.00</td>
                    <td className="px-4 py-2 border-t">5000</td>
                    <td className="px-4 py-2 border-t">347358</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t">30-08-23</td>
                    <td className="px-4 py-2 border-t">Won -10 over run CK</td>
                    <td className="px-4 py-2 border-t">347358</td>
                    <td className="px-4 py-2 border-t">10000</td>
                    <td className="px-4 py-2 border-t">0.00</td>
                    <td className="px-4 py-2 border-t">357358</td>
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

export default Statement;
