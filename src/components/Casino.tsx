import React from "react";
import CasinoCard from "./card/CasinoCard";
import Button from "./Button";
import Image from "next/image";

const Casino = () => {
  return (
    <section className="flex relative flex-col items-center gap-4 p-4  md:p-0">
      <h2 className=" text-[clamp(1rem,8vw,3rem)]   font-[900] font-Inter mx-auto pt-12 md:pt-24 text-center text-white">
        Unsere Partner-Casinos
      </h2>
      <div className="mx-auto flex gap-4 flex-wrap justify-center">
        <Image
          src={"/assets/banner.svg"}
          alt="Banner image"
          width={681}
          height={320}
        />
        <div className=" text-white text-sm font-Poppins flex-col max-w-[60ch] grid place-content-center">
          <h2 className=" pb-4">
            Wir vertauen auf Heybets. In unseren Augen ist es das zuverlässigste
            Online Casino, mit den besten Spielen! Sogar Sportwetten und ein
            Fantasy Manager stehen im Angebot. Hier noch weitere Vorteile von
            Heybets.io:
          </h2>
          <ul className=" list-disc pl-6 pb-6">
            <li>blitzschnelle Ein- & Auszahlungen</li>
            <li>unglaubliche Bonis</li>
            <li>bis zu 10% Rakeback</li>
            <li>das beste VIP System mit vielen coolen Features</li>
            <li>super freundlicher Support</li>
          </ul>
          <Button
            variant={"primary"}
            size={"large"}
            className=" font-[800] italic tracking-wide uppercase w-fit mx-auto md:mx-[revert]"
          >
            Bonus holen!
          </Button>
        </div>
      </div>
      <div className="mx-auto gap-6 grid">
        <CasinoCard />
        <CasinoCard />
        <CasinoCard />
        <CasinoCard />
      </div>
    </section>
  );
};

export default Casino;
