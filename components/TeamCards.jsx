import React from "react";

const devs = [
  { id: 1, role: "Developer", name: "Ahrone", img: "/about.png", letter: "A" },
  { id: 2, role: "Developer", name: "Axel", img: "/about.png", letter: "S" },
  { id: 3, role: "Developer", name: "Diether", img: "/about.png", letter: "C" },
];

export default function TeamCards() {
  return (
    <section className="relative bg-black text-white py-12 overflow-hidden">
      {/* Background bar gradient behind cards to make them pop */}
      <div className="absolute left-0 right-0 top-0 h-64 pointer-events-none">
        <div className="max-w-6xl mx-auto h-full px-6">
          <div className="h-full rounded-b-3xl bg-gradient-to-b from-transparent via-white/6 to-black/80 opacity-50" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {devs.map((d) => (
            <article key={d.id} className="relative rounded-xl p-4 overflow-hidden bg-gradient-to-b from-white/6 via-white/4 to-black/30 shadow-2xl">
              {/* Large faint letter behind each card */}
              <span className="absolute -left-6 -top-6 md:-left-10 md:-top-8 text-[6rem] md:text-[9rem] font-extrabold text-white/8 pointer-events-none select-none z-0">
                {d.letter}
              </span>

              <div className="relative z-10">
                <div className="mb-3 text-xs text-amber-500 font-medium">{d.role}</div>
                <h4 className="text-white font-semibold mb-4">{d.name}</h4>

                <div className="h-44 flex items-end justify-center">
                  <img src={d.img} alt={d.name} className="object-contain h-36 relative z-20" />
                </div>
              </div>

              {/* stronger bottom overlay so the card reads like the design */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-30" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
