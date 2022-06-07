import React from "react";
import Delevery from "../../assets/Group.svg";

const Content2 = () => {
  return (
    <div className="w-full h-[130px] flex items-center justify-around  bg-[#F2F5FF]">
      <div className="flex  ">
        <div>
          <img className="mr-4" src={Delevery}></img>
        </div>
        <div className="flex flex-col ">
          <div>
            <h2>Free Delivery</h2>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="flex  ">
        <div>
          <img className="mr-4" src={Delevery}></img>
        </div>
        <div className="flex flex-col">
          <div>
            <h2>Free Delivery</h2>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="flex  ">
        <div>
          <img className="mr-4" src={Delevery}></img>
        </div>
        <div className="flex flex-col">
          <div>
            <h2>Free Delivery</h2>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
