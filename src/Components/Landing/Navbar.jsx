import React, { useState } from 'react'

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className='fixed top-0 left-0 w-full z-50 pt-8 flex justify-around items-center px-4 bg-white shadow-md pb-6'>

        <h1 className='text-amber-300 text-5xl font-bold'>
          blink<span className='text-green-600'>it</span>
        </h1>

        <p 
          onClick={() => setShowLogin(true)} 
          className='text-black text-xl font-bold cursor-pointer'
        >
          Delivery in 12 minutes <br />
          <span className='text-sm font-light'>
            76, Shakambhari Ave, Bhawarshala
          </span>
        </p>

        <input on
          type="text"
          className='bg-gray-100 h-14 w-[700px] rounded-xl mx-6 px-4 outline-none'
          placeholder='Search'
        />

        <button 
          onClick={() => setShowLogin(true)}
          className="text-gray-600"
        >
          Login
        </button>

        <button 
          onClick={() => setShowCart(true)} 
          className='h-12 px-8 font-bold bg-green-600 text-white text-sm rounded-xl ml-4'
        >
          My Cart
        </button>
      </div>

      {/* ================= LOGIN POPUP ================= */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-lg w-[550px] h-[340px] shadow-lg">

            <h2 className="text-xl font-bold text-center pt-10">
              India's last minute app
            </h2>

            <p className='text-black text-center pb-4'>
              Log in or Sign up
            </p>

            <input
              type="email"
              placeholder="Email"
              className="w-[300px] border-2 p-2 pl-4 mx-auto block rounded-lg mb-2"
            />
             <input
              type="password"
              placeholder="password"
              className="w-[300px] border-2 p-2 pl-4 mx-auto block rounded-lg mb-2"
            />

            <button
              onClick={() => setShowLogin(false)}
              className="bg-gray-400 text-white py-2 rounded-lg w-[300px] mx-auto block my-4"
            >
              Continue
            </button>

            <p className='text-gray-300 text-center text-sm pt-4'>
              By continuing, you agree to our Terms of service & Privacy policy
            </p>

          </div>
        </div>
      )}

      {/* ================= CART POPUP ================= */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex justify-end">

          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowCart(false)}
          ></div>

          {/* Cart Box */}
          <div className="relative w-[500px] h-full bg-white shadow-lg p-4 pt-8">

            <h2 className="text-xl font-bold border-b border-gray-600   pb-8  ">
              My Cart
            </h2>

            {/* Items */}
            <div className="mt-4 space-y-3 overflow-y-auto h-[70%]">
              <div className="flex justify-between">
                <p>Green Chilli</p>
                <p>₹18</p>
              </div>
            </div>

            {/* Bottom */}
            <div className="absolute bottom-0 left-0 w-full p-4 border-t">
              <button className="w-full bg-green-600 text-white py-2 rounded">
                Checkout
              </button>
            </div>

            {/* Close */}
            <button 
              onClick={() => setShowCart(false)}
              className="absolute top-2 right-2 text-xl"
            >
              ✕
            </button>

          </div>
        </div>
      )}

    </>
  )
}

export default Navbar