"use client";
import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
const ThemeToggle = () => {
  const [toggleTheme, setToggleTheme] = useState(false);
  const handleToogleClick = () => {
    setToggleTheme(!toggleTheme);
  };
  return (
    <div className="flex gap-2 items-center">
      <FiSun size="20px" />
      <div
        className={`bg-gray-400 h-7 w-[48px] rounded-xl flex p-1 ${
          toggleTheme ? "bg-slate-800" : "bg-slate-50"
        }`}
        onClick={handleToogleClick}
      >
        <div
          className={`bg-gray-500 h-5 w-5 rounded-full relative ${
            toggleTheme
              ? "translate-x-[20px] bg-green-50"
              : "translate-x-0 bg-slate-800"
          }`}
        ></div>
      </div>
      <FaRegMoon size="20px" />
    </div>
  );
};

export default ThemeToggle;
