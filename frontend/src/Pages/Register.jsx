import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/user/register",
        {
          firstName: fname,
          lastName: lname,
          email: email,
          password: password,
        }
      );
      alert("Success");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="h-[70vh]">
      <div className="mt-10">
        <h1 className="text-xl text-gray-800 font-medium text-center">
          Create Account
        </h1>
        <p className="text-sm text-gray-700 text-center font-medium mt-8">
          Please register below to create an account
        </p>
      </div>
      <form
        action=""
        className="space-y-4 flex flex-col justify-center items-center mt-12"
      >
        <div>
          <label
            className="block mb-1 font-gray-800 font-semibold text-sm"
            htmlFor="fname"
          >
            First Name
          </label>
          <input
            onChange={(e) => setFname(e.target.value)}
            type="text"
            name="fname"
            className="border px-3 w-[320px] outline-none  border-gray-400 md:w-[480px]  py-2"
          />
        </div>
        <div>
          <label
            className="block mb-1 font-gray-800 font-semibold text-sm"
            htmlFor="lname"
          >
            Last Name
          </label>
          <input
            onChange={(e) => setLname(e.target.value)}
            type="text"
            name="lname"
            className="border px-3 w-[320px] outline-none  border-gray-400 md:w-[480px]  py-2"
          />
        </div>
        <div>
          <label
            className="block mb-1 font-gray-800 font-semibold text-sm"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            className="border px-3 w-[320px] outline-none  border-gray-400 md:w-[480px]  py-2"
          />
        </div>
        <div>
          <label
            className="block mb-1 font-gray-800 font-semibold text-sm"
            htmlFor="Password"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            name="password"
            className="border px-3 w-[320px] outline-none  border-gray-400 md:w-[480px]  py-2"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="px-6 py-2.5  border  mt-6 bg-black text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
        >
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
};

export default Register;
