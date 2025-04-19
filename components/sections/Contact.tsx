'use client';
import { GoMail } from "react-icons/go"
import { Titlebtn } from "../blocks/buttons/Titlebtn"
import { LuPhone } from "react-icons/lu"
import { FaRegAddressCard } from "react-icons/fa"
import ContactForm from "../blocks/contacts/ContactForm";
import { useAnimation, motion, easeIn } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Contact = () => {

   const controls = useAnimation(); // For framer motion
    const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true }); // Observe element
  
    useEffect(() => {
      if (inView) {
        controls.start({opacity: 1, x: 0});
      }
    }, [inView, controls]);
  

  return (
    <div id="contact" ref={ref} className="flex flex-col items-center bg-black text-white pb-28 px-10 relative">
       <div className="absolute w-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 -rotate-10 bg-purple-600 rounded-full opacity-30 blur-3xl"></div>

        <Titlebtn text={"Contact"} />
        <div className="flex gap-5 w-full pt-10 max-md:flex-col">
            <motion.div initial={{opacity:0, x:"-100px"}} animate={controls} transition={{duration:0.8, ease: "easeIn"}} className="text-gray-400 w-1/2 max-md:w-full">
            <h1 className="text-4xl text-white">Ask whatever you have in your mind</h1>
            <p className="my-3">We are here to help you with anything you need.</p>

            <div className="my-4">
            <p className="flex items-center my-2"><GoMail className="mr-3" /> saif@luxuria@gmail.com</p>
            <p className="flex items-center my-2"><LuPhone className="mr-3" /> +92 300 1234567</p>
            <p className="flex items-center my-2"><FaRegAddressCard className="mr-3" /> 123 Street, City, Country</p>

            </div>
            </motion.div>

            <motion.div initial={{opacity:0, x:"100px"}} animate={controls} transition={{duration:0.8, ease: "easeIn"}}  className="w-1/2 max-md:w-full">
              <ContactForm />
            </motion.div>

        </div>
    </div>
  )
}

export default Contact