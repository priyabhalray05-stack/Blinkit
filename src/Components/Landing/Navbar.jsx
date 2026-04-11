import React, { useState } from 'react'

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='pt-8 flex justify-around cursor-pointer relative'>

      <h1 className='text-amber-300 text-4xl font-extrabold'>
        blink<span className='text-green-600'>it</span>
      </h1>

      <p className='text-black text-xl font-bold'>
        Delivery in 12 minutes <br />
        <span className='text-sm font-light'>
          76,Shakambhari Ave,Bhawarshala
        </span>
      </p>

      <input
        type="text"
        className='bg-gray-100 h-10 w-100 rounded p-3'
        placeholder='Search'
      />

      {/* LOGIN BUTTON */}
      <a
        onClick={() => setShowLogin(true)}
        className="cursor-pointer text-gray-600 font-bold"
      >
        login
      </a>

      <button className='h-12 w-30 font-bold bg-gray-200 text-black text-sm rounded'>
        My Cart
      </button>

      {/* ================= POPUP ================= */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-lg w-80 shadow-lg">

            <h2 className="text-xl font-bold mb-3">Login</h2>

            <input
              type="text"
              placeholder="Email"
              className="w-full border p-2 rounded mb-2"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 rounded mb-4"
            />

            <div className="flex justify-between">

              <button
                onClick={() => setShowLogin(false)}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                Close
              </button>

              <button className="bg-green-600 text-white px-3 py-1 rounded">
                Login
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Navbar