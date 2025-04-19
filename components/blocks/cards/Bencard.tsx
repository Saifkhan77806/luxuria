'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface BencardProps {
    icons: React.ReactNode;
    title: string;
    description: string;
}


const Bencard = ({icons, title, description}: BencardProps) => {

    const controls = useAnimation(); // For framer motion
    const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true }); // Observe element
  
    useEffect(() => {
      if (inView) {
        controls.start({opacity:1, y:0});
      }
    }, [inView, controls]);
  

  return (
    <motion.div ref={ref} initial={{opacity:0, y:30}} animate={controls} transition={{duration:0.8, ease:"easeIn", delay:0.5}} className=" relative overflow-hidden flex flex-col items-start px-5 py-5 border border-gray-400 rounded-3xl bg-[#080808]">

        <div className="absolute w-30 h-30 right-[-15px] top-[-5px] rounded-full bg-purple-500 opacity-40 blur-3xl"></div>

        <div className="icons text-white p-2 bg-gray-600 rounded-md">
            {icons}
        </div>
        <div className="title text-white py-3 text-xl">
            <h3>{title}</h3>
        </div>
        <div className="description text-gray-300">
            <p>
        {description}
            </p>
        </div>
    </motion.div>
  )
}

export default Bencard