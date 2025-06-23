import { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaGithub, FaHackerrank, FaFileAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggleButton from "../common/themeToggleButton";

const Navbar = ({ scrollToSection, sections }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const dropdownRef = useRef(null);

  const navItems = [
    { label: "Home", ref: sections.heroRef },
    { label: "About", ref: sections.aboutRef },
    { label: "Technologies", ref: sections.technologiesRef },
    { label: "Experience", ref: sections.experienceRef },
    { label: "Projects", ref: sections.projectsRef },
    { label: "Contact", ref: sections.contactsRef },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed z-20 w-full bg-[#091022] text-white border-b border-gray-700 py-4 px-4 sm:px-8 lg:px-16 xl:px-24">
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
              href="https://drive.google.com/file/d/18ZJf1RMtkKAi8NTtkfWDBOyUUc7E5mU2/view?usp=sharing"
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
        <div className="hidden lg:flex gap-2">
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

        {/* Mobile Theme Toggle + Hamburger */}
        <div className="flex items-center lg:hidden gap-3">
          <ThemeToggleButton inline={true} />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} className="text-white" /> : <Menu size={26} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={dropdownRef}
          className="mt-2 flex flex-col lg:hidden bg-[#1e293b] border-t border-gray-600 p-2"
        >
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