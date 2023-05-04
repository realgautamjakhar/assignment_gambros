import Image from "next/image";
import React from "react";
import Button from "../Button";

const InfoCard = ({ data }: { data: any }) => {
  return (
    <div className="backdrop-blur-[3px] w-full md:w-72 h-64 bg-[#1a1b23]/[.7] rounded-[18px] p-5 gap-2  flex flex-col  justify-center items-center">
      <div className="  bg-[url('/assets/glass.svg')] bg-contain  bg-no-repeat bg-center flex items-center justify-center relative w-16 aspect-square rounded-full">
        <Image
          src={`/assets/icons/${data.icon}.svg` || ""}
          alt={data.title}
          width={30}
          height={30}
        />
      </div>
      <h2 className=" font-[800] text-white text-xl font-Inter">
        {data.title}
      </h2>
      <p className="   text-textSecondary text-xs font-Inter  text-center">
        {data.subtitle}
      </p>
      <Button variant={"gradient"} className=" font-bold gap-2 text-sm pt-4">
        {data.hrefLabel}
        <Image
          src={`/assets/arrow.svg`}
          alt={"Go to the link"}
          width={12}
          height={10}
        />
      </Button>
    </div>
  );
};

export default InfoCard;
