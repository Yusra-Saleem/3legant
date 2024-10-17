import React from 'react'
import Hero from '@/components/hero'
import Carousel from '@/components/carousel'
import Services from '@/components/services'
import Articles from '@/components/articles'
import Footer from '@/components/footer'
function Home() {
  return (
    <div className="">
      <Hero />
      <Carousel />
      <Services/>
      <Articles />
      <Footer />
    </div>
  )
}

export default Home

