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
    <section id="alms" className="flex  flex-col justify-center items-center ">
     <header className="hd mb-2 mt-12 text-4xl font-bold flex justify-between w-full">
  <div className="relative titlee">
    <img src="/HomeImages/title.png" alt="" />
    <h1 className="lg:text-3xl   text-2xl  ">
      {t("OurAlms")}
    </h1>
  </div>

</header>

      <div className="relative   w-full flex justify-center items-end bg-navColor h-24">
        <p className="absolute flex justify-center items-center mb-4 font-bold text-white">
         {t("Donateashareofwithus")}
        </p>
        <div className="flex justify-center mb-14">
         <button onClick={handleshowAlmsCowComponent}>
         <div className="w-24  h-24 bg-main relative rounded-full border-4 border-navColor hover:border-dashed">
            <img
              src="/HomeImages/cow.png"
              alt=""
              className="absolute inset-0 m-auto w-16"
            />
          </div>
         </button>
          <div className="border-2 border-white h-22 ml-4 mr-4"></div>
         <button onClick={handleshowAlmsSheepComponent}> 
         <div className="w-24 bg-main h-24 relative rounded-full border-4 border-white hover:border-dashed">
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
