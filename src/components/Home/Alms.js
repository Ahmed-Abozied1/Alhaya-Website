import React from "react";
import AlmsCowComponent from "../AlmsCowComponent";
import AlmsSheepComponent from "../AlmsSheepComponent";

const Alms = () => {
  
  return (
    <div class="flex  flex-col justify-center items-center ">
      <header class="mb-2 mt-12 text-4xl font-bold">
        <div class="relative">
          <img src="/HomeImages/title.png" alt="" />
          <h1 class="text-3xl w-full absolute text-black font-bold top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2">
            Our Alms
          </h1>
        </div>
      </header>
      <div className="relative  w-full flex justify-center items-end bg-navColor h-24">
        <p className="absolute flex justify-center items-center mb-4 font-bold text-white">
          Donate a share of Cow with us
        </p>
        <div className="flex justify-center mb-14">
          <div className="w-24  h-24 bg-main relative rounded-full border-4 border-navColor">
            <img
              src="/HomeImages/cow.png"
              alt=""
              className="absolute inset-0 m-auto w-16"
            />
          </div>
          <div class="border-2 border-white h-22 ml-4 mr-4"></div>
          <div className="w-24 bg-main h-24 relative rounded-full border-4 border-white">
            <img
              src="/HomeImages/sheep.png"
              alt=""
              className="absolute inset-0 m-auto w-16"
            />
          </div>
        </div>
      </div>
      {/* ** */}
    <AlmsCowComponent/>
    {/* <AlmsSheepComponent/> */}
    </div>
  );
};

export default Alms;
