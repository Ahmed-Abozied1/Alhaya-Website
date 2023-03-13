import React from 'react'

const ServicesSacrifice = ({img }) => {
  return (
    <div className=" mb-4 hover:cursor-pointer ServiceCardImg bg-white">
    <img
      className="object-cover"
      src={`/HomeImages/ServicesImage/${img}`}
      alt="Cow"
    />
   
    
  </div>
  
  )
}

export default ServicesSacrifice