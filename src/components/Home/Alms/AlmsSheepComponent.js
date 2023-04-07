import React from 'react'

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AlmsSheepComponent = () => {
    const [counter, setCounter] = useState(1);
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
  // const increaseCounter = () => {
  //   setCounter(counter + 1);
  //   if (counter > 2) {
  //     setCounter(3);
  //   }
  // };
  // const decreaseCounter = () => {
  //   setCounter(counter - 1);
  //   if (counter <= 1) {
  //     setCounter(1);
  //   }
  // };
  const handleShareButtonClick = () => {
    // const message = `  I want to donate ${counter} shares of Sheep  اريد التبرع ب ${counter} سهم من الخروف`;
    const message = `  I want to donate a Sheep  اريد التبرع ب الخروف`;

    const phone = '+201021892204';
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <div className="flex flex-col m-6  AlmsCon   items-center  w-full justify-evenly text-center">
    {/* <div>
      <div className="flex flex-wrap justify-center ">
        {[...Array(3)].map((_, i) => (
            <div key={i} className="w-20 h-20 rounded-full bg-navColor m-2 flex items-center justify-center">
  <img src="/HomeImages/sheep.png" alt="" className='w-16'/>
</div>
        ))}
      </div>
      <span className="flex justify-center  items-center lg:m-6 m-2 text-2xl ">
        {" "}
        ={" "}
      </span>
    </div> */}

    <div className=" bigCow lg:w-32 lg:h-32 w-28 h-28 bg-navColor flex-col items-center justify-center   rounded-full">
      <img
        src={`/HomeImages/sheep.png`}
        alt=""
        className=" inset-0 m-auto w-18"
      />
          <p className="font-bold lg:text-xl text-sm mt-4 w-full mb-2">  {t("50$Dollar")}</p>

    </div>
{/* 
    <div className="font-semibold">
      <p> {t("SharepriceSheep")}</p>
    </div>

    <div className="btnClick flex flex-row justify-around w-full">
      <button onClick={decreaseCounter} className="text-white text-3xl">
        -
      </button>
      <p className="text-white text-2xl mt-1">{counter}</p>
      <button onClick={increaseCounter} className="text-white text-2xl">
        +
      </button>
    </div> */}

    <button onClick={handleShareButtonClick} 
    className="btnShare flex flex-row justify-around w-full"
    dir={isRTL ? "rtl" : "ltr"}

    >
        <p className="text-black text-sm flex items-center justify-center mt-2 font-semibold">
        {t("Donate")}  
        </p>
        <img
          src="/HomeImages/donate.png"
          className="w-7 h-7 mt-1 flex items-center"
          alt=""
        />
      </button>
      <div className="flex flex-col gap-y-3 text-center lg:text-xl mb-7  justify-center  items-center  ">
          <p className=" text-black">
            {t("servicesPara1")}
          </p>
          <p className=" text-black">
          {t("servicesPara2")}

          </p>
        </div>
  </div>
  )
}

export default AlmsSheepComponent