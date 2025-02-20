import React from "react";
import { FaLinkedin, FaGithub, FaHackerrank, FaFileAlt } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";
import { Tooltip } from "react-tooltip";

const Navbar = ({ scrollToSection, sections }) => {
  return (
    <nav
      className="marker:mb-20 flex items-center justify-between py-8 lg:px-[80px]"
      style={{
        position: "fixed",
        background: "rgb(34, 34, 34)",
        minWidth: "100%",
        zIndex: "2",
      }}
    >
      <div className="flex flex-shrink-0 items-center px-3">
        <div className="mx-2 w-auto">
          <p className="text-5xl font-medium bg-gradient-to-r from-green-700 to-red-700 via-blue-700 bg-clip-text text-transparent tracking-tight">
            KS
          </p>
        </div>
        <div className="ml-8 my-4 flex items-center justify-center gap-4 text-2xl text-white">
          <a href="https://www.linkedin.com/in/krishna-singh-5a2244196/" target="_blank" data-tooltip-id="linkedin">
            <FaLinkedin />
          </a>
          <Tooltip id="linkedin" place="bottom" content="LinkedIn" style={{ fontSize: "16px" }} />

          <a href="https://github.com/Szkrishna" target="_blank" data-tooltip-id="github">
            <FaGithub />
          </a>
          <Tooltip id="github" place="bottom" content="GitHub" style={{ fontSize: "16px" }} />

          <a href="https://www.hackerrank.com/profile/krisnas9792" target="_blank" data-tooltip-id="hackerrank">
            <FaHackerrank />
          </a>
          <Tooltip id="hackerrank" place="bottom" content="HackerRank" style={{ fontSize: "16px" }} />

          <a href="https://www.naukri.com/code360/profile/0cc282c5-cc07-4aa1-92fd-e827575a2843" target="_blank" data-tooltip-id="coding-ninjas">
            <SiCodingninjas />
          </a>
          <Tooltip id="coding-ninjas" place="bottom" content="Coding Ninjas" style={{ fontSize: "16px" }} />

          <a href="https://drive.google.com/file/d/1PnPW8lcZMS-B0uorm8mVpwgy52hFIAti/view?usp=drive_link" target="_blank" data-tooltip-id="cv">
            <FaFileAlt />
          </a>
          <Tooltip id="cv" place="bottom" content="Download CV" style={{ fontSize: "16px" }} />
        </div>
      </div>

      <div className="hidden sm:ml-8 sm:block">
        <div className="flex space-x-2">
          <button onClick={() => scrollToSection(sections.heroRef)}
            className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:bg-gray-500 hover:text-white">
            Home
          </button>
          <button onClick={() => scrollToSection(sections.aboutRef)}
            className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:bg-gray-500 hover:text-white">
            About
          </button>
          <button onClick={() => scrollToSection(sections.technologiesRef)}
            className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:bg-gray-500 hover:text-white">
            Technologies
          </button>
          <button onClick={() => scrollToSection(sections.experienceRef)}
            className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:bg-gray-500 hover:text-white">
            Experience
          </button>
          <button onClick={() => scrollToSection(sections.projectsRef)}
            className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:bg-gray-500 hover:text-white">
            Projects
          </button>
          <button onClick={() => scrollToSection(sections.contactsRef)}
            className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:bg-gray-500 hover:text-white">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
