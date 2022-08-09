import React from "react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-white  w-full pb-4">
      <div className="text-center text-gray-500 text-xl py-4">
        <h1>Contatos</h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-around">
          {/* <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href="#"
            >
              FAQ
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href="#"
            >
              Configuration
            </a>
          </li> */}
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href="https://www.github.com/edu2801"
            >
              Github
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href="https://www.linkedin.com/in/eduardosilva2801/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
