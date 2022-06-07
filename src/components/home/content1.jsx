import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";

const contentStyle = {
  width: "100%",
  height: "690px",
  color: "black",
  background: "#364d79",
};

const Content1 = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} style={contentStyle}>
      <div className="bg-[url('./assets/bg.svg')] bg-cover bg-center h-[880px]">
        <div className="flex flex-col flex-2  justify-evenly items-start bg-[#DFE9F4] w-[580px] ml-[905px] mt-16 h-[443px] rounded">
          <div className=" h-[20px] ml-8"> New Arrival</div>
          <div className="h-[127px] text-[#054C73] text-5xl font-bold not-italic ml-8">
            Discover Our
            <br />
            New Collection
          </div>
          <div className="not-italic font-light text-lg text-[#333333] ml-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            <br /> elit tellus, luctus nec ullamcorper mattis.
          </div>
          <div className="ml-8 ">
            <button className="rounded-full bg-[#364d79] w-[229px] h-[70px] text-[#fff]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[url('./assets/bg.svg')] bg-cover bg-center h-[880px]"></div>
      <div className="bg-[url('./assets/bg.svg')] bg-cover bg-center h-[880px]"></div>
    </Carousel>
  );
};

export default Content1;
