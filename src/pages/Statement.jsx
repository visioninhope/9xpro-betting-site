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
              <div className="w-full ">
                <div className="flex ">
                
                    <td className=" border-b bg-[#233388] text-white border border-r-2 px-1 md:px-3 md:text-lg">
                      Date
                    </td>
                    <td className=" border-b bg-[#233388] text-white border border-r-2 px-1 md:px-2 md:text-lg">
                      Description
                    </td>
                    <td className=" border-b bg-[#233388] text-white border border-r-2 px-1 md:px-2 md:text-lg">
                      Prev Bal
                    </td>
                    <td className=" border-b bg-[#233388] text-white border border-r-2 px-1 md:px-2 md:text-lg">
                      Credit
                    </td>
                    <td className=" border-b bg-[#233388] text-white border border-r-2 px-1 md:px-2 md:text-lg">
                      Debit
                    </td>
                    <td className=" border-b bg-[#233388] text-white border  px-1 md:px-3 md:text-lg">
                      Balance
                    </td>
                 
                </div>

                <div className="">
                  <div className="flex mx-auto">
                    <div className="p-1 text-sm border-b">30-08-23</div>
                    <div className="p-1 text-sm border-b">
                      Won India vs Pakistan
                    </div>
                    <div className="p-1 text-sm border-b">352358.00</div>
                    <div className="p-1 border-b ">0.00</div>
                    <div className="p-1 border-b">5000.00</div>
                    <div className="p-1 border-b">347358.00</div>
                  </div>
                  <div className="flex mx-auto ">
                    <div className="p-1 text-sm border-b">30-08-23</div>
                    <div className="p-1 text-sm border-b">
                      Won India vs Pakistan
                    </div>
                    <div className="p-1 text-sm border-b">352358.00</div>
                    <div className="p-1 border-b ">0.00</div>
                    <div className="p-1 border-b">5000.00</div>
                    <div className="p-1 border-b">347358.00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <table className="mt-6 md:mt-9 min-w-fit">
              <thead className="">
                <tr>
                  <td className=" border-b bg-[#233388] text-white border border-r-4 px-1  md:text-md ">
                    Date
                  </td>
                  <td className=" border-b bg-[#233388] text-white border  px-1 border-r-4 md:text-md ">
                    Description
                  </td>
                  <td className=" border-b bg-[#233388] text-white border  px-1 border-r-4 md:text-md ">
                    Prev.Bal
                  </td>
                  <td className=" border-b bg-[#233388] text-white border  px-1 border-r-4  md:text-md ">
                    Credit
                  </td>
                  <td className=" border-b bg-[#233388] text-white border  px-1 border-r-4 md:text-md ">
                    Debit
                  </td>
                  <td className=" border-b bg-[#233388] text-white px-1 md:text-md ">
                    Balance
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center bg-gray-100">
                  <td className="p-2 text-sm border-b ">30-08-23</td>
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
