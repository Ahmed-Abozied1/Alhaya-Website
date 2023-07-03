import React from "react";
import "./Header.css";
import ImageAndText from "./ImageAndText";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  const isRTL = i18n.language === "ar";

  return (
    <div id="home" className="lg:pt-0 pt-5  md:px-20 px-8">
      <div
        className="items-center flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-10"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className={` flex lg:gap-10 gap-8 flex-col`}>
          <ImageAndText />
        </div>
        <div className={``}>
          <img
            src="/images/header.jpg"
            alt="HeaderImage"
            className="w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
