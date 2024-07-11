import React from "react";
import logoAbitacolo from "../assets/logoabitacolo.png";
import logoMueble from "../assets/muebleabitacolo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./DropDown";
import DarkButton from "./DarkButton";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black text-center h-10"></div>
      <div className="px-5 lg:px-20">
        <nav className="flex justify-between items-center py-4 border-b-4 border-black">
          <div>
            <img src={logoAbitacolo} alt="Logo Abitacolo" />
          </div>

          <div className="max-sm:hidden">
            <ul className="flex space-x-4 place-self-end text-lg">
              <li className="relative after:content-['·'] after:absolute after:right-[-12px] after:top-1/2 after:transform after:-translate-y-1/2 after:text-lg after:text-black">
                <DarkButton />
              </li>
              <li className="relative after:content-['·'] after:absolute after:right-[-12px] after:top-1/2 after:transform after:-translate-y-1/2 after:text-lg after:text-black">
                <a href="#" className="hover:underline">
                  ESP
                </a>
                /<span>ENG</span>
              </li>
              <li className="relative after:content-['·'] after:absolute after:right-[-12px] after:top-1/2 after:transform after:-translate-y-1/2 after:text-lg after:text-black">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="relative after:content-['·'] after:absolute after:right-[-12px] after:top-1/2 after:transform after:-translate-y-1/2 after:text-lg after:text-black">
                <a href="#" className="hover:underline">
                  nuestra misión
                </a>
              </li>
              <li className="relative">
                <a href="#" className="hover:underline">
                  <FontAwesomeIcon icon={faUser} /> mi cuenta
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:hidden">
            {" "}
            <DropDown />
          </div>
        </nav>
        <header className="text-center my-12 flex flex-col md:flex-row justify-between md:mx-48">
          <div className="">
            <p className="mt-4 text-3xl	 text-left">
              decora tu hogar <span className="font-bold">en Madrid</span> de
              <br /> forma más fácil, barata y<br /> sostenible alquilando
              nuestros
              <br /> <span className="font-bold">muebles recuperados</span>
            </p>
            <div className="mt-8 text-sm border-b-2 border-black flex justify-between">
              <p>hasta 21 · 12 · 2024</p>
              <span className="font-bold">177 muebles recuperados</span>
            </div>
          </div>
          <img
            src={logoMueble}
            alt="Mueble Abitacolo"
            className="mt-4 md:mt-0 w-full md:w-auto"
          />
        </header>
        <div className="mt-10 mb-5 flex justify-between max-sm:hidden">
          <a href="#" className="font-bold text-lg">
            <span className="me-5">
              <FontAwesomeIcon icon={faMessage} size="xl" />
            </span>{" "}
            ¿podemos ayudarte?
          </a>
          <p className="font-bold text-lg">
            ajustes y configuración de cookies
            <span className="ms-5">
              <FontAwesomeIcon icon={faGears} size="xl" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
