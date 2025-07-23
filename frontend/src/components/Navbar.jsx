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
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleUserClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      // User is logged in
      navigate("/profile");
    } else {
      // Not logged in
      onLoginClick(); // Open login modal
    }
  };

  return (
    <div className="py-3 md:py-4">
      {/* Desktop */}
      <div className="hidden lg:flex justify-between items-center py-2 px-2 sm:px-0">
        <div className="sm:2xl md:text-3xl font-semibold text-gray-700 ml-0 2xl:ml-30">
          <Link to="/">FOREVER 21</Link>
        </div>
        <div className="flex px-3 sm:px-12 gap-4 sm:gap-14">
          <div className="bg-gray-100 hidden lg:flex items-center px-3">
            <Search strokeWidth={1.5} size={20} />
            <input
              type="Search"
              placeholder="Search"
              className="px-4 py-3 outline-none w-4xl"
            />
          </div>
          <div className="flex items-center gap-5">
            <button onClick={handleUserClick}>
              <UserRound strokeWidth={1.5} size={20} />
            </button>
            <Link to="/wishlist">
              <Heart strokeWidth={1.5} size={20} />
            </Link>
            <Link to="/cart">
              <ShoppingCart strokeWidth={1.5} size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-20 justify-center py-2 text-gray-800 font-semibold mt-2 border-b border-gray-200 hidden">
        <Link to="/category/bags">BAGS</Link>
        <Link to="/category/pants">PANTS</Link>
        <Link to="/category/shirts">SHIRTS</Link>
        <Link to="/category/shoes">SHOES</Link>
        <Link to="category/suits">SUITS</Link>
        <Link to="/category/tracks">TRACKS</Link>
      </div>

      {/* Mobile Topbar */}
      <div className="lg:hidden flex justify-between px-3 mb-4 shadow-sm py-2">
        <div className="flex gap-2">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} strokeWidth={1.5} />
          </button>
          <Search strokeWidth={1.5} size={28} />
        </div>
        <h1 className="text-xl font-semibold text-gray-800">
          <Link to="/">FOREVER 21</Link>
        </h1>
        <div className="flex gap-2">
          <button onClick={handleUserClick}>
            <UserRound strokeWidth={1.5} size={28} />
          </button>
          <Link to="/cart">
            <ShoppingBag size={28} strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden h-screen w-11/12 bg-white absolute top-0 left-0 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-4 text-lg font-semibold text-gray-800">
          <div className="flex justify-between">
            <span>SHIRTSu</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <div className="mt-6">
            <div className="py-3 flex justify-between items-center border-b border-gray-300">
              <Link to="/BAGS">BAGS</Link>
              <ChevronRight size={20} strokeWidth={1.5} />
            </div>
            <div className="py-3 flex justify-between items-center border-b border-gray-300">
              <Link to="/PANTS">PANTS</Link>
              <ChevronRight size={20} strokeWidth={1.5} />
            </div>
            <div className="py-3 flex justify-between items-center border-b border-gray-300">
              <Link to="/SHIRTS">SHIRTS</Link>
              <ChevronRight size={20} strokeWidth={1.5} />
            </div>
            <div className="py-3 flex justify-between items-center border-b border-gray-300">
              <Link to="/shoes">SHOES</Link>
              <ChevronRight size={20} strokeWidth={1.5} />
            </div>
            <div className="py-3 flex justify-between items-center border-b border-gray-300">
              <Link to="/SUITS">SUITS</Link>
              <ChevronRight size={20} strokeWidth={1.5} />
            </div>
            <div className="py-3 flex justify-between items-center border-b border-gray-300">
              <Link to="/TRACKS">TRACKS</Link>
              <ChevronRight size={20} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
