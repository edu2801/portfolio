import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/ProjectsData";
import PicturesModal from "./PicturesModal";

export default function Projects({ isPortuguese }) {
  const [selectedPicture, setSelectedPicture] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <div id="projects" className="bg-gray-100 pb-10 pt-10 md:pt-0">
      <div className="p-8 bg-white w-11/12 rounded-lg shadow m-auto">
        <p className="text-center text-3xl font-bold text-gray-800 mb-12">
          {isPortuguese ? "Principais projetos" : "Main Projects"}
        </p>
        <div className="flex items-center flex-col lg:flex-row justify evenly lg:justify-center">
          <PicturesModal
            picture={selectedPicture}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
          {isPortuguese
            ? projectsData.portuguese.map((item, index) => (
                <ProjectCard
                  key={index}
                  setSelectedPicture={setSelectedPicture}
                  setOpenModal={setOpenModal}
                  picture={item.picture}
                  title={item.title}
                  description={item.description}
                  technology={item.technology}
                />
              ))
            : projectsData.english.map((item, index) => (
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
