// import React from 'react';
import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-300 px-8 md:px-16">
            <h2 className="my-8 md:my-16 text-center text-4xl">About
                <span className="text-neutral-500">Me</span>
            </h2>
            <div className="flex flex-wrap lg:px-[120px] pb-[48px] lg:pb-[64px] justify-between max-w-[1200px] mx-auto">
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2">
                    <div className="flex items-center justify-center lg:justify-start">
                        <img className="rounded-2xl max-h-[420px] lg:px-2" src={aboutImg} alt="about-img" />
                    </div>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start mt-3 lg:mt-0">
                        {/* <p className="max-w-lg py-8 lg:pe-8">{ABOUT_TEXT}</p> */}
                        <motion.p variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 1 } }, }}
                            initial="hidden" animate="visible" className="max-w-2xl font-light text-base tracking-wide">
                            {ABOUT_TEXT}
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;