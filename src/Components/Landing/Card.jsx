import React from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


function Card() {
    const navigate = useNavigate()

  return (
  <div className='flex justify-evenly  bg-gradient-to-r from-green-700 to-green-400  h-[220px] w-full   mt-24  ml-6'>
    <div className=''>
      <h1 className='text-white text-4xl font-bold pl-8 pt-5 pb-2'>Stock up on daily essentials</h1>
      <p className='text-white text-2xl pl-8 '>Get farm-fresh goodness & a range of exotic <br />fruits, vegetables, eggs & more</p>
      <Link to="/Shopping">
      <button onClick={()=> navigate("/Shopping")} className='h-[50px] w-[120px] rounded text-xl bg-white m-2 mt-4 ml-8 font-bold'>
       Shop Now</button>
     </Link>
    </div>
    <div className='h-[200px] w-[470px]  mt-1  ' >
      <img src="image1.png" alt="hero" className='' />
      </div>

    

    </div>
  )
}
 
export default Card
