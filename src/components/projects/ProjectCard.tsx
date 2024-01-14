import React from "react";
import { projectData } from "./Projects";
type projectCard = {
  project: projectData;
};
const ProjectCard = ({ project }: projectCard) => {
  return (
    <div className="flex   px-2 gap-12">
      <div className="font-semibold justify-center flex flex-1  ">
        <h1 className="border border-white flex items-center p-2 text-center rounded-md h-14">
          {project.title}
        </h1>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <ul className="flex flex-col gap-2 text-sm ">
          {project.desc.map((data, i) => (
            <li key={i} className="list-disc ">
              {data}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {project.techStack.map((data, i) => {
            return (
              <div
                key={i}
                className="border border-white p-2 text-center rounded-md text-xs bg"
              >
                {data}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
