import React from "react";
import PortfolioImgCard from "./PortfolioImgCard";
import "./portfolio.css"
import { useTranslation } from "react-i18next";
const Portfolio = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="portfolio"
      className="profileSection flex justify-around flex-col items-center"
    >
      <header class="mb-2 mt-2 text-4xl font-bold">
        <div class="relative">
          <img src="/HomeImages/title.png" alt="" />
          <h1 class="lg:text-3xl ml-1 lg:ml-6 text-xl w-full absolute text-white font-bold top-1/2 lg:left-1/3 left-1/2 transform -translate-x-1/4 -translate-y-1/3">
            {t("OurPortfolio")}
          </h1>
        </div>
      </header>
      <div class="flex flex-col gap-y-3 text-center lg:text-xl  mt-8 justify-center  items-center  ">
        <p class=" text-white">
{t("PortofolioPara1")}        </p>
        <p class=" text-white">{t("PortofolioPara2")}</p>
      </div>
      <div className="flex  gap-4 pt-12">
        <PortfolioImgCard img="portfolio1.png" />
        <PortfolioImgCard img="portfolio2.png" />
        <PortfolioImgCard img="portfolio3.png" />
      </div>
    </section>
  );
};

export default Portfolio;
