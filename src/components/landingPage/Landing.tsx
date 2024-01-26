"use client";
import useMousePosition from "@/hooks/usePointer";
import Section from "@/lib/Section";
import React from "react";
import { motion } from "framer-motion";
import CustomText from "../CustomText";
import NavMenu from "../navMenu/NavMenu";
const Landing = () => {
  const mousePosition = useMousePosition();
  const circleWidth = 200;
  return (
    <Section className="h-screen  flex items-center ">
      {/* <motion.div
        className={`rounded-full bg-purple-800 absolute left-0 top-0 blur-3xl opacity-45`}
        animate={{
          x: mousePosition?.x != null ? mousePosition.x - circleWidth / 2 : 0,
          y: mousePosition?.y != null ? mousePosition.y - circleWidth / 2 : 0,
        }}
        style={{ height: circleWidth, width: circleWidth }}
        transition={{ duration: 0.02 }}
      ></motion.div> */}
      <div className="">
        <div className=" flex flex-col gap-7 text-xl p-2">
          <CustomText className="">Hi, my name is</CustomText>
          <div>
            <h1 className="font-bold text-5xl mb-2 md">LEVY.</h1>
            <h1 className="font-bold text-5xl"> I build things for the web.</h1>
          </div>
          <CustomText className=" b">
            I’m software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </CustomText>
          <div className="">
            <button className="border border-purple-500 w-[150px] rounded-lg p-2 py-4 absolute z-10 bg-black text-white hover:translate-x-1  hover:-translate-y-2 transition-transform">
              Resume!
            </button>
            <button className="border bg-slate-600 w-[150px] rounded-lg p-2 py-4 ">
              resume
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Landing;
