// import React from 'react';
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className="mb-12 text-center text-4xl">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="my-3">{CONTACT.address}</motion.p>
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className="my-3">{CONTACT.phoneNo}</motion.p>
        <a href="#" className="text-gray-100">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contacts;