import React from "react";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="flex h-28 items-center justify-between ">
      <div className=" ml-[120px] cursor-pointer ">
        {" "}
        <img src={Logo} alt=""></img>
      </div>
      <div className="flex mr-8 font-serif ">
        <div className="m-8 cursor-pointer rounded-full p-3 hover:bg-[#F2F5FF]">
          Home
        </div>
        <div className="m-8 cursor-pointer rounded-full p-3 hover:bg-[#F2F5FF]">
          Srvices
        </div>
        <div className="m-8 cursor-pointer rounded-full p-3 hover:bg-[#F2F5FF]">
          Doctors
        </div>
        <div className="m-8 cursor-pointer rounded-full p-3 hover:bg-[#F2F5FF]">
          Products
        </div>
        <div className="m-8 cursor-pointer rounded-full p-3 hover:bg-[#F2F5FF]">
          Gallery
        </div>
      </div>
    </div>
  );
};

export default Navbar;
