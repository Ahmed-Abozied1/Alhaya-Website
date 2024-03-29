import React from 'react'
import Layout from "../layout/Layout";
import Header from "../components/Home/Header/Header";
import ScrollVedios  from "../components/Home/ScrollVedio/ScrollVedios"
import AboutUs  from "../components/Home/About/AboutUs"
import Services  from "../components/Home/Services/Services"
import Alms  from "../components/Home/Alms/Alms"
import Portfolio  from "../components/Home/Portfolio/Portfolio"
import Questions  from "../components/Home/Questions/Questions"
import MyAboutUs from '../components/Home/MyAboutUs/MyAboutUs';
import MyServices from '../components/Home/MyServices/MyServices';
import Carousell from '../components/Carousell/Carousell';
const HomeScreen = () => {
  return (
    <Layout>
     <div className=' mx-auto  min-h-screen w-full bg-main'>
      <Header/>
      {/* <ScrollVedios/> */}
      <MyAboutUs/>
      <MyServices/>
      <div className='text-center w-full '>
              <Carousell/>

      </div>
      {/* <AboutUs/> */}
      {/* <Services/> */}
      {/* <Alms/> */}
      {/* <Portfolio/> */}
      {/* <Questions/> */}
     </div>
  
  </Layout>
  )
}

export default HomeScreen