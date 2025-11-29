import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* subtle radial vignette behind hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,1) 100%)',
        }}
      />

      <div className="min-h-[100vh] flex items-center justify-center relative">
        {/* Big background word */}
        

        {/* Foreground hero image */}
        <img
          src="/heroimg.png"
          alt="hero"
          className="relative z-10 w-[150%] max-w-[1500px] object-contain translate-y-[-90px] drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
