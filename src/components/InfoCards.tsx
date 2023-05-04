import React from "react";
import InfoCard from "./card/InfoCard";

const infoCardData = [
  {
    icon: "twitch",
    title: "Twitch",
    subtitle:
      "Wir sind 6x die Woche live für euch! Schaut uns uns zu und erlebt die Spannung hautnah mit!",
    href: "/",
    hrefLabel: "Schau uns zu!",
  },
  {
    icon: "discord",
    title: "Discord",
    subtitle:
      "Mit unserem Discord Server wächst stetig die Community! Regelmäßige Challenges und Giveaways!",
    href: "/",
    hrefLabel: "Tritt dem Server bei",
  },
  {
    icon: "instagram",
    title: "Instagram",
    subtitle:
      "Unsere besten und lustigsten Momente, sowie die krassesten Wins findest du immer hier! So verpasst du nichts!",
    href: "/",
    hrefLabel: "Folge uns",
  },
  {
    icon: "youtube",
    title: "Youtube",
    subtitle:
      "Unsere besten und lustigsten Momente, sowie die krassesten Wins findest du immer hier! So verpasst du nichts!",
    href: "/",
    hrefLabel: "Schau die Videos",
  },
];

const InfoCards = () => {
  return (
    <ul className=" flex gap-5 flex-wrap justify-center">
      {infoCardData.map((info) => {
        return (
          <li key={info.title}>
            <InfoCard data={info} />
          </li>
        );
      })}
    </ul>
  );
};

export default InfoCards;
