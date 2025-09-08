import { RiReactjsLine } from "react-icons/ri";
import { FaAngular, FaPython, FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiMongodb, SiJavascript } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: { duration, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
});

const Technologies = () => {
  const techs = [
    { icon: <SiJavascript className="text-7xl text-yellow-400" />, name: "JavaScript", duration: 2 },
    { icon: <FaAngular className="text-7xl text-red-700" />, name: "Angular", duration: 3 },
    { icon: <SiDotnet className="text-7xl text-blue-600" />, name: ".NET", duration: 4 },
    { icon: <DiMysql className="text-7xl text-blue-500" />, name: "MySQL", duration: 2.5 },
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React", duration: 2.5 },
    { icon: <FaPython className="text-7xl text-yellow-400" />, name: "Python", duration: 5 },
    { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "Node.js", duration: 3.5 },
  ];

  return (
    <div className="border-b border-neutral-300 pb-24 px-4 md:px-8 lg:px-12 xl:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mb-12 lg:my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {techs.map((tech, idx) => (
          <motion.div
            key={tech.name}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-600 p-4"
            data-tooltip-id={`tooltip-${idx}`}
          >
            {tech.icon}
            <Tooltip id={`tooltip-${idx}`} place="bottom" content={tech.name} style={{ fontSize: "28px" }} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
