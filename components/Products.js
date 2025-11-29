"use client";

import { useEffect } from "react";
import Image from "next/image";
import Swiper from "swiper";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


export default function Products() {
  useEffect(() => {
    // ScrollReveal-like animations
    const reveal = (selector, delay = 0) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        setTimeout(() => {
          el.style.transition = "1s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, delay);
      });
    };

    reveal(".header-img", 200);
    reveal(".header-title", 400);
    reveal(".header-text", 600);
    reveal(".product-image", 200);
    reveal(".product-card", 400);

    // Swiper
    new Swiper(".swiper", {
      modules: [Pagination, EffectCoverflow],
      loop: true,
      effect: "coverflow",
      grabCursor: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        depth: 250,
        scale: 0.75,
        slideShadows: false,
        stretch: -100,
      },
      pagination: { el: ".swiper-pagination" },
    });
  }, []);

  return (
    <div className="w-full">


      {/* HEADER */}
      <header className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 mt-32 px-6" id="home">
        <div className="header-img">
          <Image src="/img1.png" width={500} height={500} alt="header" className="mx-auto" />
        </div>

        <div className="text-center md:text-left">
          <h1 className="header-title text-4xl md:text-5xl font-bold">Enigma Series</h1>
          <p className="header-text mt-4 text-gray-600">
            Enigma Series delivers rich bass, crisp highs, and balanced mids for a
            captivating listening experience.
          </p>
        </div>
      </header>

      {/* PRODUCT SECTION */}
      <section id="product" className="bg-black py-20 mt-10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 px-6 text-white">
          <div className="product-image">
            <Image src="/product1.png" width={400} height={400} alt="product" className="mx-auto" />
          </div>

          <div className="product-card flex flex-col justify-center">
            <h4 className="text-3xl font-bold">Gaming Headphone</h4>
            <p className="mt-4 text-gray-400">
              Designed for serious gamers, these headphones offer immersive sound
              quality and comfort.
            </p>

            <div className="mt-6">
              <a href="/gaming" className="px-10 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200">
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDER */}
      <section className="max-w-[1200px] mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center">ENIGMA SERIES</h2>
        <p className="text-gray-600 text-center mt-4 mb-10">
          High-end audio engineered for true sonic immersion.
        </p>

        <div className="swiper w-full pb-16">
          <div className="swiper-wrapper">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="swiper-slide max-w-xs">
                <div className="p-6 bg-white rounded-xl shadow text-center">
                  <h4 className="text-xl font-bold mb-4">Headphone #{i + 1}</h4>
                  <Image src="/product1.png" width={300} height={300} alt="product" className="mx-auto" />
                  <h3 className="text-2xl font-bold mt-4">₱{3500 + i * 300}</h3>

                  <a href="/" className="mt-4 inline-block px-10 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                    BUY NOW
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-black py-10 mt-20">
        <div className="max-w-[1200px] mx-auto text-center">
          <Image src="/logoimg.png" width={200} height={100} alt="footer logo" className="mx-auto" />
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://facebook.com" className="text-white text-2xl bg-white/10 p-3 rounded-full hover:bg-white/20">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="https://instagram.com" className="text-white text-2xl bg-white/10 p-3 rounded-full hover:bg-white/20">
              <i className="ri-instagram-line"></i>
            </a>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-6">
          Copyright © 2025 EXPAND. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
