// import React from 'react';
import aboutImg from "../assets/about.jpg";
import {ABOUT_TEXT} from "../constants";
import {motion} from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-300 pb-4 px-4 md:px-8 lg:px-12 xl:px-16">
            <h2 className="mb-12 lg:my-20 text-center text-4xl">About
                <span className="text-neutral-500">Me</span>
            </h2>
            <div className="flex flex-wrap items-center">
                <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 0.5}} className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center lg:justify-end">
                        <img className="rounded-2xl" src={aboutImg} alt="about-img" style={{ width: "28rem" }}/>
                    </div>
                </motion.div>
                <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 0.5}} className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="max-w-lg py-8 lg:pe-8">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;