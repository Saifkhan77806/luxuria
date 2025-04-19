'use client'

import { useEffect } from "react"
import { motion, useScroll, useAnimation } from "framer-motion"
import { Arrbtn } from "@/components/blocks/buttons/Arrbtn"
import { Navlink } from "@/components/blocks/links/Navlink"
import {ResNavbar} from "./blocks/responsive/ResNavbar"
import Image from "next/image"
import Logo from "@/newLogo.png"

const Navbar = () => {
  const controls = useAnimation()
  const navGap = useAnimation()
  const smNav = useAnimation()
  const lgNav = useAnimation()
  const logoNav = useAnimation()
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (value) => {
      if (value > 400) {
        controls.start({ width: "70%" })
        navGap.start({ gap: "0.5rem" })
        smNav.start({ display: "block" })
        lgNav.start({ display: "none" })
        logoNav.start({display: "none"})
      } else {
        controls.start({ width: "90%" })
        navGap.start({ gap: "2rem" })
        smNav.start({ display: "none" })
        lgNav.start({ display: "block" }) 
        logoNav.start({display: "block"}) 
      }
    })

    return () => unsubscribe()
  }, [controls, scrollY])

  return (
    <>
    <div className="hidden max-md:block">
    <ResNavbar />
    </div>
    <motion.div
      animate={controls}
      initial={{ width: "90%" }}
      transition={{ duration: 0.5 }}
      className="fixed h-4 pt-7 pb-7 mt-5 rounded-md border max-md:hidden border-gray-500 opacity-[0.9] bg-gray-900 self-center flex items-center justify-between z-20 left-1/2 -translate-x-1/2 max-sm:hidden"
    >
      {/* logo */}
      <div
      className="logo ml-3 tracking-[6px]  center text-gray-100">
        <Image src={Logo} alt="logo" width={50} height={50} className="" />
       <motion.div animate={logoNav} initial={{display: "block"}} 
      transition={{ duration: 0.5 }}>LUXUR<span className="italic font-bold text-purple-600">i</span>A </motion.div>
      </div>
      


      {/* links */}
      <motion.div
      animate={navGap}
      initial={{ gap: "2rem" }}
      transition={{ duration: 0.5 }}
      className="navlink flex gap-8 text-sm">
        <Navlink text={"process"} id="process" />
        <Navlink text={"Services"} id="service" />
        <Navlink text={"Benefits"} id="benefits" />
        <Navlink text={"Plans"} id="plan" />
        <Navlink text={"Contact"} id="contact"  />
      </motion.div>

      {/* touch */}
      <Arrbtn />
    </motion.div>
    </>
  )
}

export default Navbar
