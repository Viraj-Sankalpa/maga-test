'use client';

import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);
  const [visionSubmenuOpen, setVisionSubmenuOpen] = useState(false);
  const [projectsSubmenuOpen, setProjectsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutSubmenu = () => {
    setAboutSubmenuOpen(!aboutSubmenuOpen);
  };

  const toggleVisionSubmenu = () => {
    setVisionSubmenuOpen(!visionSubmenuOpen);
  };

  const toggleProjectsSubmenu = () => {
    setProjectsSubmenuOpen(!projectsSubmenuOpen);
  };

  return (
    <header className=" bg-[#00464d] fixed h-16 top-0 left-0 mb-4 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Maga Logo */}
        <div className="relative left-1/2 transform -translate-x-1/2">
          <Link to="home" smooth={true} duration={500}>
            <Image
              src="/images/logo/Maga-Logo-white.png"
              width={100}
              height={150}
              alt="Company Logo"
              className="h-10 cursor-pointer"
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="flex flex-col space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div
            className={`h-1 w-8 bg-white rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-8 bg-white rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-8 bg-white rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Pop-up Menu */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-64 h-full bg-[#00464d] text-white transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <div className="h-1 w-6 bg-white rounded rotate-45"></div>
          <div className="h-1 w-6 bg-white rounded -rotate-45 -mt-1.5"></div>
        </button>
        <ul className="mt-10 space-y-4 px-6">
          <li className="hover:text-gray-300">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            {/* About Us Section */}
            <button
              className="w-full text-left flex justify-between items-center hover:text-gray-300 focus:outline-none"
              onClick={toggleAboutSubmenu}
            >
              <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={toggleMenu}
                  >
              About Us
              </Link>
              <span>
                {aboutSubmenuOpen ? (
                  <span className="transform rotate-180">▼</span>
                ) : (
                  <span>▼</span>
                )}
              </span>
            </button>
      
            {aboutSubmenuOpen && (
              <ul className="mt-2 ml-4 space-y-2 text-gray-300">
                <li className="hover:text-white">
                  <Link
                    to="about-brief"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={toggleMenu}
                  >
                    Maga in Brief
                  </Link>
                </li>
                <li>
             
                  <button
                    className="w-full text-left flex justify-between items-center hover:text-white focus:outline-none"
                    onClick={toggleVisionSubmenu}
                  >
                    <Link
                    to="vision-mission"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={toggleMenu}
                  >
                    Vision & Mission
                    </Link>
                    <span>
                      {visionSubmenuOpen ? (
                        <span className="transform rotate-180">▼</span>
                      ) : (
                        <span>▼</span>
                      )}
                    </span>
                  </button>
                  {visionSubmenuOpen && (
                    <ul className="mt-2 ml-4 space-y-2">
                      <li className="hover:text-white">
                        <Link
                          to="vision"
                          smooth={true}
                          duration={500}
                          className="cursor-pointer"
                          onClick={toggleMenu}
                        >
                          Vision
                        </Link>
                      </li>
                      <li className="hover:text-white">
                        <Link
                          to="mission"
                          smooth={true}
                          duration={500}
                          className="cursor-pointer"
                          onClick={toggleMenu}
                        >
                          Mission
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li>
            {/* Projects Section */}
            <button
              className="w-full text-left flex justify-between items-center hover:text-gray-300 focus:outline-none"
              onClick={toggleProjectsSubmenu}
            >
              <Link
                          to="projects"
                          smooth={true}
                          duration={500}
                          className="cursor-pointer"
                          onClick={toggleMenu}
                        >
              Projects
              </Link>
              <span>
                {projectsSubmenuOpen ? (
                  <span className="transform rotate-180">▼</span>
                ) : (
                  <span>▼</span>
                )}
              </span>
            </button>
   
            {projectsSubmenuOpen && (
              <ul className="mt-2 ml-4 space-y-2 text-gray-300">
                <li className="hover:text-white">
                  <Link
                    to="completed-projects"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={toggleMenu}
                  >
                    Completed
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link
                    to="ongoing-projects"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={toggleMenu}
                  >
                    Ongoing
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-gray-300">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
