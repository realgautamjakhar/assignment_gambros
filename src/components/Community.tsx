import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <section className="flex flex-col relative  items-center gap-4 p-4 md:p-0">
      <div className="gradient-04" />
      <h2 className=" text-[clamp(1rem,8vw,3rem)] font-[900] text-center font-Inter mx-auto pt-24 text-white">
        Guess the Balance & Community Battle
      </h2>
      <p className=" text-sm text-textSecondary   text-center max-w-[100ch] pb-2">
        Mach mit bei coolen Challenges und gewinn hunderte Euros als Heybets
        Guthaben! Tritt der Community bei uns sicher dir deine Chance auf coole
        Gewinne!
      </p>
      <Image
        src={"/assets/ckeanShot.svg"}
        width={1175}
        height={695}
        alt="CleanShot Image"
      />
    </section>
  );
};

export default Community;
