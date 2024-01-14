import React from "react";
import CustomText from "../CustomText";

type workDataType = {
  title: string;
  date: string;
  desc: {
    img: React.JSX.Element;
    text: string;
  }[];
};
const WorkCard = ({ index }) => {
  return (
    <div className="h-[500px] p-2">
      <div>
        <h1>{workData[index].title}</h1>
        <span>{workData[index].date}</span>
      </div>

      <div className="flex items-center ">
        <div className="">
          {workData[index].desc.map((data, i) => {
            return (
              <div key={i} className="flex">
                <div className=" bg-white"></div>

                <CustomText className="mt-5">{data.text}</CustomText>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const workData: any = [
  {
    title: "Intern @ Tweak Learning Pvt Limited",
    date: "Nov - Feb 2023",
    desc: [
      {
        img: <div className="w-2 h-2 bg-white rounded-full"></div>,
        text: "Developed and styled interactive web applications for Apple Music using Ember and SCSS",
      },
      {
        img: <div className="w-2 h-2 bg-white rounded-full"></div>,
        text: "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
      },
      {
        img: <div className="w-2 h-2 bg-white rounded-full"></div>,
        text: "Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback",
      },
    ],
  },
  {
    title: "Intern @ Bonatra",
    date: "Nov - Feb 2023",
    desc: [
      {
        img: <div className="w-2 h-2 bg-white rounded-full"></div>,
        text: "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
      },
      {
        img: <div className="w-2 h-2 bg-white rounded-full"></div>,
        text: "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
      },
      {
        img: <div className="w-2 h-2 bg-white rounded-full"></div>,
        text: "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
      },
    ],
  },
];
export default WorkCard;
