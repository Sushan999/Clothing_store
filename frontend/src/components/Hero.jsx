import React from "react";

const Hero = () => {
  return (
    <div>
      <img
        className="hidden sm:block"
        src="https://www.forever21.com/cdn/shop/files/1920X880-Runway-mkf.jpg?v=1748889340&width=2000"
        alt=""
      />
      <img
        className="sm:hidden"
        src="https://www.forever21.com/cdn/shop/files/638x770-Runway-mkf.jpg?v=1748889345&width=750"
        alt=""
      />
    </div>
  );
};

export default Hero;
