'use client'
import { Arrbtn } from "@/components/blocks/buttons/Arrbtn"
import { Titlebtn } from "@/components/blocks/buttons/Titlebtn"
import { CSSProperties } from 'react';
import { motion } from "framer-motion";


export const Hero = () => {

  const brands = ["Solitaire", "Tawakkul", "Taqwa", "Tanish"];
  const repeated = [...brands, ...brands]; // duplicate for seamless loop

  const scrollAnimation: CSSProperties = {
    animation: 'scroll 10s linear infinite',
  };

  return (
    <div id="home" className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-black via-gray-950 to-black  overflow-hidden">
      {/* Blurry floating background shapes */}
      <div className="absolute w-72 h-72 max-md:w-60 max-md:h-60 bg-purple-600 opacity-30 rounded-full blur-3xl top-20 left-20 z-0"></div>
      <div className="absolute w-96 h-96 max-md:w-72 max-md:h-72 bg-purple-600 opacity-20 rounded-full blur-2xl top-40 right-10 z-0 max-sm:hidden"></div>

      {/* title */}
      <div >
        <Titlebtn text={"Luxuria - AI Image generator"} />
      </div>

      <div className="max-md:px-2.5 max-sm:px-4">
        <motion.h1 initial={{ opacity: 0, y: 30, fontSize: "40px" }}
          animate={{ opacity: 1, y: 0, fontSize: "48px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl max-md:text-3xl font-bold text-gray-100 mt-4 text-center max-sm:text-3xl">Unleash Your Creativity with Luxuria</motion.h1>

        <motion.p
         initial={{ opacity: 0, y: 30, fontSize: "12px" }}
         animate={{ opacity: 1, y: 0, fontSize: "18px" }}
         transition={{ delay:0.1, duration: 0.8, ease: "easeOut" }}
        className="text-gray-300 mt-2 text-lg text-center">Transform your ideas into stunning jewelry designs with our AI-powered generator.</motion.p>
      </div>

      {/* button */}
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay:0.2, duration: 0.8, ease: "easeOut" }} 
      className="mt-6">
        <Arrbtn />
      </motion.div>

      {/* slide show infnity of text solitaire, tawakull, tanish, taqwa */}

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay:1.5, ease: "easeOut" }}
       className="relative overflow-hidden w-[70%] py-6 mt-3 border border-gray-500 rounded-md bg-gray-900 opacity-80">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-md opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-md opacity-70"></div>
        {/* Keyframes style tag */}
        <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

        <div className="flex whitespace-nowrap " style={scrollAnimation}>
          {repeated.map((text, idx) => (
            <span
              key={idx}
              className="text-3xl font-semibold text-gray-200 px-8 inline-block"
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>

    </div>
  )
}
