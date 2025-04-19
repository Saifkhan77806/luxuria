'use client'
import { useState } from "react"
import Titles from "../blocks/title/Titles"
import PlansCard from "@/components/blocks/plans/PlansCard"
import { RxStack } from "react-icons/rx"
import { PiStack, PiStackPlus } from "react-icons/pi"
import {motion} from "framer-motion"

const Plans = () => {

    const [isLeft, setIsLeft] = useState(true)

  return (
    <div id="plan" className="flex flex-col items-center bg-black w-full pb-28">
        <Titles heading="Plans" title="Flexible plans for growth" subtitle="Transparent pricing designed to fit your requirements."  />

        {/* Plans */}
        <div className="flex flex-col items-center">
        {/* Plans heads */}
        <motion.div initial={{opacity: 0, y:3}} animate={{opacity: 1, y:0}} transition={{duration:0.8, delay:0.5}} className="relative h-10 my-5 bg-gray-700 text-white rounded-md border border-gray-500 flex gap-6 p-2">
            <div className={`absolute top-1 w-[45%] ${isLeft? "left-1" : "right-1"} transition-all pr-3 rounded-md h-8 bg-purple-600`}></div>
            <p className="z-10 w- cursor-pointer" onClick={()=>setIsLeft(true)}>Monthly</p>
            <p className="z-10  w-auto cursor-pointer" onClick={()=>setIsLeft(false)}>Annaully</p>
        </motion.div>

        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full gap-10 p-5">
            <PlansCard
            icon={<RxStack />} 
            time={isLeft?"monthly" : "annually"}
            title="Basic" 
            description="Essential tools and features for starting your journey with ease."
            price={isLeft?"480" : "2000" }
            features={[
             "Baisc workflow automation",
             "Basic chatbot development",
             "60 content request",
             "E-mail support",
             "1 consultation a month"]} />

            <PlansCard 
            icon={<PiStack />}
            time={isLeft?"monthly" : "annually"}
            title="Professional" 
            description="Essential tools and features for starting your journey with ease."
            price={isLeft?"960" : "9600" }
            features={[
             "Baisc workflow automation",
             "Basic chatbot development",
             "60 content request",
             "E-mail support",
             "1 consultation a month"]} />

            <PlansCard 
            icon={<PiStackPlus />}
            time={isLeft?"monthly" : "annually"}
            title="Enterprises" 
            description="Essential tools and features for starting your journey with ease."
            price={isLeft?"1440" : "14400" }
            features={[
             "Baisc workflow automation",
             "Basic chatbot development",
             "60 content request",
             "E-mail support",
             "1 consultation a month"]} />


        </div>

        </div>

    </div>
  )
}

export default Plans