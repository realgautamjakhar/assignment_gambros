import Image from "next/image";
import React from "react";

const BannerCard = () => {
  return (
    <div className=" relative overflow-hidden w-[680px] flex h-[268px] bg-[#0E164A] top rounded-xl">
      <Image
        src={"/assets/gradient.svg"}
        alt="gradient"
        width={300}
        height={300}
        className=" top-0 absolute right-0 -z-1"
      />
      <Image
        src={"/assets/gradient2.svg"}
        alt="gradient"
        width={300}
        height={300}
        className=" bottom-0 absolute left-0 -z-1"
      />
      <Image
        src={"/assets/heybets-logo.svg"}
        alt="gradient"
        width={300}
        height={300}
        className=""
      />
      <h2 className=" font-Poppins text-5xl text-white  justify-self-end  font-bold max-w-xs text-center">
        200% Einzahlungsbonus bis 1.000€
      </h2>
    </div>
  );
};

export default BannerCard;
