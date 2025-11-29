import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT</h3>
            <p className="text-gray-400 text-sm">
              We’re passionate about delivering the best in sound. Whether you're an audiophile, a casual listener, or a gamer, we bring you in-depth headphone reviews, expert recommendations, and the latest in audio technology. Our mission is to help you find the perfect pair of headphones that match your lifestyle, needs, and budget.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Customization</li>
              <li>Upgrade</li>
              <li>Repair</li>
              <li>Enhance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">MODELS</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Over-Ear Headphone</li>
              <li>Sports Headphone</li>
              <li>Retro-Style Headphone</li>
              <li>Gaming Headphone</li>
              <li>Wireless Earbuds</li>
            </ul>
          </div>
          <div>
            {/* Placeholder for additional content like logo or contact */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          Copyright © 2025 EXPAND. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
