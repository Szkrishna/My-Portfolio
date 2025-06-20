// import React from "react";
// import { FaLinkedin, FaGithub, FaHackerrank, FaFileAlt } from "react-icons/fa";
// import { SiCodingninjas } from "react-icons/si";
// import { Tooltip } from "react-tooltip";

// const Navbar = ({ scrollToSection, sections }) => {
//   return (
//     <nav
//       className="marker:mb-20 flex items-center justify-between py-8 lg:px-[80px]"
//       style={{
//         position: "fixed",
//         background: "rgb(34, 34, 34)",
//         minWidth: "100%",
//         zIndex: "2",
//       }}
//     >
//       <div className="flex flex-shrink-0 items-center px-3">
//         <div className="mx-2 w-auto">
//           <p className="text-5xl font-medium bg-gradient-to-r from-green-700 to-red-700 via-blue-700 bg-clip-text text-transparent tracking-tight">
//             KS
//           </p>
//         </div>
//         <div className="ml-8 my-4 flex items-center justify-center gap-4 text-2xl text-white">
//           <a href="https://www.linkedin.com/in/krishna-singh-5a2244196/" target="_blank" data-tooltip-id="linkedin">
//             <FaLinkedin />
//           </a>
//           <Tooltip id="linkedin" place="bottom" content="LinkedIn" style={{ fontSize: "16px", backgroundColor: "bg-gray-500" }} />

//           <a href="https://github.com/Szkrishna" target="_blank" data-tooltip-id="github">
//             <FaGithub />
//           </a>
//           <Tooltip id="github" place="bottom" content="GitHub" style={{ fontSize: "16px", backgroundColor: "bg-gray-500" }} />

//           <a href="https://www.hackerrank.com/profile/krisnas9792" target="_blank" data-tooltip-id="hackerrank">
//             <FaHackerrank />
//           </a>
//           <Tooltip id="hackerrank" place="bottom" content="HackerRank" style={{ fontSize: "16px", backgroundColor: "bg-gray-500" }} />

//           {/* <a href="https://www.naukri.com/code360/profile/0cc282c5-cc07-4aa1-92fd-e827575a2843" target="_blank" data-tooltip-id="coding-ninjas">
//             <SiCodingninjas />
//           </a>
//           <Tooltip id="coding-ninjas" place="bottom" content="Coding Ninjas" style={{ fontSize: "16px" }} /> */}

//           <a href="https://drive.google.com/file/d/11NMxvbG-mLYy4Js1Us8QCKHR18HNsiZd/view?usp=sharing" target="_blank" data-tooltip-id="cv">
//             <FaFileAlt />
//           </a>
//           <Tooltip id="cv" place="bottom" content="Download CV" style={{ fontSize: "16px", backgroundColor: "bg-gray-500" }} />
//         </div>
//       </div>

//       <div className="hidden sm:ml-8 sm:block">
//         <div className="flex space-x-2">
//           <button onClick={() => scrollToSection(sections.heroRef)}
//             className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:bg-gray-500 hover:text-white">
//             Home
//           </button>
//           <button onClick={() => scrollToSection(sections.aboutRef)}
//             className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:bg-gray-500 hover:text-white">
//             About
//           </button>
//           <button onClick={() => scrollToSection(sections.technologiesRef)}
//             className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:bg-gray-500 hover:text-white">
//             Technologies
//           </button>
//           <button onClick={() => scrollToSection(sections.experienceRef)}
//             className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:bg-gray-500 hover:text-white">
//             Experience
//           </button>
//           <button onClick={() => scrollToSection(sections.projectsRef)}
//             className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:bg-gray-500 hover:text-white">
//             Projects
//           </button>
//           <button onClick={() => scrollToSection(sections.contactsRef)}
//             className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:bg-gray-500 hover:text-white">
//             Contact
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { FaLinkedin, FaGithub, FaHackerrank, FaFileAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({ scrollToSection, sections }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    { label: "Home", ref: sections.heroRef },
    { label: "About", ref: sections.aboutRef },
    { label: "Technologies", ref: sections.technologiesRef },
    { label: "Experience", ref: sections.experienceRef },
    { label: "Projects", ref: sections.projectsRef },
    { label: "Contact", ref: sections.contactsRef },
  ];

  return (
    <nav className="fixed z-20 w-full bg-[#091022] text-white border-b border-gray-700 py-4 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex justify-between items-center">
        {/* Logo + Social Icons */}
        <div className="flex items-center gap-6">
          <motion.p
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
          >
            KS
          </motion.p>

          <div className="flex gap-4 text-xl">
            <a
              href="https://www.linkedin.com/in/krishna-singh-5a2244196/"
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id="linkedin"
              className="text-[#0A66C2] hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <Tooltip id="linkedin" place="bottom" content="LinkedIn" style={{ fontSize: "14px", backgroundColor: "#6B7280" }} />

            <a
              href="https://github.com/Szkrishna"
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id="github"
              className="text-gray-300 hover:text-white hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
            <Tooltip id="github" place="bottom" content="GitHub" style={{ fontSize: "14px", backgroundColor: "#6B7280" }} />

            <a
              href="https://www.hackerrank.com/profile/krisnas9792"
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id="hackerrank"
              className="text-[#2EC866] hover:scale-110 transition-transform"
            >
              <FaHackerrank />
            </a>
            <Tooltip id="hackerrank" place="bottom" content="HackerRank" style={{ fontSize: "14px", backgroundColor: "#6B7280" }} />

            <a
              href="https://drive.google.com/file/d/11NMxvbG-mLYy4Js1Us8QCKHR18HNsiZd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id="cv"
              className="text-yellow-400 hover:scale-110 transition-transform"
            >
              <FaFileAlt />
            </a>
            <Tooltip id="cv" place="bottom" content="Download CV" style={{ fontSize: "14px", backgroundColor: "#6B7280" }} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-2">
          {navItems.map((item, index) => (
            <motion.button
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={index}
              onClick={() => {
                scrollToSection(item.ref);
                setActiveSection(item.label);
              }}
              className={`rounded px-3 py-2 text-sm font-medium transition-colors duration-200
                ${activeSection === item.label ? "bg-blue-600 text-white" : "text-white"}
                hover:bg-gray-700`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} className="text-white" /> : <Menu size={26} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mt-2 flex flex-col sm:hidden bg-[#1e293b] border-t border-gray-600 p-2">
          {navItems.map((item, index) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={index}
              onClick={() => {
                scrollToSection(item.ref);
                setActiveSection(item.label);
                setMenuOpen(false);
              }}
              className={`text-left px-3 py-2 text-sm transition-colors duration-200
                ${activeSection === item.label ? "bg-blue-600 text-white" : "text-white"}
                hover:bg-gray-700`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;