import React from "react";
import Header from "../components/Header";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Matka() {
  return (
    <>
      <div className="flex justify-center min-h-screen bg-rose-50">
        {/* Card Container */}
        <div className="relative flex flex-col shadow-2xl md:bg-white md:p-6 rounded-2xl md:space-y-0 md:m-0">
          {/* Header */}
          <Header />
          {/* Hero Section */}
          <div className="relative bg-[#82c6db] w-full min-h-full pb-8">
            <div className="bg-[#d9d9d9] w-full h-11 mt-4 md:h-14 md:mt-8 shadow-md flex ">
              <Link to="/">
                {" "}
                <IoReturnUpBackSharp className="flex w-6 h-6 mt-2 ml-2 md:w-9 md:h-9" />
              </Link>

              <span className="flex items-center justify-center m-auto font-sans font-semibold md:text-lg">
                Satta-Matka
              </span>
            </div>

            {/* Table */}
            <table className="min-w-full m-auto mt-6 md:mt-8">
              <tbody className="">
                <tr className="flex flex-col text-center">
                  <td className="bg-[#797373] text-white text-lg p-1">
                    GALI -30-08-2023
                  </td>
                  <td className="p-1 text-lg">30-Aug-2023 9:00 PM</td>
                  <td className="bg-[#797373] text-white text-lg p-1">
                    GALI -30-08-2023
                  </td>
                  <td className="p-1 text-lg">30-Aug-2023 9:00 PM</td>
                  <td className="bg-[#797373] text-white text-lg p-1">
                    GALI -30-08-2023
                  </td>
                  <td className="p-1 text-lg">30-Aug-2023 9:00 PM</td>
                  <td className="bg-[#797373] text-white text-lg p-1">
                    GALI -30-08-2023
                  </td>
                  <td className="p-1 text-lg">30-Aug-2023 9:00 PM</td>
                  <td className="bg-[#797373] text-white text-lg p-1">
                    GALI -30-08-2023
                  </td>
                  <td className="p-1 text-lg">30-Aug-2023 9:00 PM</td>
                  <td className="bg-[#797373] text-white text-lg p-1">
                    GALI -30-08-2023
                  </td>
                  <td className="p-1 text-lg">30-Aug-2023 9:00 PM</td>
                  <td className="bg-[#797373] text-white text-lg p-1">
                    GALI -30-08-2023
                  </td>
                  <td className="p-1 text-lg">30-Aug-2023 9:00 PM</td>
                  <td className="bg-[#797373] text-white text-lg p-1">
                    GALI -30-08-2023
                  </td>
                  <td className="p-1 text-lg">30-Aug-2023 9:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Matka;
