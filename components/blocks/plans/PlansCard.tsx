'use client'
import {motion, useAnimation} from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface PlansCardProps {

  icon: React.ReactNode
  time: string
  title: string
  description: string
  price: string
  features: string[]
}


const PlansCard = ({icon, time, title, description, price, features}: PlansCardProps) => {

  const controls = useAnimation(); // For framer motion
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true }); // Observe element

  useEffect(() => {
    if (inView) {
      controls.start({opacity:1, x: 0});
    }
  }, [inView, controls]);


  return (  
    <motion.div ref={ref} initial={{opacity:0, x: "-100px"}} animate={controls} transition={{duration:0.8, delay:1, ease: "easeIn"}} className="flex flex-col bg-black items-start px-5 py-4 border border-gray-500 rounded-3xl relative overflow-hidden">

      <div className="absolute w-30 h-24 top-0 left-0 bg-purple-600 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute w-30 h-24 bottom-0 right-0 bg-purple-600 rounded-full opacity-30 blur-2xl"></div>


      <div className="center text-white">
        <div className="p-1.5 rounded-md bg-gray-600">
          {icon} 
        </div>
        <p className="ml-2">{title}</p>
      </div>

      <h3 className="text-white my-2" >
       <span className="text-3xl">${price}</span> / <span className="font-bold text-sm">{time}</span>
      </h3>

      <p className="text-gray-300 text-sm mb-2">
        {description}
      </p>

      <button className="bg-purple-600 hover:bg-purple-700 w-full text-white py-2 rounded-md cursor-pointer">
        Go Premium
      </button>

      <div className="flex flex-col gap-2 mt-5">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-purple-600">✔</span>
            <p className="text-gray-300 text-sm">{feature}</p>
          </div>
        ))}
</div>
      



    </motion.div>
  )
}

export default PlansCard