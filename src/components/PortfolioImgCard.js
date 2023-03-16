import React from 'react'

const PortfolioImgCard = ({img}) => {
  return (
    <div className='flex  flex-col items-center'>
    <div className="rounded-full lg:w-52 lg:h-52 w-28 h-28 relative  lg:flex grid grid-flow-col justify-center items-center" style={{border: "4px solid white"}}>
      <img src={`/HomeImages/PortfolioImages/${img}`} alt="" className="object-cover overflow-hidden absolute w-full h-full rounded-full" />
    </div>
  </div>
  
  
  )
}

export default PortfolioImgCard
