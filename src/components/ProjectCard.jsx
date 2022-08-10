import React from "react";

export default function ProjectCard({
  picture,
  title,
  description,
  technology,
  setSelectedPicture,
  setOpenModal,
}) {
  const expandImage = () => {
    setOpenModal(true);
    setSelectedPicture(picture);
  };

  return (
    <div className="p-4">
      <div className="text-center mb-4 opacity-90 border" onClick={expandImage}>
        <img alt="profil" src={picture} className="mx-auto object-cover h-40" />
      </div>
      <div className="text-center h-44">
        <p className="text-2xl text-gray-800 ">{title}</p>
        <p className="text-md   max-w-xs py-4 font-light">{description}</p>
      </div>
      <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto  items-center justify-center">
        <p>{technology}</p>
      </div>
    </div>
  );
}
