import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavStore } from "@/hooks/store/useStore";
import Link from "next/link";
import Section from "@/lib/Section";
const NavMenu = () => {
  const updateNavState = useNavStore((state) => state.updateNavState);
  const [clickedItem, setClickedItem] = useState(null);
  const handleClick = (item:string, i) => {
    setClickedItem(item);
  };
  return (
    <AnimatePresence>
      {updateNavState && (
        <motion.div
          className="absolute h-screen bg-black w-screen z-[999] "
          initial={{ y: -1000 }}
          animate={{
            y: 0,
            opacity: [],
          }}
          exit={{
            y: -1000,
          }}
          transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
        >
          <div className="flex flex-col g-green-400 h-full justify-evenly ">
            {navMenuData.map((item, i) => {
              return (
                <ul key={i} className="border-b-2 border-white">
                  <li
                    className="font-bold text-7xl w-screen px-9"
                    onClick={() => handleClick(item, i)}
                  >
                    <Link
                      href=""
                      className={`hover:text-purple-600 hover:text-9xl ${
                        clickedItem === item
                          ? "text-green-800 bg-slate-600"
                          : ""
                      }`}
                    >
                      {item.item}
                    </Link>
                    {/* <div className=" bg-slate-800 w-1/5 h-1 relative bottom-9"></div> */}
                  </li>
                </ul>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const navMenuData = [
  {
    item: "Home",
  },
  { item: "Blogs" },
  {
    item: "Github",
  },
  {
    item: "Contact",
  },
];
export default NavMenu;
