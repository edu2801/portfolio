import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/ProjectsData";

console.log(projectsData);

export default function Projects() {
  return (
    <div id="projects" className="bg-gray-100 pb-10 pt-10 md:pt-0">
      <div className="p-8 bg-white w-11/12 rounded-lg shadow m-auto">
        <p className="text-center text-3xl font-bold text-gray-800 mb-12">
          Principais projetos
        </p>
        <div className="flex items-center flex-col md:flex-row justify evenly md:justify-center">
          {projectsData.map((item, index) => (
            <ProjectCard
              key={index}
              picture={item.picture}
              title={item.title}
              description={item.description}
              technology={item.technology}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
