import React from 'react'

const ServicesRowChart = ({img ,title}) => {
  return (
    <>
<div className='flex flex-col items-center'>
<div className="rounded-full lg:w-20 lg:h-20 w-16 h-16 bg-main lg:flex grid grid-flow-col justify-center  items-center">
  <img src={`/HomeImages/${img}`} alt="" className="lg:w-12 lg:h-12 w-10 h-10" />
</div>
<p className='mt-4 text-white lg:text-xl '>{title}</p>
</div>

    </>
  )
}

export default ServicesRowChart