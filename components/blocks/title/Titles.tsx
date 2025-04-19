'use client'
import { useInView } from "react-intersection-observer";
import { Titlebtn } from "../buttons/Titlebtn"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";

interface TitlesProps {
    heading: string;
    title: string;
    subtitle: string;

    }

const Titles = ({heading, title, subtitle}: TitlesProps) => {

  const controls = useAnimation(); // For framer motion
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true }); // Observe element

  useEffect(() => {
    if (inView) {
      controls.start({opacity: 1, y:0});
    }
  }, [inView, controls]);


  return (
    <>
     <div className="title my-6">
        <Titlebtn text={heading} />
        </div>

        <div className="content text-center" ref={ref}>
        <motion.h1 initial={{opacity: 0, y:30}} animate={controls} transition={{duration: 0.8, ease: "easeIn"}} className="text-6xl text-gray-50 max-md:text-5xl">{title}</motion.h1>

        <motion.p initial={{opacity: 0, y:30}} animate={controls} transition={{duration: 0.8, ease: "easeIn"}} className="my-5 font-bold text-gray-300">{subtitle}</motion.p>
        </div>
    </>
  )
}

export default Titles