import React from "react";
import { ImHome } from "react-icons/im";
import { MdVideoCameraBack } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import { AiOutlineFile } from "react-icons/ai";
import { BsSkipEndFill } from "react-icons/bs";
import SideBtn from "./SideBtn";

const Sidebar = () => {
  const sideItems = [
    { name: "Main", icon: <ImHome /> },
    { name: "Mini", icon: <MdVideoCameraBack /> },
    { name: "Channels", icon: <AiOutlineFile /> },
    { name: "Collection", icon: <BiLibrary /> },
    { name: "Past", icon: <BsSkipEndFill /> },
  ];
  return (
    <div className="hidden md:flex flex-col gap-8 pt-4 items-center px-2 lg:px-7  ">
      {sideItems.map((item) => (
        <SideBtn name={item.name} icon={item.icon} />
      ))}
    </div>
  );
};

export default Sidebar;
