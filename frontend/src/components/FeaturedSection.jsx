import React from "react";

const FeaturedSection = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl text-center font-semibold text-gray-800">
        Just Landed
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 ">
        <div className="group overflow-hidden">
          <img
            src="https://www.forever21.com/cdn/shop/files/Untitled-1_0005_look10_WGA_FESTIVAL_TREND_CREATIVE_07673_470x.jpg?v=1748888563"
            alt=""
            className="h-108 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="text-center mt-4 text-gray-800 font-semibold text-xl">
            Clothing
          </h1>
        </div>

        <div className="group overflow-hidden">
          <img
            src="https://www.forever21.com/cdn/shop/files/allegra_db721c1e-69ac-4f53-9e77-d1009605def8_470x.png?v=1748888587"
            alt=""
            className="h-108 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="text-center mt-4 text-gray-800 font-semibold text-xl">
            Shoes
          </h1>
        </div>
        <div className="group overflow-hidden">
          <img
            src="https://www.forever21.com/cdn/shop/files/Untitled-1_0012_LOOK06_DENIM_CURVYHRSTRT_01078_470x.jpg?v=1748888697"
            alt=""
            className="h-108 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="text-center mt-4 text-gray-800 font-semibold text-xl">
            Denim Shop
          </h1>
        </div>
        <div className="group overflow-hidden">
          <img
            src="https://www.forever21.com/cdn/shop/files/Untitled-1_0014_Look14_BJohnson_Trend_2312_470x.jpg?v=1748017890"
            alt=""
            className="h-108 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="text-center mt-4 text-gray-800 font-semibold text-xl">
            Dresses
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
