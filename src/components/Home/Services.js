import React from 'react'
import AboutUsRowChart from '../ServicesRowChart';
import ServicesSacrifice from '../ServicesSacrifice';

const Services = () => {
  return (
    <div class="flex flex-col justify-center items-center ">
  <header class="mb-2 text-4xl font-bold">
  <div class="relative">
    <img src="/HomeImages/title.png" alt=""/>
    <h1 class="text-2xl w-full absolute text-black font-bold top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2">
      Our Services
    </h1>
  </div>
</header>

<section class="flex flex-col justify-between items-center servicesCon">
  <div class="flex flex-row mb-4 justify-evenly w-full">
    <AboutUsRowChart img="charity.png" title="charity" class="mr-4" />
    <AboutUsRowChart img="sack.png" title="Feeding" class="mr-4" />
    <AboutUsRowChart img="wedding-vows.png" title="Vow" class="mr-4" />
    <AboutUsRowChart img="meat.png" title="Aqeeqah" class="mr-4" />
  </div>
  <div class="flex flex-row mb-4  justify-evenly w-full">
    <ServicesSacrifice img="Cow.png" title="The cow" price="300 $ Dollar"/>
    <ServicesSacrifice img="sheep.png" title="The Sheep " price="50 $Dollar"/>

  </div>
  <div class="flex flex-col gap-y-3 text-center mt-8 justify-center  items-center  ">
    <p class=" text-white">If by feeding, 10$ Dollar will be added for the lamb and 50$ for the Caw</p>
    <p class=" text-white">Fees include execution fees and administrative expenses</p>
  </div>
</section>

</div>



  );
  
}

export default Services