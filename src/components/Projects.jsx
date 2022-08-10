import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/ProjectsData";
import PicturesModal from "./PicturesModal";

console.log(projectsData);

export default function Projects() {
  const [selectedPicture, setSelectedPicture] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <div id="projects" className="bg-gray-100 pb-10 pt-10 md:pt-0">
      <div className="p-8 bg-white w-11/12 rounded-lg shadow m-auto">
        <p className="text-center text-3xl font-bold text-gray-800 mb-12">
          Principais projetos
        </p>
        <div className="flex items-center flex-col md:flex-row justify evenly md:justify-center">
          <PicturesModal
            picture={selectedPicture}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
          {projectsData.map((item, index) => (
            <ProjectCard
              key={index}
              setSelectedPicture={setSelectedPicture}
              setOpenModal={setOpenModal}
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
