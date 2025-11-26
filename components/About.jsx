import React from "react";

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-black via-neutral-900 to-black text-white scroll-mt-20 overflow-hidden">
      {/* subtle horizontal gradient bar to increase contrast with page background */}
      <div className="absolute inset-x-0 top-0 h-56 pointer-events-none">
        <div className="max-w-6xl mx-auto h-full px-6">
          <div className="h-full rounded-b-3xl bg-gradient-to-b from-transparent via-white/2 to-black/70 opacity-30" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <span className="hidden md:block absolute left-6 top-8 -z-10 text-[9.5rem] leading-none font-extrabold text-white/10 select-none pointer-events-none">
          ABOUT
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-72 md:w-[520px] lg:w-[620px]">
              {/* Placeholder image - replace `/about-image.png` with your actual image in `public/` */}
              <img
                src="/about.png"
                alt="About visuals"
                className="w-full h-auto object-contain -mt-6 md:-mt-12 drop-shadow-2xl relative z-10"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 to-transparent rounded-t-xl pointer-events-none" />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
              To reimagine what sound can feel like.
            </h3>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto md:mx-0">
              A collective of thinkers, builders, creators, and dreamers driven by one
              purpose: to craft sensory audio experiences that move people. We combine
              design, engineering, and empathy to create products that feel alive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
