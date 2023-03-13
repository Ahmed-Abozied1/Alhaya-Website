import React from 'react'

const ServicesSacrifice = ({img ,title,price}) => {
  return (
    <div className=" mb-4 hover:cursor-pointer ServiceCardImg bg-white">
    <img
      classNam="object-center "
      src={`/HomeImages/ServicesImage/${img}`}
      alt="Cow"
    />
    <div className=' w-full z-10 priceCard text-black font-bold'>
      <p>{title} <br/><span>{price}</span></p>
    </div>
  </div>
  
  )
}

export default ServicesSacrifice