'use client'
import {motion} from "framer-motion"
import Browserline from "../Browserline"

const Cardimgtwo = () => {
  return (
    <div className="bg-gray-400 overflow-hidden h-60 rounded-lg relative">
      
      {/* browser line */}
      <Browserline />

    {/* side tab */}

    <motion.p initial={{opacity:0, y:1}} animate={{opacity:1, y:0}} transition={{duration: 0.8}} className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam reprehenderit corrupti? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis ex assumenda perferendis totam vel expedita velit eius corporis error? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</motion.p>
       

       
       
        <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-b from-transparent via-transparent via-[60%] to-[rgba(61,59,59,0.46)]"></div>
    </div>
  )
}


export default Cardimgtwo