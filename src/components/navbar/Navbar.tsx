"use client";
import React from "react";
import HamBurger from "./HamBurger";
import ThemeToggle from "./ThemeToggle";
import Section from "@/lib/Section";
import { useNavStore } from "@/hooks/store/useStore";
import NavMenu from "../navMenu/NavMenu";

const Navbar = () => {
  const navState = useNavStore((state) => state.navState);
  return (
    <>
      <Section className="bg-purple-500">
        <nav className="flex justify-end ">
          <div className="flex items-center gap-8">
            <ThemeToggle />
            <HamBurger />
          </div>
        </nav>
      </Section>
      <div className="">{navState && <NavMenu />}</div>
    </>
  );
};

export default Navbar;
