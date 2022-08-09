import React from "react";
import picture from "../assets/images/profile-picture.jpg";

export default function Introduction() {
  return (
    <div
      id="introduction"
      className="relative bg-gray-100 p-4 lg:h-screen lg:pt-16"
    >
      <div className="md:grid md:grid-flow-row-dense md:grid-cols-2 md:gap-12 md:items-center">
        <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 lg:px-40">
          <img
            src={picture}
            alt="profile"
            className="relative mx-auto shadow-lg rounded w-auto "
          />
        </div>
        <div className="lg:col-start-2 md:pl-20">
          <h4 className="text-2xl leading-8 font-extrabold text-gray-900 pt-4 tracking-tight sm:leading-9">
            Olá, eu sou o Eduardo!
          </h4>
          <ul className="mt-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="h-6 w-6"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 text-gray-900  font-bold">
                    Sobre
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 ">
                    Apaixonado por tecnologia e por ajudar as pessoas, me tornei
                    desenvolvedor web com o objetivo de unir minhas paixões para
                    melhorar o mundo.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="h-6 w-6"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 text-gray-900  font-bold">
                    Tecnologias
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 ">
                    As tecnologias que domino são: React.js, Next.js, Node.js
                    com express e React Native.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="h-6 w-6"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 text-gray-900  font-bold">
                    Banco de dados
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 ">
                    Banco de dados: MongoDB e Postgress
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
