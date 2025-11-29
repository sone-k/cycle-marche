/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Button = ({
  className,
  rectangleClassName,
  btCoral,
  btWater,
  btRed,
  divClassName,
  text = "Button",
}) => {
  return (
    <button
      className={`all-[unset] box-border inline-flex h-[54px] items-center gap-2.5 px-[39px] py-[15px] relative -top-7 left-[-74px] ${className} hover:cursor-pointer`}
    >
      <div
        className={`absolute w-full h-full top-0 left-0 bg-dark-green rounded-[100px] ${rectangleClassName} ${btCoral ? '!bg-[#E79D34]' : ''} ${btWater ? '!bg-[#34ACE7]' : ''} ${btRed ? '!bg-[#E86063]' : ''}`}
      />

      <div
        className={`relative w-fit mt-[-1.00px] [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-white text-[24px] text-center tracking-[0.50px] leading-[normal] whitespace-nowrap ${divClassName}`}
      >
        {text}
      </div>
    </button>
  );
};
