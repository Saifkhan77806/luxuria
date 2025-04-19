'use client'
import React, { useEffect } from "react"
import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

interface cardProps {
    children: React.ReactNode;
    cardTitle: string;
    cardText: string;
    href?: string;
    service?: boolean;
}

const Card = ({children, cardTitle, cardText, href, service}: cardProps) => {

  const controls = useAnimation(); // For framer motion
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true }); // Observe element

  useEffect(() => {
    if (inView) {
      controls.start({opacity: 1, x: 0});
    }
  }, [inView, controls]);


  return (
    <motion.div initial={{opacity:0, x:-100}} ref={ref} animate={controls} transition={{duration: 0.8, ease: "easeIn"}} className="flex flex-col mx-5 bg-gray-600 p-5 rounded-3xl border border-gray-400">
        <div>
       {children}
        </div>
       <h1 className="text-2xl text-gray-100 text-shadow font-bold font-sans">{cardTitle}</h1>
        <p className="text-white text-shadow-2xs font-sans font-semibold pr-5">{cardText}</p>
        {
          service && <Button className="bg-purple-600 my-2 hover:bg-purple-700 cursor-pointer">Try Now </Button>
        }
    </motion.div>
  )
}

export default Card
