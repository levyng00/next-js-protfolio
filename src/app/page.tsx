"use client";
import Board from "@/components/Board";
import Contact from "@/components/contact/Contact";
import WhereWork from "@/components/experience/WhereWork";
import AboutMe from "@/components/landingPage/AboutMe";
import Landing from "@/components/landingPage/Landing";
import Card from "@/components/myProjects/Card";
import NavMenu from "@/components/navMenu/NavMenu";
import Projects from "@/components/projects/Projects";
import { useNavStore } from "@/hooks/store/useStore";
import useMousePosition from "@/hooks/usePointer";

import Section from "@/lib/Section";
import { motion } from "framer-motion";
export default function Home() {
  const navState = useNavStore((state) => state.navState);
  return (
    <div className={`${navState ? "h-screen overflow-hidden" : ""}`}>
      <Landing />
      <AboutMe />
      <WhereWork />
      <Projects />
      <Contact />
    </div>
  );
}
