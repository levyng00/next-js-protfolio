"use client";
import Contact from "@/components/contact/Contact";
import WhereWork from "@/components/experience/WhereWork";
import AboutMe from "@/components/landingPage/AboutMe";
import Landing from "@/components/landingPage/Landing";
import Projects from "@/components/projects/Projects";
import { useNavStore } from "@/hooks/store/useStore";
import Section from "@/lib/Section";
import { motion } from "framer-motion";
export default function Home() {
  const navState = useNavStore((state) => state.navState);
  return (
    <div>
      <Landing />
      <AboutMe />
      <WhereWork />
      <Projects />
      <Contact />
    </div>
  );
}
