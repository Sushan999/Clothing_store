import { X } from "lucide-react";
import React from "react";

const Login = ({ onclose }) => {
  return (
    <div className="absolute w-full h-screen sm:w-[400px] top-0 right-0  ">
      <form action="" className="w-full px-4 md:px-8 py-6 bg-white h-full ">
        <div className="flex justify-between items-center  mb-6">
          <h1 className="text-lg font-semibold text-gray-800">Login</h1>
          <button onClick={onclose}>
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>
        <div className="text-sm font-semibold text-gray-800 w-full">
          <label htmlFor="email" className="block">
            Email Address:
          </label>
          <input
            type="email"
            className="border border-gray-300 px-2 py-2 w-full"
          />
        </div>

        <div className="text-sm font-semibold text-gray-800  w-full mt-4">
          <label htmlFor="password" className="block">
            password:
          </label>
          <input
            type="password"
            className="border border-gray-300 px-2 py-2 w-full"
          />
        </div>
        <button className="p-2  border w-full  mt-6 bg-black text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">
          LOG IN
        </button>
        <p className="text-center text-gray-700 text-xs underline mt-4">
          Forgot your password ?
        </p>
        <div>
          <button className="py-2 w-full border  mt-4 bg-white text-black font-semibold hover:bg-black hover:text-white transition-all duration-300">
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
