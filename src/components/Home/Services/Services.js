import React from "react";
import AboutUsRowChart from "./ServicesRowChart";
import ServicesSacrifice from "./ServicesSacrifice";
import "./Services.css"
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section class="flex mt-10 flex-col justify-center items-center  " id="services">
      <header class="mb-2 text-4xl font-bold">
        <div class="relative titlee">
          <img src="/HomeImages/title.png" alt="" className=" "/>
          <h1 class="lg:text-3xl text-2xl "
          >
          {t("OurServices")}
          </h1>
        </div>
      </header>
      <section class=" flex p-4 flex-col justify-between items-center servicesCon">
        <div class="flex flex-row mb-4 justify-evenly w-full" dir={isRTL ? "rtl" : "ltr"}>
          <AboutUsRowChart img="charity.png" title="charity" title_ar="الصدقة" class="mr-4" />
          <AboutUsRowChart img="sack.png" title="Feeding" title_ar="الاطعام" class="mr-4" />
          <AboutUsRowChart img="wedding-vows.png" title="Vow" title_ar=" النذر" class="mr-4" />
          <AboutUsRowChart img="meat.png" title="Aqeeqah" title_ar="العقائق" class="mr-4" />
        </div>
        <div class="flex flex-row mb-4  justify-evenly w-full">
          <div className="flex flex-col justify-start items-center">
            <div class="cowImgg ">
              <img src="/HomeImages/cow-1.png" width="80" alt="" />
            </div>
            <div class="whiteSquar text-center font-bold">
              {t("Thecow")} <br />
              <span>{t("300$Dollar")}</span>
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
              {t("Thesheep")} <br />
              <span>{t("50$Dollar")}</span>
            </div>
            <div class="text">
              <ServicesSacrifice img="sheep.png" />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-y-3 text-center lg:text-xl  mt-8 justify-center  items-center  ">
          <p class=" text-white">
            {t("servicesPara1")}
          </p>
          <p class=" text-white">
          {t("servicesPara2")}

          </p>
        </div>
      </section>
    </section>
  );
};

export default Services;
