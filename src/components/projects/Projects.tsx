import Section from "@/lib/Section";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Section className="flex items-center justify-center ">
      <div className="flex flex-col gap-10">
        <h1
          className="text-5xl font-bold border-b-2 border-white text-center"
          onClick={() => console.log("sdsd")}
        >
          Projects I have builed
        </h1>
        {projectData.map((project, i) => {
          return <ProjectCard key={i} project={project} />;
        })}
      </div>
    </Section>
  );
};
const projectData = [
  {
    title: "Fullstack Chat App",
    desc: [
      "Designed and developed a comprehensive chat system application employing the MERN stack and websockets.Leveraged expertise in full-stack development to create a dynamic and responsive chat platform",
      "Acquired in-depth knowledge of websocket usage and gained experience in implementing JWT token authentication for secure connection.",
    ],
    techStack: ["Javascript", "React", "Sass", "Zusntand"],
  },
  {
    title: "Python App",
    desc: [
      "Built a slot machine betting game using Python that covered all the important topics of object-oriented programming (OOP)concepts.",
    ],
    techStack: ["Javascript", "React", "Sass", "Zusntand"],
  },
  {
    title: "Code Editor",
    desc: [
      "Constructed a code editor similar to CodePen using React, expanding proficiency in front-en development",
      "Acquired expertise in utilizing the local storage hook and rendering custom HTML, CSS, and JavaScript within a practical code editor project.",
    ],
    techStack: ["Javascript", "React", "Sass", "Zusntand"],
  },
];

export type projectData = (typeof projectData)[0];
export default Projects;
