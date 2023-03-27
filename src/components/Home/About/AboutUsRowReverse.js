import React from 'react'
import "./About.css"

const AboutUsRowReverse = ({title,para, imgSrc}) => {

  return (
    <div className=" lg:grid lg:grid-cols-2 lg:gap-10 items-center">
    <img
      src={`/HomeImages/${imgSrc}`}
      alt="Mobile app"
      className="w-25 object-contain w-full lg:w-auto flex justify-center"
    />

    <div className="flex  lg:gap-4 gap-2 flex-col"  >
      <h1 className="xl:text-3xl  aboutTitle  text-2xl lg:mt-6 mt-12 capitalize font-sans font-bold "
      >
        {title}
      </h1>
      <p className=" para aboutTitle">{para}</p>
    </div>
  </div>
       )
}

export default AboutUsRowReverse