import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="mb-8 px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mb-8 text-center text-4xl font-bold"
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="my-4 lg:my-2 text-lg flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2"
        >
          <FaPhoneAlt className="text-lg text-green-500" />
          <a href="tel:+919818713013" className="hover:underline">
            +91 9818713013
          </a>
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4 lg:my-2 text-lg flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2"
        >
          <FaEnvelope className="text-lg text-red-500" />
          <a href="mailto:krisnas9792@gmail.com" className="hover:underline">
            krisnas9792@gmail.com
          </a>
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="my-4 lg:my-2 text-lg flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2"
        >
          <FaLinkedin className="text-lg text-blue-600" />
          <a
            href="https://www.linkedin.com/in/krishna-singh-5a2244196"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/krishna-singh-5a2244196
          </a>
        </motion.p>
      </div>

    </div>
  );
}

export default Contacts;
