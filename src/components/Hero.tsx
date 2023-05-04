import React from "react";
import InfoCards from "./InfoCards";

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-8 p-4  md:p-0">
      <div className="gradient-011" />
      <h2 className=" text-[clamp(2rem,10vw,4.5rem)]  font-[900] font-Inter mx-auto pt-6 md:pt-24 text-center text-white">
        Wetten revolotioniert!
      </h2>
      <div className="gradient-012" />
      <InfoCards />
    </section>
  );
};

export default Hero;
