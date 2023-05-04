import Image from "next/image";
import React from "react";
import Button from "./Button";

const links = [
  {
    href: "/",
    label: "Gambros",
  },
  {
    href: "/",
    label: "Social Media",
  },
  {
    href: "/",
    label: "Einzahlungsbonus",
  },
  {
    href: "/",
    label: "Shop",
  },
  {
    href: "/",
    label: "Community",
  },
];

const Footer = () => {
  return (
    <footer className=" flex mt-20 p-4 md:flex-row flex-col bg-[#0b0b0f] text-white py-10 bg-opacity-50 justify-around">
      <div className=" flex gap-6 items-center flex-wrap md:flex-row justify-center">
        <Image
          src={"/assets/logo-02.svg"}
          alt="brand logo 2"
          width={160}
          height={177}
        />
        <div className=" flex flex-col gap-1 max-w-[50ch] text-center md:text-start">
          <p className=" text-sm ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <p className=" text-xs">© 2021 GPD Holdings, LLC FinCEN MSB</p>
        </div>
      </div>
      <nav className="py-10 md:py-0">
        <ul className=" flex md:flex-col gap-2 px-4 flex-wrap justify-center md:justify-start md:items-start items-center flex-row">
          {links.map((l) => {
            return (
              <li key={l.label}>
                <Button className=" text-sm">{l.label}</Button>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
