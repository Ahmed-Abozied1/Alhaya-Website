import React from 'react'
import Layout from "../layout/Layout";
import Header from "../components/Home/Header/Header";
import ScrollVedios  from "../components/Home/ScrollVedios"
import AboutUs  from "../components/Home/AboutUs"
import Services  from "../components/Home/Services"
import Alms  from "../components/Home/Alms"
import Portfolio  from "../components/Home/Portfolio"
import Questions  from "../components/Home/Questions"

const HomeScreen = () => {
  return (
    <Layout>
     <div className='container mx-auto min-h-screen px-2  bg-main'>
      <Header/>
      <ScrollVedios/>
      <AboutUs/>
      <Services/>
      <Alms/>
      <Portfolio/>
      <Questions/>
     </div>
  
  </Layout>
  )
}

export default HomeScreen