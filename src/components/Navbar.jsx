import React from 'react';
import { FaLinkedin, FaGithub, FaHackerrank, FaFileAlt } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="marker:mb-20 flex items-center justify-between py-12">
      <div className="flex flex-shrink-0 items-center">
        <div className="mx-2 w-auto">
          <p className="text-5xl font-medium bg-gradient-to-r from-green-700 to-red-700 via-blue-700 bg-clip-text text-transparent tracking-tight">
            Ks
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl text-white">
        <Link to="https://www.linkedin.com/in/krishna-singh-5a2244196/" target="_blank">
          <FaLinkedin />
        </Link>
        <Link to="https://github.com/Szkrishna" target="_blank">
          <FaGithub />
        </Link>
        <Link to="https://www.hackerrank.com/profile/krisnas9792" target="_blank">
          <FaHackerrank />
        </Link>
        <Link to="https://www.naukri.com/code360/profile/0cc282c5-cc07-4aa1-92fd-e827575a2843" target="_blank">
          <SiCodingninjas />
        </Link>
        <Link to="https://drive.google.com/file/d/1je0PiGzCMeypxA6B3zgIvIbW19gt8NI1/view?usp=sharing" target="_blank">
          <FaFileAlt />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;