import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedSection from "./components/FeaturedSection";
import FeaturedSection2 from "./components/FeaturedSection2";
import Login from "./components/Login";
import Prac from "./components/Prac";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setShowLogin(true)} />
      {showLogin && <Login onclose={() => setShowLogin(false)} />}

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedSection />
              <FeaturedSection2 />
              <Prac />
            </>
          }
        />

        {/* Other pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
