import React from "react";
import { brandLogos } from "../assets/assets.js";

const BrandSlider = () => {
  // Duplicate logos to create infinite scroll
  const sliderItems = [...brandLogos, ...brandLogos];

  return (
    <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-20">

      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#ffffff] to-transparent"></div>

      {/* Marquee container */}
      <div className="marquee-inner flex will-change-transform min-w-[200%] animate-marquee">
        <div className="flex">
          {sliderItems.map((logo, i) => (
            <img
              key={i}
              alt="brand"
              src={logo}
              draggable="false"
              className="w-full h-full object-contain mx-6"
            />
          ))}
        </div>
      </div>

      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#ffffff] to-transparent"></div>
    </div>
  );
};

export default BrandSlider;