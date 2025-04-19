'use client'
import {motion} from "framer-motion"


interface TitlebtnProps {
    text: String
}

export const Titlebtn = ({text}: TitlebtnProps) => {

  return (
    <motion.span initial={{opacity: 0, y:30}} animate={{opacity: 1, y:0}} transition={{duration: 0.8, ease: "easeIn"}} className="text-gray-100 border font-semibold border-gray-400 bg-[rgb(13,13,13)] w-auto pt-1 pb-1 pl-1.5 pr-1.5 rounded-md">{text}</motion.span>
  )
}
