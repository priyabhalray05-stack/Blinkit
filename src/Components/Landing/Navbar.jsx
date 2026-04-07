import React from 'react'

function Navbar() {
  return (
    <div className='pt-8 flex justify-around'>
      <h1 className='text-amber-300 text-4xl font-extrabold p'>blink<span className='text-green-600'>it</span></h1>
      <p className='text-black text-xl font-bold'>Delivery in 12 minutes <br />
     <span className='text-sm font-light'> 76,Shakambhari Ave,Bhawarshala</span></p>
     <input type="text" className=' bg-gray-100  h-10 w-100 rounded p-3' placeholder='Search' />
     <a href="" className='pt-2'>Login</a>
     <button className='h-12 w-30 font-bold  bg-gray-200 text-white text-black text-sm rounded'>My Cart</button>
     
    </div>
  )
}

export default Navbar
