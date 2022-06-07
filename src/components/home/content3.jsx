import React from "react";
import Pic1 from "../../assets/living.png";

const Content3 = () => {
  return (
    <div className="flex flex-col bg-[#E5E5E5] w-full h-[670px] justify-center">
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
          <img className="rounded-tl-[70px]" src={Pic1} alt=""></img>
        </div>
        <div className="mt-[-30px] ">
          <img className="rounded " src={Pic1} alt=""></img>
        </div>
        <div>
          <img className="rounded-br-[70px]" src={Pic1} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Content3;
