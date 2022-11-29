import React from "react";

const SideBtn = ({ name, icon }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center hover:bg-gray-300 w-full py-1 rounded-[0.5rem] duration-200 ease-out lg:gap-4 md:py-3 md:px-3">
      <div className="text-[20px] lg:text-[28px]">{icon}</div>
      <p className="text-[11px] lg:text-[17px]">{name}</p>
    </div>
  );
};

export default SideBtn;
