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
        <div className="border-b border-neutral-300 lg:mt-[40px] px-8 md:px-16">
            <div className="flex flex-wrap lg:py-[100px] lg:px-[120px] pt-[100px] pb-[48px] lg:pb-[64px] justify-between max-w-[1200px] mx-auto">
                <div className="w-full xl:w-2/5 max-w-2xl flex flex-col items-center xl:items-start">
                    <motion.h1 variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, }}
                        initial="hidden" animate="visible" className="pb-[24px] text-4xl font-thin tracking-tight md:text-6xl" style={{ lineHeight: 0.75 }}>
                        Krishna Singh
                    </motion.h1>

                    <motion.span variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.5, delay: 0.5 } }, }}
                        initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent p-1">
                        Full Stack Developer
                    </motion.span>

                    <motion.p variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 1 } }, }}
                        initial="hidden" animate="visible" className="max-w-2xl p-2 font-light text-md md:text-lg tracking-wide mb-2 lg:mb-0">
                        {HERO_CONTENT}
                    </motion.p>
                </div>

                <div className="w-full xl:w-3/5 max-w-2xl flex flex-col items-center xl:items-center">
                    <div className="flex justify-center">
                        <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }} className="rounded-2xl max-h-[400px]" src={profilePic} alt="ks-profile-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;