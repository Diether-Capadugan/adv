"use client";
import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef(null);

  function scrollToId(id, e) {
    if (e) e.preventDefault();
    const target = id === "top" ? document.body : document.getElementById(id);
    if (!target) return;

    const navHeight = navRef.current ? navRef.current.getBoundingClientRect().height : 0;
    const targetY = id === "top" ? 0 : target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }

  return (
    <nav ref={navRef} className="sticky top-0 z-50 w-full bg-black border-b border-black">
      <div className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between">

        {/* Left: logo + brand */}
        <div className="flex items-center">
          <img src="/logoimg.png" alt="logo" className="h-15 w-auto object-contain" />
          <span className="ml-3 text-white font-bold text-xl tracking-wide leading-none">EXPAND</span>
        </div>

        {/* Center: nav links */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center space-x-12 text-sm text-gray-300">
            <a href="#top" onClick={(e) => scrollToId("top", e)} className="hover:text-white transition">Home</a>
            <a href="#about" onClick={(e) => scrollToId("about", e)} className="hover:text-white transition">About</a>
            <a href="#product" onClick={(e) => scrollToId("product", e)} className="hover:text-white transition">Product</a>
            <a href="#contact" onClick={(e) => scrollToId("contact", e)} className="hover:text-white transition">Contact</a>
          </div>
        </div>

        {/* Right: login button */}
        <div className="flex items-center">
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition text-sm shadow-sm">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
