import Image from "next/image";
import React from "react";

const Bg = () => {
  return (
    <div aria-hidden>
      <Image
        src={"/assets/spheres/sphere-01.svg"}
        width={300}
        height={300}
        alt="sphere"
        className=" absolute right-0 top-96 w-44 select-none"
        aria-hidden
      />
      <Image
        src={"/assets/spheres/star-02.svg"}
        width={50}
        height={50}
        alt="sphere"
        className=" absolute right-[26%] top-20 w-14 select-none"
        aria-hidden
      />
      <Image
        src={"/assets/icons/bitcoin.svg"}
        width={100}
        height={100}
        alt="sphere"
        className=" absolute left-[10%] z-[-1] top-12 w-36 select-none"
        aria-hidden
      />
      <Image
        src={"/assets/icons/litecoin.svg"}
        width={100}
        height={100}
        alt="sphere"
        className=" absolute left-[15%] z-[-1] top-[550px] w-36 select-none"
        aria-hidden
      />
      <Image
        src={"/assets/spheres/sphere-02.svg"}
        width={100}
        height={100}
        alt="sphere"
        className=" absolute left-[8%] top-96 w-36 select-none"
        aria-hidden
      />
      <Image
        src={"/assets/spheres/star-01.svg"}
        width={100}
        height={100}
        alt="sphere"
        className=" absolute right-52 top-[700px] w-14 select-none"
        aria-hidden
      />
    </div>
  );
};

export default Bg;
