// import React from 'react';
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Tooltip } from "react-tooltip";
import { SiCodingninjas } from "react-icons/si";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaHackerrank, FaFileAlt } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="mb-8">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}
        className="mb-8 text-center text-4xl font-bold text-emerald-400">
        Get in Touch
      </motion.h2>

      <div className="max-w-3xl mx-auto text-center">
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }}
          className="my-2 text-lg flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-2xl" />
          {CONTACT.address}
        </motion.p>

        <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 1 }}
          className="my-2 text-lg flex items-center justify-center gap-2">
          <FaEnvelope className="text-2xl" />
          <a href={`mailto:${CONTACT.email}`} className="text-gray-200 hover:text-white transition duration-300">
            {CONTACT.email}
          </a>
        </motion.p>

        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }}
          className="my-2 text-lg flex items-center justify-center gap-2">
          <FaPhoneAlt className="text-2xl" />
          {CONTACT.phoneNo}
        </motion.p>

        <div className="my-4 flex items-center justify-center gap-4 text-2xl text-white">
          <Link to="https://www.linkedin.com/in/krishna-singh-5a2244196/" target="_blank" data-tooltip-id="linkedin">
            <FaLinkedin />
          </Link>
          <Tooltip id="linkedin" place="bottom" content="LinkedIn" style={{ fontSize: "16px" }} />

          <Link to="https://github.com/Szkrishna" target="_blank" data-tooltip-id="github">
            <FaGithub />
          </Link>
          <Tooltip id="github" place="bottom" content="GitHub" style={{ fontSize: "16px" }} />

          <Link to="https://www.hackerrank.com/profile/krisnas9792" target="_blank" data-tooltip-id="hackerrank">
            <FaHackerrank />
          </Link>
          <Tooltip id="hackerrank" place="bottom" content="HackerRank" style={{ fontSize: "16px" }} />

          <Link to="https://www.naukri.com/code360/profile/0cc282c5-cc07-4aa1-92fd-e827575a2843" target="_blank" data-tooltip-id="coding-ninjas">
            <SiCodingninjas />
          </Link>
          <Tooltip id="coding-ninjas" place="bottom" content="Coding Ninjas" style={{ fontSize: "16px" }} />

          <Link to="https://drive.google.com/file/d/1je0PiGzCMeypxA6B3zgIvIbW19gt8NI1/view?usp=sharing" target="_blank" data-tooltip-id="cv">
            <FaFileAlt />
          </Link>
          <Tooltip id="cv" place="bottom" content="Download CV" style={{ fontSize: "16px" }} />
        </div>

        {/* <div className="mt-8 mb-16">
          <a href="#contact-form" className="inline-block bg-white text-rose-500 hover:bg-rose-500 hover:text-white py-2 px-5 rounded-full text-lg font-semibold transition duration-300">
            Send a Message
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Contacts;
