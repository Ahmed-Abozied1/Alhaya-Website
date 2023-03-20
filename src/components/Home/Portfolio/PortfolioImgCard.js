import React from 'react'
import "./portfolio.css"

const PortfolioImgCard = ({img}) => {
  return (
    <div className='flex  flex-col items-center'>
    <div className="rounded-full imgCard lg:w-52 lg:h-52 w-24 h-24 relative  lg:flex grid grid-flow-col justify-center items-center" >
      <img src={`/HomeImages/PortfolioImages/${img}`} alt="" className="object-cover overflow-hidden absolute  h-full rounded-full" />
    </div>
  </div>
  
  
  )
}

export default PortfolioImgCard
