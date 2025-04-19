'use client'

import {
  motion
} from 'framer-motion'
import Browserline from '@/components/blocks/Browserline'
const data = [
  { day: 'Day 1', value: 30 },
  { day: 'Day 2', value: 50 },
  { day: 'Day 3', value: 40 },
  { day: 'Day 4', value: 60 },
  { day: 'Day 5', value: 55 },
  { day: 'Day 6', value: 45 },
  { day: 'Day 7', value: 70 },
]
const Cardimgthree = () => {
  
  return (
    <div className="bg-[#1c1c1c] rounded-xl  h-60 text-white shadow-md overflow-hidden">
       <Browserline />
      {/* Header */}
      <div className="flex justify-center items-center mb-2 bg-gray-400 h-full">
       {/* loader */}
       <div className="loader text-center">
        Updating ...
          <div className="loader-inner overflow-hidden w-32  h-1 bg-gray-300 rounded-full ">
                <motion.div initial={{x: 0}} animate={{x:128}}  transition={{repeat: Infinity, duration:1, delay:1}}  className="loader-inner w-[30%] h-1 bg-purple-600 rounded-full "></motion.div> 
          </div>
       </div>
      </div>

      {/* Description */}
    </div>
  )
}


export default Cardimgthree