import React from 'react'

const AlmsAnimalComponent = ({img,background,width,height}) => {
  return (
    <div className={`w-${width} bg-${background} h-${height} relative rounded-full`}>
    <img src={`/HomeImages/${img}`}  alt='' className='absolute inset-0 m-auto w-14'/>
  </div>
   )
}

export default AlmsAnimalComponent