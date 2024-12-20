import React from 'react'
import Hero from '../Components/Hero'
import FeaturedProduct from '../Components/FeaturedProduct'
import RecentProduct from '../Components/RecentProduct'
import BestSeller from '../Components/BestSeller'
import Blog from '../Components/Blog'
import Hub from '../Components/Hub'
import Footer from '../Components/Footer'

const Landingpage = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProduct/>
      <RecentProduct/>
      <BestSeller/>
      <Blog/>
      <Hub/>
      <Footer/>
    </div>
  )
}

export default Landingpage
