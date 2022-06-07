import React from "react";

import Pic5 from "../../assets/ships.svg";

const Content6 = () => {
  return (
    <div className="flex flex-col bg-[#E5E5E5] w-full h-[800px] justify-center border-t-2  divide-y divide-dashed hover:divide-solid border-[#D7D6D6]">
      <div className=" flex flex-col justify-center items-center p-12">
        <div className="not-italic font-bold text-xl text-[#333333]">
          <h2>Inspiration Collection</h2>
        </div>
        <div className="not-italic font-light text-lg text-[#333333]">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="flex justify-around ">
        <div>
          <img className="" src={Pic5} alt=""></img>
        </div>
        <div className=" ">
          <img className=" " src={Pic5} alt=""></img>
        </div>
        <div>
          <img className="" src={Pic5} alt=""></img>
        </div>
      </div>
      <div className=" flex not-italic font-bold text-[24px] text-[#333333] justify-around  p-6">
        <div className=" flex flex-col justify-center items-center p-12">
          <div className="not-italic font-bold text-xl text-[#333333]">
            <h2>Inspiration Collection</h2>
          </div>
          <div className="not-italic font-light text-lg text-[#333333]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center p-12">
          <div className="not-italic font-bold text-xl text-[#333333]">
            <h2>Inspiration Collection</h2>
          </div>
          <div className="not-italic font-light text-lg text-[#333333]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center p-12">
          <div className="not-italic font-bold text-xl text-[#333333]">
            <h2>Inspiration Collection</h2>
          </div>
          <div className="not-italic font-light text-lg text-[#333333]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content6;
