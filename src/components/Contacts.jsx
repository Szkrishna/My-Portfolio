// import React from 'react';
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="mb-8">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} 
        className="mb-8 text-center text-4xl font-bold text-emerald-400">
        Get in Touch
      </motion.h2>
      
      <div className="max-w-3xl mx-auto text-center">
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} 
          className="my-6 text-lg flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-2xl" />
          {CONTACT.address}
        </motion.p>
        
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} 
          className="my-6 text-lg flex items-center justify-center gap-2">
          <FaPhoneAlt className="text-2xl" />
          {CONTACT.phoneNo}
        </motion.p>
        
        <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 1 }} 
          className="my-6 text-lg flex items-center justify-center gap-2">
          <FaEnvelope className="text-2xl" />
          <a href={`mailto:${CONTACT.email}`} className="text-gray-200 hover:text-white transition duration-300">
            {CONTACT.email}
          </a>
        </motion.p>

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
