import React from 'react'

function Pharmacy() {
  return (
    <div className='flex mt-8 mx-8 gap-8'>
      <div className='h-[220px] w-[350px] px-2 py-6 bg-gradient-to-r from-sky-600 to-cyan-500 flex  justify-between rounded-2xl'>
       <div className='px-2'>
         <h1 className='text-white text-2xl font-extrabold '>Pharmacy at <br />your doorstep!</h1>
          <p className='text-white pt-2'>Cough syrups, pain
            <br />relief sprays & more
          </p>
          <button className='h-[35px] mt-4 w-[100px]  rounded-xl bg-white'>Order Now</button>
       </div>
        <div className='mx-2'>
            <img src="https://m.media-amazon.com/images/S/aplus-media/sota/5d2f78ac-6d93-45bc-b56f-3362c0d33f5e.__CR0,0,300,300_PT0_SX300_V1___.jpg" alt=""
            className='h-[180px] w-[120px] rounded-2xl' />
        </div>

        

      </div>
      <div>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/baby_crystal_WEB-1.png" alt=""
          className='h-[220px] w-[300px] rounded-2xl' />
        </div>



    </div>
  )
}

export default Pharmacy



