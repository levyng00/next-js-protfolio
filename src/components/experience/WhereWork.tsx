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
    <Section className="h-screen flex flex-col  justify-center ">
      <h1 className="text-5xl font-bold  mb-10 border-b-2 border-white">
        Where I have Worked
      </h1>
      <div className="w-[800px] ">
        <div className="flex gap-12 ">
          <div className="flex flex-col items-center relative gap-5">
            {workData.map((data, i) => {
              return (
                <div key={i} className="relative ">
                  {/* <div className="w-12 h-12 bg-green-500 blur-xl absolute"></div> */}
                  <button
                    className={`w-24 h-24 bg-white rounded-full flex items-center justify-center opacity-20 hover:opacity-100  ${
                      buttonState.index === i ? "opacity-100" : ""
                    }`}
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
      "Developed and  interactive web  for Apple Music using Ember and SCSS",
      "Built and shipped the Apple Music Extension for ger  third-party aal API ",
    ],
  },
  {
    title: "Intern @ Bonatra",
    workPlace: "Bonatra",
    date: "Nov - Feb 2023",
    img: bonLogo,
    desc: [
      "Clients included JetBlue, U.S. , U.S. Department of Defens\ss-browser compatibility and mobile responsiveness",
      "Clients included JetBlue, Lovesac, U.S. Cellular,e",
    ],
  },
];
