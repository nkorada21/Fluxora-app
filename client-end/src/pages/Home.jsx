import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import BillingPlan from '../components/BillingPlan'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AiTools/>
      <Testimonial />
      <BillingPlan />
      <Footer />
    </>
  )
}

export default Home
