// import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hero-img.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay }
    }
})
const Hero = () => {
    return (
        <div className="border-b border-neutral-300 lg:mt-[80px]">
            <div className="flex flex-wrap lg:py-[100px] lg:px-[180px]">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={{hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },}}
                            initial="hidden" animate="visible" className="pb-[36px] text-6xl font-thin tracking-tight lg:text-8xl">
                            Krishna Singh
                        </motion.h1>

                        <motion.span variants={{hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.5, delay: 0.5 } },}}
                            initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>

                        <motion.p variants={{hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 1 } },}}
                            initial="hidden" animate="visible" className="max-w-xl py-4 pe-4 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center">
                        <motion.img initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1.5, delay: 1.5}} className="rounded-2xl max-h-[370px]" src={profilePic} alt="ks-profile-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero