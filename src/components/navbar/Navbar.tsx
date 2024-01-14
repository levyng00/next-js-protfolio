import React from "react";
import HamBurger from "./HamBurger";
import ThemeToggle from "./ThemeToggle";
import Section from "@/lib/Section";

const Navbar = () => {
  return (
    <nav className="flex justify-end ">
      <Section className="flex gap-8 justify-end  items-center">
       
        <div>
          <ThemeToggle />
        </div>
        <div>
          <HamBurger />
        </div>
      </Section>
    </nav>
  );
};

export default Navbar;
