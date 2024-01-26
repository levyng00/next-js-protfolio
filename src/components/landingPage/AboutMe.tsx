"use client";
import Section from "@/lib/Section";
import { useRef } from "react";
import AboutCard from "./AboutCard";
import useMousePosition from "@/hooks/usePointer";
import { motion, useScroll } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  // const mousePosition = useMousePosition();
  // const circleWidth = 200;
  // const { scrollYProgress } = useScroll();

  return (
    <Section className="relative ">
      <h1 className="font-bold px-10  text-5xl flex items-end">About Me</h1>
      <div className="relative">
        <motion.div
          style={{
            position: "sticky",
            top: "50%",
            borderRadius: "100%",
            right: 0,
            width: "25px",
            height: "25px",
            border: "4px solid red",
            x: -10,
          }}
        />
        {aboutMeData.map((data, i) => {
          return <AboutCard key={i} data={data} />;
        })}
      </div>
      <div className=" w-[5px] h-[100%] bg-white absolute top-0 rounded-lg"></div>
    </Section>
  );
};

const aboutMeData = [
  {
    title: "Education",
    desc: "The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in exceptional website design. An outstanding website tran.",
  },
  {
    title: "Background",
    desc: "While I may not fit the conventional mold of a product manager, my diverse skill set in research, product design, and product coordination empowers me to drive the growth of a product from its inception. As an exceptional analytical thinker, I possess the ability to uphold the product's vision throughout its entire journey, effectively bridging the technical and product aspects. By leveraging my expertise, I can navigate the path from 0 to 1, ensuring the.",
  },
  {
    title: "When I'am off the screen",
    desc: "While I may not fit the conventional mold of a product manager, my diverse skill set in research, product design, and product coordination empowers me to drive th.",
  },
  {
    title: "Technologies I've Worked With",
    desc: "While I may not fit the conventional mold of a product manager, my diverse skill set in research, product design, and product coordination empowers me to drive the growth of a product from itse inception. As an exceptional analytical thinker, I possess the ability to uphold the product's vision throughout its entire journey, effectively bridging the technical and product aspects. By leveraging my expertise, I can navigate the path from 0 to 1, ensuring the product's success at every stage.",
  },
  {
    title: "Bestfriend/Mentor @ Albert Yumanm",
    desc: "Check out his work - https://www.codewonders.dev/about",
  },
];
export default AboutMe;
