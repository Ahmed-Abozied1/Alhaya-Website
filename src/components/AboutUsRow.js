import React from 'react'

const AboutUsRow = ({title,para, imgSrc}) => {
  return (
<div className=" lg:grid lg:grid-cols-2 lg:gap-10 items-center">
       
       <div className="flex  lg:gap-10 gap-6 flex-col">

         <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
         {title}
         </h1>
         <p className="text-black font-normal text-xl leading-8  xl:text-base  xl:leading-8">
        {para}
         </p>
         
       </div>
       <div className='w-full lg:w-auto flex justify-center'>
         <img
        
           src={`/HomeImages/${imgSrc}`}
           alt="Mobile app"
           className="w-25 object-contain "
         />
       </div>
     </div>  
     )
}

export default AboutUsRow