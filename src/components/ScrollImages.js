// import { useState } from "react";
// import Slider from "react-slick";

// import { Images } from "../Data/Images";
// import { Vedios } from "../Data/Vedios";
// import PortfolioImgCard from "./PortfolioImgCard";
// import ScrollCards from "./ScrollCard";

// function ScrollImages() {
//   const [slideIndex, setSlideIndex] = useState(0);

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 1000,
//     beforeChange: (current, next) => setSlideIndex(next),
//     centerMode: true,
//     arrows: false,
//     customPaging: (current, next) => (
//       <div className={current === slideIndex ? "dot dot-active" : "dot"}></div>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
          
//         },
//       },
//     ],
//   };
//   return (
//     <section className=" conProfile  bg-navColor">
//       <div className="slider">
//         <Slider {...settings}>
//           {/* {Vedios.map((vedio, index) => (
//             <div
//               className={index === slideIndex ? "slide slide-active" : "slide"}
//               key={index}
//             >
//                 <ScrollCards vedio={vedio}/>
//             </div>
//           ))} */}
//           {/* {Vedios.map((img, index) => (
//             <div
//               className={index === slideIndex ? "slide slide-active" : "slide"}
//               key={index}
//             >
//                 <PortfolioImgCard img={img}/>
//             </div>
//           ))} */}
//         </Slider>
//       </div>
//     </section>
//   );
// }

// export default ScrollImages;
