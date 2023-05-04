import React from "react";
import Button from "./Button";
import Image from "next/image";
const cardData = [
  {
    title: "10€ als Heybucks Guthaben",
    subtitle: "25.000 Punkte",
    href: "/",
    hrefLabel: "Kaufen",
    image: "hey.svg",
  },
  {
    title: "20€ als Heybucks Guthaben",
    subtitle: "50.000 Punkte",
    href: "/",
    hrefLabel: "Kaufen",
    image: "hey.svg",
  },
  {
    title: "Gambros Hoodie",
    subtitle: "100.000 Punkte",
    href: "/",
    hrefLabel: "Kaufen",
    image: "persons.svg",
  },
  {
    title: "Airpods Pro",
    subtitle: "200.000 Punkte",
    href: "/",
    hrefLabel: "Kaufen",
    image: "airpods.svg",
  },
];
const Shop = () => {
  return (
    <section className="flex relative flex-col items-center gap-4 p-4  md:p-0 text-white">
      <div className="gradient-03" />
      <h2 className="  text-[clamp(1rem,8vw,3rem)] font-[900] mx-auto pt-12 md:pt-24 ">
        Shop
      </h2>
      <div className="mx-auto gap-6 w-full md:w-fit md:grid-cols-2 md:grid-rows-3  xl:grid-cols-3 xl:grid-rows-2 grid">
        <div className=" row-span-2 w-full  p-6 bg-[#1A1B23] bg-opacity-70 grid  md:w-96 rounded-xl">
          <h2 className="  text-2xl  font-[800] text-center">
            Points Rangliste
          </h2>
          <div className=" h-[1px] bg-goldGradient" />
          <div className=" w-full ">
            <table className=" w-full">
              <thead>
                <tr>
                  <th className=" text-start py-2">Name</th>
                  <th className="text-end py-2">Points</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10).keys()].map((i) => {
                  return (
                    <tr key={i + 1} className=" py-2">
                      <td className=" text-start py-1">
                        {i + 1} Username {i + 1}
                      </td>
                      <td className=" text-end py-1">10,038,841.00</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {cardData.map((data) => {
          return (
            <div
              key={data.title}
              className=" md:w-96 h-60 bg-[#1A1B23] gap-2 flex flex-col p-4 items-center justify-center bg-opacity-70 rounded-xl"
            >
              <div className="  bg-[url('/assets/glass.svg')] p-4 bg-contain bg-no-repeat relative flex items-center justify-center aspect-square ">
                <Image
                  src={`/assets/icons/${data.image}`}
                  alt="hey brand logo"
                  width={82}
                  height={43}
                  className=" -translate-x-1 translate-y-1"
                />
              </div>
              <h2 className=" text-lg  font-[800]">{data.title}</h2>
              <p className=" text-sm  font-base">{data.subtitle}</p>
              <Button
                variant={"gradient"}
                href={data.href}
                className=" font-semibold "
              >
                {data.hrefLabel}
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
