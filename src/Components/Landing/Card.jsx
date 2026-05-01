import React from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Card() {
  const navigate = useNavigate()

  return (
    <div className='  w-full'>
    <div className='relative flex h-[320px] mt-32 mx-6 overflow-hidden rounded-2xl pt-10'>

      {/* 🔻 Background Image */}
      <img 
        src="image1.png" 
        alt="hero"
        className='absolute right-0 top-0 h-full  w-[50%] object-cover z-0'
      />

      {/* 🔻 Gradient Overlay (MAIN MAGIC) */}
      <div className='absolute inset-0 bg-gradient-to-r from-green-800 via-green-500 to-transparent z-10'></div>

      {/* 🔻 Content */}
      <div className='relative z-20  '>
        <h1 className='text-white text-5xl font-bold pl-8 pt-5 pb-2'>
          Stock up on daily essentials
        </h1>

        <p className='text-white text-2xl pl-8'>
          Get farm-fresh goodness & a range of exotic <br />
          fruits, vegetables, eggs & more
        </p>

        <Link to="/Shopping">
          <button 
            onClick={()=> navigate("/Shopping")} 
            className='h-[50px] w-[120px] rounded text-xl bg-white  mt-6 ml-8 font-bold'>
            Shop Now
          </button>
        </Link>
      </div>
      

    </div>
    </div>
  )
}

export default Card