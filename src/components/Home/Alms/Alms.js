import React from "react";
import { useState } from "react";
import AlmsCowComponent from "./AlmsCowComponent";
import AlmsSheepComponent from "./AlmsSheepComponent";
import "./Alms.css"
import { useTranslation } from "react-i18next";
const Alms = () => {
  const { t, i18n } = useTranslation();
  const [showAlmsCowComponent, setAlmsCowComponent] = useState(true);
  
  const handleshowAlmsCowComponent = () => {
    setAlmsCowComponent(true);
  };

  const handleshowAlmsSheepComponent = () => {
    setAlmsCowComponent(false);
  };

  return (
    <section id="alms" class="flex  flex-col justify-center items-center ">
     <header class="hd mb-2 mt-12 text-4xl font-bold flex justify-between w-full">
  <div class="relative">
    <img src="/HomeImages/title.png" alt="" className="almsImgtitle"/>
    <h1 class="lg:text-3xl ml-6 lg:ml-0 text-xl w-full absolute text-black font-bold top-1/2 lg:left-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2">
      {t("OurAlms")}
    </h1>
  </div>
  {/* <div >
    <img className="hdImg" src="/HomeImages/RC.jpg" alt="" />
  </div> */}
</header>

      <div className="relative   w-full flex justify-center items-end bg-navColor h-24">
        <p className="absolute flex justify-center items-center mb-4 font-bold text-white">
         {t("Donateashareofwithus")}
        </p>
        <div className="flex justify-center mb-14">
         <button onClick={handleshowAlmsCowComponent}>
         <div className="w-24  h-24 bg-main relative rounded-full border-4 border-navColor">
            <img
              src="/HomeImages/cow.png"
              alt=""
              className="absolute inset-0 m-auto w-16"
            />
          </div>
         </button>
          <div class="border-2 border-white h-22 ml-4 mr-4"></div>
         <button onClick={handleshowAlmsSheepComponent}> 
         <div className="w-24 bg-main h-24 relative rounded-full border-4 border-white">
            <img
              src="/HomeImages/sheep.png"
              alt=""
              className="absolute inset-0 m-auto w-16"
            />
          </div>
         </button>
        </div>
      </div>
      <div>

      </div>
      {/* ** */}
      {showAlmsCowComponent ? <AlmsCowComponent /> : <AlmsSheepComponent />}

    </section>
  );
};

export default Alms;
