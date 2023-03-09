import { useState } from 'react';
import Slider from 'react-slick';
// import icons


import img1 from "/HomeImages/ScrollVedioImage/img1.png";
import img2 from "/HomeImages/ScrollVedioImage/img2.png";
import img3 from "/HomeImages/ScrollVedioImage/img3.png";



const images = [img1, img2, img3, img1];





function ScrollVedios() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    beforeChange: (current, next)=>setSlideIndex(next),
    centerMode: true,
    
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
         
        }
      }]
  };
  return (
    <div className="container">
      <h2 className='header'> React Carusel</h2>
        <div className="slider">
      <Slider {...settings}>
          {
            images.map((img, index)=>(
              <div className={index === slideIndex ? 'slide slide-active': 'slide'} key={index}>
                <img src={img} alt="" />
              </div>
            ))
          }
      </Slider>
        </div>
    </div>
  );
}

export default ScrollVedios;
