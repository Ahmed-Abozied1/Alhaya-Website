import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AlmsCowComponent = () => {
  const [counter, setCounter] = useState(1);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // const increaseCounter = () => {
  //   setCounter(counter + 1);
  //   if (counter > 7) {
  //     setCounter(8);
  //   }
  // };

  // const decreaseCounter = () => {
  //   setCounter(counter - 1);

  //   if (counter <= 1) {
  //     setCounter(1);
  //   }
  // };

  const handleShareButtonClick = () => {
    // const message = `  I want to donate ${counter} shares of Cow  اريد التبرع ب ${counter} سهم من البقره`;
    const message = `  I want to donate a Cow  اريد التبرع ب بقره`;

    const phone = "+201021892204";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col m-6  AlmsCon   items-center  w-full justify-evenly text-center">
      {/* <div>
        <div className="flex flex-wrap justify-center ">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`w-20 h-20 rounded-full bg-navColor  m-2 flex items-center justify-center`}
            >
              <img src="/HomeImages/cow.png" alt="" />
            </div>
          ))}
        </div>
        <span className="flex justify-center  items-center lg:m-6 m-2 text-2xl ">
          {" "}
          ={" "}
        </span>
      </div> */}

     


        <div className="bigCow lg:w-32 lg:h-32 w-28 h-28 bg- bg-navColor  flex-col items-center justify-center rounded-full">
               <img src={`/HomeImages/cow.png`} alt="" className="inset-0 m-auto " />
               <p className="font-bold lg:text-xl text-sm  mt-4 mb-2"> {t("300$Dollar")}</p>

    </div>

    {/* <div className="font-semibold">
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

      <button
        onClick={handleShareButtonClick}
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
  );
};

export default AlmsCowComponent;
