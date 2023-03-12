import React from 'react'

const AboutUsRow = ({title,para, imgSrc}) => {
  return (
<div className=" lg:grid lg:grid-cols-2 lg:gap-10 items-center flex lg:flex-col flex-col-reverse">
       
       <div className="flex  lg:gap-4 gap-2 flex-col">

         <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
         {title}
         </h1>
         <p className=" para   ">
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