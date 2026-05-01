import React, { useState } from 'react'

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className='fixed top-0 left-0 w-full z-50 pt-4  flex justify-around items-center px-4  bg-white shadow-md pb-2 '>

        <h1 className='text-amber-300 text-5xl font-bold'>
          blink<span className='text-green-600'>it</span>
        </h1>

        <p onClick={()=>setShowLogin(true)} className='text-black text-xl font-bold'>
          Delivery in 12 minutes <br />
          <span className='text-sm font-light'>
            76,Shakambhari Ave, Bhawarshala
          </span>
        </p>

        <input
          type="text"
          className='bg-gray-100 h-10 w-[650px] rounded-xl mx-6 px-4 outline-none'
          placeholder='Search'
        />

        <button 
          onClick={() => setShowLogin(true)}
          className="text-gray-600"
        >
          Login
        </button>

        <button  className='h-12 px-8 font-bold bg-gray-200 text-white text-sm rounded-xl ml-4 cursor-not-allowed'>
          My Cart
        </button>
      </div>

      {/* ================= LOGIN POPUP ================= */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-lg w-[550px] h-[340px] shadow-lg">

            <h2 className="text-xl font-bold text-center pt-18">
              India's last minute app
            </h2>

            <p className='text-black text-center pb-4'>
              Log in or Sign up
            </p>

            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-[300px] border-2 p-2 pl-8 mx-[100px] rounded-lg mb-2"
            />

            <button
              onClick={() => setShowLogin(false)}
              className="bg-gray-400 text-white py-2 rounded-lg w-[300px] mx-25 my-4"
            >
              Continue
            </button>

            <p className='text-gray-300 pl-12 text-sm pt-4'>
              By continuing, you agree to our Terms of service & Privacy policy
            </p>

          </div>
        </div>
      )}
    </>
  )
}

export default Navbar