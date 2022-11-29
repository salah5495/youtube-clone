import { FiMenu, FiSearch } from "react-icons/fi";
import { GrAppsRounded } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex items-center  justify-between px-5 lg:px-10 py-3">
      {/* Left Side */}
      <div className="flex itSeBs-center shrink-0  ">
        <FiMenu className="w-6 h-6" />
        <div className="pl-4">
          <img src={logo} alt="" className="w-32 " />
        </div>
      </div>
      {/* Middle */}
      <div className="hidden relative sm:flex w-full max-w-[40rem] mx-10  items-center">
        <input
          type="search"
          placeholder="Search..."
          className="outline-0 bg-[#dae0e6] rounded-full pl-10 py-2 w-full "
        />
        <div className="absolute left-4">
          <FiSearch />
        </div>
      </div>
      {/* Right */}
      <div className=" flex h-full  items-center gap-3 ">
        <FiSearch className="sm:hidden h-6 w-6" />
        <GrAppsRounded className="sm:hidden h-6 w-6" />
        <IoMdSettings className=" h-6 w-6" />
        <div className=" flex items-center bg-red-500 p-1 rounded-full text-white">
          <FaUser className=" h-5 w-5  ml-1.5 mr-1" />
          <p className="font-bold mr-1.5 whitespace-nowrap">Log in</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
