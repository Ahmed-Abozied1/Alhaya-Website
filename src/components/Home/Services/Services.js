import React from "react";
import AboutUsRowChart from "./ServicesRowChart";
import ServicesSacrifice from "./ServicesSacrifice";
import "./Services.css"
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="flex mt-10 flex-col justify-center items-center  " id="services">
      <header className="mb-2 text-4xl font-bold">
        <div className="relative titlee">
          <img src="/HomeImages/title.png" alt="" className=" "/>
          <h1 className="lg:text-3xl text-2xl "
          >
          {t("OurServices")}
          </h1>
        </div>
      </header>
      <section className=" flex p-4 flex-col justify-between items-center servicesCon">
        <div className="flex flex-row mb-4 justify-evenly w-full" dir={isRTL ? "rtl" : "ltr"}>
          <AboutUsRowChart img="charity.png" title="charity" title_ar="الصدقة" className="mr-4" />
          <AboutUsRowChart img="sack.png" title="Feeding" title_ar="الاطعام" className="mr-4" />
          <AboutUsRowChart img="wedding-vows.png" title="Vow" title_ar=" النذر" className="mr-4" />
          <AboutUsRowChart img="meat.png" title="Aqeeqah" title_ar="العقائق" className="mr-4" />
        </div>
        <div className="flex flex-row mb-4  justify-evenly w-full">
          <div className="flex flex-col justify-start items-center">
            <div className="cowImgg ">
              <img src="/HomeImages/cow-1.png" width="80" alt="" />
            </div>
            <div className="whiteSquar text-center font-bold">
              {t("Thecow")} <br />
              <span>{t("300$Dollar")}</span>
            </div>
            <div className="text">
              <ServicesSacrifice img="Cow.png" />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center">
          <div className="sheepImgg ">
              <img src="/HomeImages/sheep.png" width="80" alt="" />
            </div>
            <div className="whiteSquar text-center font-bold ">
              {t("Thesheep")} <br />
              <span>{t("50$Dollar")}</span>
            </div>
            <div className="text">
              <ServicesSacrifice img="sheep.png" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 text-center lg:text-xl  mt-8 justify-center  items-center  ">
          <p className=" text-white">
            {t("servicesPara1")}
          </p>
          <p className=" text-white">
          {t("servicesPara2")}

          </p>
        </div>
      </section>
    </section>
  );
};

export default Services;
