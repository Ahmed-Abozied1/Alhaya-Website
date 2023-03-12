import React from 'react'

const AboutUsRowReverse = ({title,para, imgSrc}) => {
  return (
<div className=" lg:grid lg:grid-cols-2 lg:gap-10 items-center">
<div className="w-full lg:w-auto flex justify-center">

         <img
        
           src={`/HomeImages/${imgSrc}`}
           alt="Mobile app"
           className="w-25 object-contain "
         />
       </div>
       <div className="flex  lg:gap-10 gap-6 flex-col">

         <h1
          className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
         {title}
         </h1>
         <p className="text-black font-normal  leading-8 text-xl xl:text-base xl:leading-8">
        {para}
         </p>
         
       </div>
      
     </div>  )
}

export default AboutUsRowReverse