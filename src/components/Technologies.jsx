import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaAngular } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import {motion} from "framer-motion";

const iconVarients = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-300 pb-24">
            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconVarients(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4" data-tooltip-id="react">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <Tooltip id="react" place="bottom" content="React" style={{ fontSize: "28px" }} />

                <motion.div variants={iconVarients(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4" data-tooltip-id="angular">
                    <FaAngular className="text-7xl text-red-700" />
                </motion.div>
                <Tooltip id="angular" place="bottom" content="Angular" style={{ fontSize: "28px" }} />

                <motion.div variants={iconVarients(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4" data-tooltip-id="node">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <Tooltip id="node" place="bottom" content="Node.js" style={{ fontSize: "28px" }} />

                <motion.div variants={iconVarients(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4" data-tooltip-id="python">
                    <FaPython className="text-7xl text-yellow-400" />
                </motion.div>
                <Tooltip id="python" place="bottom" content="Python" style={{ fontSize: "28px" }} />

                <motion.div variants={iconVarients(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4" data-tooltip-id="mysql">
                    <DiMysql className="text-7xl text-blue-500" />
                </motion.div>
                <Tooltip id="mysql" place="bottom" content="MySQL" style={{ fontSize: "28px" }} />

                <motion.div variants={iconVarients(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4" data-tooltip-id="mongodb">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
                <Tooltip id="mongodb" place="bottom" content="MongoDB" style={{ fontSize: "28px" }} />
            </motion.div>
        </div>
    )
}

export default Technologies;