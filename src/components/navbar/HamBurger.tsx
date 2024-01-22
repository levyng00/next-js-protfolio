"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavStore } from "@/hooks/store/useStore";
const HamBurger = () => {
  const [animateBurger, setAnimateBurger] = useState(false);
  const updateNavState = useNavStore((state) => state.updateNavState);
  const topBarVariants = {
    active: { rotate: -45, y: 7 },
    inactive: { rotate: 0 },
  };
  const bottomBarVariants = {
    active: { rotate: 45, y: -2, x: -8 },
    inactive: { rotate: 0 },
  };
  const handleClick = () => {
    setAnimateBurger(!animateBurger);
    console.log(animateBurger);
    updateNavState();
  };
  return (
    <div
      className="flex flex-col gap-2 items-end cursor-pointer "
      onClick={handleClick}
    >
      <motion.div
        className="w-8 bg-white h-1"
        animate={animateBurger ? "active" : "inactive"}
        variants={topBarVariants}
        style={{ transformOrigin: "center center" }}
      ></motion.div>
      <motion.div
        className="w-6 bg-white h-1"
        animate={animateBurger ? "active" : "inactive"}
        style={{ transformOrigin: "center center" }}
        variants={bottomBarVariants}
      ></motion.div>
    </div>
  );
};

export default HamBurger;
