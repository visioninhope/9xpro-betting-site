import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function PasswordApp() {
  const [open, setOpen] = useState(false);

  // handle toggle

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="relative w-full">
        <input
          type={open === false ? "password" : "text"}
          className="bg-[#82c6db] border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 w-3/4 "
        />
        <div className="absolute text-xl top-2 right-24">
          {open === false ? (
            <IoMdEye onClick={handleToggle} />
          ) : (
            <IoMdEyeOff onClick={handleToggle} />
          )}
        </div>
      </div>
    </>
  );
}

export default PasswordApp;
