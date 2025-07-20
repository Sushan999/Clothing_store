import React, { useState } from "react";
import {
  ChevronRight,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";

const Navbar = ({ onLoginClick }) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-3 md:py-4">
      <div className="hidden lg:flex justify-between items-center py-2 px-2 sm:px-0">
        <div className="sm:2xl md:text-3xl font-semibold text-gray-700 ml-0 2xl:ml-30">
          FOREVER 21
        </div>
        <div className="flex px-3 sm:px-12 gap-4 sm:gap-14">
          <div className=" bg-gray-100 hidden lg:flex items-center px-3">
            <Search strokeWidth={1.5} size={20} />
            <input
              type="Search"
              placeholder="Search"
              className=" px-4 py-3 outline-none w-4xl"
            />
          </div>
          <div className="flex items-center gap-5">
            <button onClick={onLoginClick}>
              <UserRound strokeWidth={1.5} size={20} />
            </button>

            <a href="">
              <Heart strokeWidth={1.5} size={20} />
            </a>
            <a href="">
              <ShoppingCart strokeWidth={1.5} size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-20 justify-center py-2 text-gray-800 font-semibold mt-2 border-b border-gray-200 hidden ">
        <a href="">WOMEN</a>
        <a href="">PLUS</a>
        <a href="">MEN</a>
        <a href="">SHOES</a>
        <a href="">ACCESSORIES</a>
        <a href="">SALE</a>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex justify-between px-3 mb-4 shadow-sm py-2">
        <div className="flex gap-2">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} strokeWidth={1.5} />
          </button>
          <Search strokeWidth={1.5} size={28} />
        </div>
        <h1 className="text-xl font-semibold text-gray-800">FOREVER 21</h1>
        <div className="flex gap-2">
          <button onClick={onLoginClick}>
            <UserRound strokeWidth={1.5} size={28} />
          </button>

          <ShoppingBag size={28} strokeWidth={1.5} />
        </div>
      </div>

      {/* sidebar */}
      <div
        className={`lg:hidden h-screen w-11/12 bg-white absolute top-0 left-0 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-4 text-lg font-semibold text-gray-800">
          <div className="flex justify-between">
            <span>Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <div className="mt-6">
            <div className="py-3 flex justify-between items-center border-b border-gray-300">
              <a href="">WOMEN</a>
              <ChevronRight size={20} strokeWidth={1.5} />
            </div>
            <div className="py-3 flex justify-between items-center border-b border-gray-300">
              <a href="">PLUS</a>
              <ChevronRight size={20} strokeWidth={1.5} />
            </div>
            <div className="py-3 flex justify-between items-center border-b border-gray-300">
              <a href="">MEN</a>
              <ChevronRight size={20} strokeWidth={1.5} />
            </div>
            <div className="py-3 flex justify-between items-center border-b border-gray-300">
              <a href="">SHOES</a>
              <ChevronRight size={20} strokeWidth={1.5} />
            </div>
            <div className="py-3 flex justify-between items-center border-b border-gray-300">
              <a href="">ACCESSORIES</a>
              <ChevronRight size={20} strokeWidth={1.5} />
            </div>
            <div className="py-3 flex justify-between items-center border-b border-gray-300">
              <a href="">SALE</a>
              <ChevronRight size={20} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
