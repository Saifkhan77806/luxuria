'use client'
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface TesCardProps {

    name: string;
    image: string;
    text: string;
    works: string;
    at: string;
    }


const TesCard = ({name, image, text, works, at}: TesCardProps) => {

    const controls = useAnimation(); // For framer motion
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true }); // Observe element
  
    useEffect(() => {
      if (inView) {
        controls.start({opacity:1, x:0});
      }
    }, [inView, controls]);
  

  return (
    <motion.div initial={{opacity:0, x:"-100px"}} ref={ref} animate={controls} transition={{duration: 0.8}} className="relative flex flex-col px-4 py-3 rounded-xl text-white bg-black border border-gray-600 overflow-hidden">
        {/* gradient */}
        <div className="absolute top-0 left-0 w-20 h-16 bg-purple-600 opacity-30 blur-2xl"></div>
        <div className="absolute right-0 bottom-0 w-20 h-16 bg-purple-600 opacity-30 blur-2xl"></div>

        <div>
            <p className="text-gray-400 text-sm font-bold">
                "{text}"
            </p>
        </div>
        <div className="flex mt-3 gap-2">
            <div className="img w-1/5 h-full rounded-md bg-gray-600 ">
            </div>
            <div className="flex flex-col my-2">
                <p>{name}</p>
                <p>{works}:{at}</p>

            </div>
        </div>
    </motion.div>
  )
}

export default TesCard