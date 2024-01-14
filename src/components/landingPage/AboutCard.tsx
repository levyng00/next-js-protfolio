import Section from "@/lib/Section";
import React from "react";
import CustomText from "../CustomText";
import { motion, useScroll } from "framer-motion";
const AboutCard = ({
  data,
}: {
  data: {
    title: string;
    desc: string;
  };
}) => {
  return (
    <motion.div className="flex flex-col gap-2 mb-9">
      <div className="relative">
        <div className="w-4 h-4 rounded-full bg-white absolute left-[-7px] top-2"></div>
        <h1 className="font-bold text-xl ml-10"> {data.title}</h1>
      </div>
      <CustomText className="ml-10 font-regular text-slate-300 text-sm bgpi">
        {data.desc}
      </CustomText>
    </motion.div>
  );
};

export default AboutCard;
