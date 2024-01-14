"use client";
import Section from "@/lib/Section";
import React, { ReactNode, useState } from "react";
import WorkCard from "./WorkCard";
import bonLogo from "@/assests/Untitled.jpg";
import tweakLogo from "@/assests/tweaklearning.png";
import Image, { StaticImageData } from "next/image";
import { title } from "process";
const WhereWork = () => {
  const [buttonState, setButtonState] = useState<experience>({
    title: "Tweak",
    index: 0,
  });
  console.log(buttonState);
  const handleClick = (exp, i) => {
    setButtonState({ title: exp.workPlace, index: i });
  };

  return (
    <Section className="h-screen flex items-center justify-center ">
      <div className=" ">
        <h1 className="text-5xl font-bold  mb-10 border-b-2 border-white">
          Where I have Worked
        </h1>
        <div className="flex gap-12 ">
          <div className="flex flex-col items-center relative gap-5">
            {workData.map((data, i) => {
              return (
                <div key={i} className=" relative">
                  <div
                    className={`${
                      buttonState.title === data.workPlace
                        ? "w-full h-3 bg-green-600"
                        : ""
                    } absolute top-1/2`}
                  ></div>
                  <button
                    className="w-24 h-24 bg-white rounded-full flex items-center justify-center opacity-20 hover:opacity-100"
                    onClick={() => handleClick(data, i)}
                  >
                    <Image src={data.img} height={60} alt="logo" />
                  </button>
                </div>
              );
            })}
          </div>

          <WorkCard desc={workData} index={buttonState.index} />
        </div>
      </div>
    </Section>
  );
};
// const experiences: experience[] = [
//   {
//     title: "Tweak",
//   },
//   {
//     title: "Bonatra",
//   },
// ];
type companies = "Tweak" | "Bonatra";
type experience = {
  title: companies;
  index: number;
};

export default WhereWork;
type position = "Intern @ Tweak Learning Pvt Limited" | "Intern @ Bonatra";
type date = "Nov - Feb 2023" | "Nov - Feb 2023";
type workplace = "Tweak" | "Bonatra";
type desc = string[];
type work = {
  title: position;
  workPlace: workplace;
  date: date;
  desc: desc;
  img: StaticImageData;
};
const workData: work[] = [
  {
    title: "Intern @ Tweak Learning Pvt Limited",
    workPlace: "Tweak",
    date: "Nov - Feb 2023",
    img: tweakLogo,
    desc: [
      "Developed and styled interactive web applications for Apple Music using Ember and SCSS",
      "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",

      "Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback",
    ],
  },
  {
    title: "Intern @ Bonatra",
    workPlace: "Bonatra",
    date: "Nov - Feb 2023",
    img: bonLogo,
    desc: [
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
      "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
    ],
  },
];
