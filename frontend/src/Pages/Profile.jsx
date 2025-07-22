import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const { data } = await axios.get(
          "http://localhost:3000/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6 h-[75vh] flex justify-center items-center flex-col max-w-6xl mx-auto bg-white rounded ">
      <div className="shadow-lg px-24 py-16 rounded-xl">
        <h1 className="text-3xl  text-gray-700 font-semibold mb-4">
          User Profile
        </h1>
        <p className="text-base">
          <strong className="text-base">Name:</strong> {user.firstName}{" "}
          {user.lastName}
        </p>
        <p>
          <strong className="text-base">Email:</strong> {user.email}
        </p>
        <p>
          <strong className="text-base">ID:</strong> {user._id}
        </p>

        <div className="text-center mt-6">
          <button
            onClick={logoutUser}
            className="px-4 py-1 rounded-sm bg-red-600 hover:bg-red-800 text-white font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
