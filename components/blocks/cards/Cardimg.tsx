'use client'
import { Archery } from "@/components/blocks/shapes/Archery"
import {motion} from "framer-motion"
import Browserline from "../Browserline"

export const Cardimg = () => {
  return (
    <div className="bg-gray-400 overflow-hidden h-60 rounded-lg relative">
      
      {/* browser line */}
      
      <Browserline />

        

    {/* side tab */}
        <div className="w-[42%] rounded-lg top-6 flex items-center justify-center  h-[210px] bg-gray-300 absolute right-2">
        <Archery />
        </div>

        <div>
        <div className="w-[50%] h-25 mx-2 rounded-lg bg-gray-300 my-2 center">
          <div className="w-28 h-16 relative">
            <div className="w-3 h-8 bg-gray-400 absolute bottom-0 left-6 origin-bottom">

            <motion.div initial={{height:0}} animate={{height: "100%"}} transition={{repeat: Infinity, repeatType: 'loop', duration: 2, delay: 1 }}  className="absolute bottom-0 left-0 w-full bg-purple-600"></motion.div>
            </div>

            <div className="w-3 h-12 bg-gray-400 absolute bottom-0 left-10">

            </div>

            <div className="w-3 h-10 bg-gray-400 absolute bottom-0 left-14">
            <motion.div initial={{height:0}} animate={{height: "100%"}} transition={{repeat: Infinity, repeatType: 'loop', duration: 2, delay: 4 }}  className="absolute bottom-0 left-0 w-full bg-purple-600"></motion.div>
            </div>

            <div className="w-3 h-14 bg-gray-400 absolute bottom-0 left-18">
              
            </div>
          </div>
        </div>


        <div className="w-[50%] h-25 mx-2 rounded-lg bg-gray-300 my-2 center">
          <div className="w-32 h-20 bg-gray-300 flex gap-1">

            {/* para heading */}
            <div className="bg-gray-400 rounded-sm w-1/2 h-full flex gap-1 ">
              <div className="w-1/2 h-1 bg-gray-300 rounded-md my-3 mx-1"></div>
              <div className="w-1/2 h-1 bg-gray-300 rounded-md my-3 mr-1"></div>
            </div>

            <div className="bg-gray-400 rounded-sm w-1/2 h-full flex gap-1 ">
              <div className="w-1/2 h-1 bg-gray-300 rounded-md my-3 mx-1"></div>
              <div className="w-1/2 h-1 bg-gray-300 rounded-md my-3 mr-1"></div>
            </div>

          </div>
        </div>
        </div>

       
        <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-b from-transparent via-transparent via-[60%] to-[rgba(61,59,59,0.46)]"></div>
    </div>
  )
}
