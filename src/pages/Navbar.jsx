import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WatchListContext } from "../context/WatchListContext";

const Navbar = () => {
  const { watchlist } = useContext(WatchListContext);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-purple-400 transition-all duration-200"
        >
          Movie<span className="text-red-700">App</span>
        </Link>

        {/* Watchlist */}
        <Link
          to="/watchlist"
          className="relative font-display text-lg md:text-xl text-gray-200 hover:text-red-700 transition-all duration-200"
        >
          Watchlist
          <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 bg-red-700 text-black font-semibold rounded-full text-sm shadow-[0_0_8px_rgba(236,72,153,0.9)]">
            {watchlist.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
