import React from "react";
import "./About.css";

const AboutUsRow = ({ title, para, imgSrc }) => {
  return (
    // <div className="  lg:grid lg:grid-cols-2 lg:gap-10 lg:mr-2 mr-0 items-center flex  lg:flex-col flex-col-reverse ">
    //   <div className="flex  lg:gap-2 gap-2 flex-col ">
    //     <h1 className="xl:text-3xl  text-2xl  aboutTitle   capitalize font-sans font-bold ">
    //       {title}
    //     </h1>
    //     <p className=" para  aboutTitle ">{para}</p>
    //   </div>
    //   <img
    //     src={`/HomeImages/${imgSrc}`}
    //     alt="Mobile app"
    //     className=" object-contain   lg:w-auto flex justify-center"
    //   />
    // </div>
  );
};

export default AboutUsRow;
