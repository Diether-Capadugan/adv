"use client";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navRef = useRef(null);
  const pathname = usePathname();

  function scrollToId(id, e) {
    if (e) e.preventDefault();
    const target = id === "top" ? document.body : document.getElementById(id);
    if (!target) return;

    const navHeight = navRef.current ? navRef.current.getBoundingClientRect().height : 0;
    const targetY = id === "top" ? 0 : target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }

  const baseLinkClass = "hover:text-white transition text-gray-300";
  const activeLinkClass = "text-white font-semibold";

  return (
    <nav ref={navRef} className="sticky top-0 z-50 w-full bg-black border-b border-black">
      <div className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img src="/logoimg.png" alt="logo" className="h-15 w-auto object-contain" />
          <span className="ml-3 text-white font-bold text-xl tracking-wide leading-none">EXPAND</span>
        </div>

        {/* Navigation links */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center space-x-12 text-sm">
            {/* Internal scrolling links only on home page */}
            {pathname === "/" ? (
              <>
                <a href="#top" onClick={(e) => scrollToId("top", e)} className={baseLinkClass}>Home</a>
                <a href="#about" onClick={(e) => scrollToId("about", e)} className={baseLinkClass}>About</a>
                <a href="#contact" onClick={(e) => scrollToId("contact", e)} className={baseLinkClass}>Contact</a>
              </>
            ) : (
              <>
                <Link href="/" className={baseLinkClass}>Home</Link>
                <Link href="/#about" className={baseLinkClass}>About</Link>
                <Link href="/#contact" className={baseLinkClass}>Contact</Link>
              </>
            )}

            {/* Link to products page with active styling */}
            <Link
              href="/products"
              className={pathname === "/products" ? `${baseLinkClass} ${activeLinkClass}` : baseLinkClass}
            >
              Product
            </Link>
          </div>
        </div>

        {/* Login button */}
        <div className="flex items-center">
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition text-sm shadow-sm">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
}
