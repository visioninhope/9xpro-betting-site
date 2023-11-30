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
            {/* <table className="min-w-full mt-6 border border-gray-300 md:mt-9">
              <thead>
                <tr>
                  <th className=" border-b bg-[#233388] text-white border border-r-4 md:p-1 md:text-lg ">
                    Date
                  </th>
                  <th className=" border-b bg-[#233388] text-white border border-r-4 md:p-1 md:text-lg ">
                    Description
                  </th>
                  <th className=" border-b bg-[#233388] text-white border border-r-4 md:p-1 md:text-lg ">
                    Prev.Bal
                  </th>
                  <th className=" border-b bg-[#233388] text-white border border-r-4 md:p-1 md:text-lg ">
                    Credit
                  </th>
                  <th className=" border-b bg-[#233388] text-white border border-r-4 md:p-1 md:text-lg ">
                    Debit
                  </th>
                  <th className=" border-b bg-[#233388] text-white border  md:p-1 md:text-lg ">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center bg-gray-100">
                  <td className="p-2 border-b">30-08-23</td>
                  <td className="p-2 border-b">Won India vs Pakistan</td>
                  <td className="p-2 border-b">Row 1, Cell 3</td>
                </tr>
                <tr className="text-center bg-white">
                  <td className="p-2 border-b">Row 2, Cell 1</td>
                  <td className="p-2 border-b">Row 2, Cell 2</td>
                  <td className="p-2 border-b">Row 2, Cell 3</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Statement;
