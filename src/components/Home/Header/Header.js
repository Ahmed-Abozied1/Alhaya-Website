import React from "react";
import "./Header.css";
import ImageAndText from "../ImageAndText";

const Header = () => {
  return (
    <div className=" pt-3 md:px-20 px-8 ">
      <div className=" items-center flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-10  ">
        <div className="flex lg:gap-10 gap-8 flex-col ">
          <ImageAndText />
        </div>
        <div>
          <img
            src="/HomeImages/Maskgroup.png"
            alt="HeaderImage"
            className="w-auto object-contain  "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
