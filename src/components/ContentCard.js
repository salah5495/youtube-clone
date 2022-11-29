import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const ContentCard = ({ photo, title, profile }) => {
  return (
    <div className="mx-12 sm:mx-0">
      {/* Thumbnail */}
      <div className="flex   h-48   justify-center shadow-lg  shadow-gray-400 rounded-[0.7rem]  md:h-32 lg:h-48  xxl:h-60 overflow-hidden">
        <img
          src={photo}
          alt=""
          className="object-cover w-full    rounded-[0.7rem]  h-full md:h-32 lg:h-full hover:scale-110 duration-200 ease-out"
        />
      </div>
      {/* Description */}
      <div className="flex items-center pt-2">
        <div className="w-10 h-10 shrink-0 ">
          <img src={profile} alt="" className="rounded-full" />
        </div>

        <div className=" overflow-hidden   flex flex-wrap items-center">
          <p className="font-semibold text-[14px] pl-2    flex items-center">
            {title}
          </p>
        </div>
      </div>
      {/* Info */}
      <div className="pl-12 text-gray-600 ">
        <p className="text-[12px]  pt-[2px]">WorldCup Live</p>
        <div className="flex items-center">
          <p className="text-[12px] pt-[1px] pr-1">
            108,500 views &#x2022; 2 days ago
          </p>
          <HiCheckBadge />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
