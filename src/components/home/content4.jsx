import React from "react";
import Girl from "../../assets/image97.svg";

const content4 = () => {
  return (
    <div className="flex   bg-[#DFE9F4] justify-evenly w-full   h-[874px]">
      <div className="flex flex-col  items-start justify-center ">
        <div className=" text-[#333333] text-3xl font-bold not-italic ml-8 m-10 p-4">
          Beautify Your Space
        </div>
        <div className="not-italic font-light text-[20px] p-4 text-[#333333] ml-8 m-10">
          Do eiusmod tempor incididunt ut labore et
          <br /> dolore magna aliqua. Ut enim ad minim veniam,
          <br /> quis nostrud exercitation ullamco laboris.
        </div>
        <div className="ml-8 p-4  m-10">
          <button className="rounded-full bg-[#364d79] w-[229px] h-[70px] text-[20px] text-[#fff] ">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="flex justify-between  items-center ">
        <div>
          <img className="rounded-br-[70px] rounded-tl-[70px]" src={Girl}></img>
        </div>
      </div>
    </div>
  );
};

export default content4;
