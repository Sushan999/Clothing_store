import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedSection from "./components/FeaturedSection";
import FeaturedSection2 from "./components/FeaturedSection2";
import Login from "./components/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setShowLogin(true)} />
      {showLogin && <Login onclose={() => setShowLogin(false)} />}

      <Hero />
      <FeaturedSection />
      <FeaturedSection2 />
    </>
  );
};

export default App;
