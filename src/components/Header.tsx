import Image from "next/image";
import React from "react";
import Button from "./Button";

const links = [
  {
    href: "/",
    title: "Social Media",
  },
  {
    href: "/",
    title: "Casinos",
  },
  {
    href: "/",
    title: "Shop",
  },
  {
    href: "/",
    title: "Community-Events",
  },
];

const Header = () => {
  return (
    <header className=" h-20  bg-black bg-opacity-[.18] items-center flex justify-around mx-auto">
      <div>
        <Image
          src={"/assets/logo.svg"}
          width={222}
          height={50}
          alt="brand logo"
          className=" w-36 md:w-56"
        />
      </div>
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-4">
          {links.map((link) => {
            return (
              <li key={link.title}>
                <Button
                  href={link.href}
                  className=" text-white"
                  variant={"tertiary"}
                  size={"small"}
                >
                  {link.title}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
      <Button
        variant={"primary"}
        size={"medium"}
        color="gradient"
        className=" font-semibold "
      >
        Zur Community
      </Button>
    </header>
  );
};

export default Header;
