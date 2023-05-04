import Image from "next/image";
import React from "react";
import Button from "../Button";

const CasinoCard = () => {
  return (
    <div className=" xl:w-[73rem] w-full grid text-[#E9E9E9] overflow-hidden  xl:grid-cols-[225px,1fr,auto,1fr,auto] gap-4 xl:h-40 rounded-xl bg-CasinoCardGradient">
      <div className="relative grid py-10 xl:py-0 place-content-center h-full bg-[#09113c]">
        <Image
          src={"/assets/logo-102.svg"}
          alt="logo"
          width={128}
          height={82}
        />
        <div className=" absolute -right-8 top-0 h-full hidden xl:flex">
          <div className=" w-4 h-full bg-[#264ef8] skew-x-12" />
          <div className=" w-4 h-full bg-[#3fb1fc] skew-x-12" />
          <div className=" w-4 h-full bg-[#74d4ed] skew-x-12" />
        </div>
      </div>

      <div className=" w-full grid place-content-center pl-4 gap-2">
        <h2 className="text-base font-semibold font-Inter tracking-wider leading-4">
          <span className=" text-transparent bg-goldGradient bg-clip-text font-[800] text-2xl">
            250%
          </span>{" "}
          bis{" "}
          <span className=" text-transparent bg-goldGradient bg-clip-text font-[800] text-2xl">
            1.000€
          </span>
          <br />
          40x wager
        </h2>
        <h2 className=" text-transparent bg-goldGradient bg-clip-text font-[800] text-2xl">
          + 100 Freespins
        </h2>
      </div>
      <ul className=" grid place-content-center gap-2  text-base font-medium tracking-wider">
        <li>✅ Crypto</li>
        <li>❌ Echtgeld</li>
      </ul>
      <ul className=" grid place-content-center text-base font-medium tracking-wider">
        <li> + bis zu 15% Cashback</li>
        <li>+ Kein KYC</li>
        <li>+ Schnelle Auszahlung</li>
        <li className="mt-2">- Auszahlungslimit bei 10k</li>
      </ul>
      <div className=" grid  place-content-center justify-center gap-1 p-4">
        <h2 className="text-base  text-center font-bold tracking-wider">
          ⭐ 4,5 / 5️
        </h2>
        <Button
          variant={"primary"}
          size={"large"}
          className=" font-[800] italic tracking-wide uppercase"
        >
          Bonus holen!
        </Button>
      </div>
    </div>
  );
};

export default CasinoCard;
