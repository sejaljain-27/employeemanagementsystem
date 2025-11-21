import React, { useState } from "react";

function Login({handleLogin}) {

  
  const[email, setEmail]=useState('');
  const[password, setPassword]=useState('');
  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email,password)
    setEmail(" ")
    setPassword(" ")
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-lg bg-black/70">
        <form onSubmit={submitHandler} className="flex flex-col m-4 p-4">
          <input
          value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            required
            type="email"
            placeholder="Enter your email"
            className="text-black outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600  text-xl py-3 px-5 rounded-full"
          />
          <input
          value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
            type="password"
            placeholder="Enter your password"
            className="text-black mt-3 outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600  text-xl py-3 px-5 rounded-full"
          />
          <button
            type="submit"
            className="text-black mt-3 outline-none  placeholder:text-white  bg-emerald-600  text-xl py-3 px-5 rounded-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
