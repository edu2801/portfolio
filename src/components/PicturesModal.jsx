import React from "react";

export default function PicturesModal({ picture, openModal, setOpenModal }) {
  const asda = (e) => {
    if (e.target.id === "modal-root") {
      setOpenModal(false);
    }
  };

  return (
    <div onClick={(e) => asda(e)} className={openModal ? "block" : "hidden"}>
      <div
        id="modal-root"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <img
              alt="profil"
              src={picture}
              className="mx-auto object-cover max-h-96"
            />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}
