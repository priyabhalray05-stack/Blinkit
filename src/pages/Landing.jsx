import React from 'react'
import Navbar from '../Components/Landing/Navbar'
import Card from '../Components/Landing/Card'
import Pharmacy from '../Components/Landing/Pharmacy'
import Small from '../Components/Landing/Small'
import Small2 from '../Components/Landing/Small2'
import Backery from '../Components/Landing/Backery'
import Snacks from '../Components/Landing/Snacks'
import Discription from '../Components/Landing/Discription'
import Footer from '../Components/Landing/Footer'

function Landing() {
  return (
    <div>
      <Navbar/>
      <Card/>
      <Pharmacy/>
      <Small/>
      <Small2/>
      <Backery/>
      <Snacks/>
      <Discription/>
      <Footer/>
    </div>
  )
}

export default Landing
