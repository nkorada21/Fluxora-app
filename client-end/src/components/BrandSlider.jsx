import React from "react";
import { brandLogos } from "../assets/assets";

const BrandSlider = () => {
  const sliderItems = [...brandLogos, ...brandLogos];

  return (
    <div className="relative w-full overflow-hidden py-14 flex justify-center">

      {/* Fade Left */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-20"></div>

      {/* Sliding Track */}
      <div className="flex items-center gap-20 animate-slow-slide">
        {sliderItems.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Brand Logo"
            className="h-10 md:h-12 object-contain opacity-90 hover:opacity-100 transition"
          />
        ))}
      </div>

      {/* Fade Right */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>

    </div>
  );
};

export default BrandSlider;