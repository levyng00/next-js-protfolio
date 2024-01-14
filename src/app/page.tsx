"use client";
import Board from "@/components/Board";
import Contact from "@/components/contact/Contact";
import WhereWork from "@/components/experience/WhereWork";
import AboutMe from "@/components/landingPage/AboutMe";
import Landing from "@/components/landingPage/Landing";
import Card from "@/components/myProjects/Card";
import Projects from "@/components/projects/Projects";
import { useNavStore } from "@/hooks/store/useStore";
import useMousePosition from "@/hooks/usePointer";
import Layout from "@/lib/Layout";
import Section from "@/lib/Section";
import { motion } from "framer-motion";
export default function Home() {
  const navState = useNavStore((state) => state.navState);
  return (
    <Layout>
      <div className={`${navState ? "h-screen overflow-hidden" : ""}`}>
        <Landing />
        <AboutMe />
        <WhereWork />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}
