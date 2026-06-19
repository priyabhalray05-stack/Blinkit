// import React, { useState } from "react";

// function Signup() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     mobile: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup Data:", form);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-yellow-50">
      
//       {/* Card */}
//       <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">

//         {/* Header */}
//         <h1 className="text-2xl font-bold text-yellow-500 text-center">
//           Blinkit Signup
//         </h1>
//         <p className="text-sm text-gray-500 text-center mb-6">
//           Fast delivery starts here 🚀
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">

//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:outline-yellow-400"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:outline-yellow-400"
//           />

//           <input
//             type="text"
//             name="mobile"
//             placeholder="Mobile Number"
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:outline-yellow-400"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:outline-yellow-400"
//           />

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold p-3 rounded-lg"
//           >
//             Create Account
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-sm text-gray-500 mt-4">
//           Already have an account? <span className="text-yellow-500 cursor-pointer">Login</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;