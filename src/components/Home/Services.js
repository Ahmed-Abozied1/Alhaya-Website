import React from "react";
import AboutUsRowChart from "../ServicesRowChart";
import ServicesSacrifice from "../ServicesSacrifice";

const Services = () => {
  return (
    <div class="flex flex-col justify-center items-center ">
      <header class="mb-2 text-4xl font-bold">
        <div class="relative">
          <img src="/HomeImages/title.png" alt="" className=" "/>
          <h1 class="lg:text-3xl ml-2  lg:ml-5 text-xl w-full absolute text-black font-bold top-1/2 lg:left-1/3 left-1/2 transform -translate-x-1/4 -translate-y-1/2">
            Our Services
          </h1>
        </div>
      </header>

      <section class="flex flex-col justify-between items-center servicesCon">
        <div class="flex flex-row mb-4 justify-evenly w-full">
          <AboutUsRowChart img="charity.png" title="charity" class="mr-4" />
          <AboutUsRowChart img="sack.png" title="Feeding" class="mr-4" />
          <AboutUsRowChart img="wedding-vows.png" title="Vow" class="mr-4" />
          <AboutUsRowChart img="meat.png" title="Aqeeqah" class="mr-4" />
        </div>
        <div class="flex flex-row mb-4  justify-evenly w-full">
          <div className="flex flex-col justify-start items-center">
            <div class="cowImgg ">
              <img src="/HomeImages/cow-1.png" width="80" alt="" />
            </div>
            <div class="whiteSquar text-center font-bold">
              The cow <br />
              <span>300 $ Dollar</span>
            </div>
            <div class="text">
              <ServicesSacrifice img="Cow.png" />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center">
          <div class="sheepImgg ">
              <img src="/HomeImages/sheep.png" width="80" alt="" />
            </div>
            <div class="whiteSquar text-center font-bold ">
              The sheep <br />
              <span>50 $ Dollar</span>
            </div>
            <div class="text">
              <ServicesSacrifice img="sheep.png" />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-y-3 text-center lg:text-xl  mt-8 justify-center  items-center  ">
          <p class=" text-white">
            If by feeding, 10$ Dollar will be added for the lamb and 50$ for the
            Caw
          </p>
          <p class=" text-white">
            Fees include execution fees and administrative expenses
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
