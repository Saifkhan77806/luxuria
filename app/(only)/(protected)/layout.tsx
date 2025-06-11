'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { Navlink } from '@/components/blocks/links/Navlink'
import { motion } from 'framer-motion'
import { PiStarFourThin } from 'react-icons/pi'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ResNavbar } from '@/components/blocks/responsive/ResNavbar'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen relative  bg-black gap-2 text-white">

{/* gradient */}
<div className='w-[70%] h-[24] fixed top-10 left-12 bg-purple-600 opacity-30 blur-xl rounded-full '></div>
<div className='w-24 h-24 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 opacity-30 blur-2xl rounded-full '></div>
<div className='w-[70%] h-[24] fixed bottom-10 right-5 bg-purple-600 opacity-30 blur-xl rounded-full '></div>


      {/* Sidebar - Fixed, 16% width */}
      <div className="max-[800px]:hidden fixed flex flex-col p-1 rounded-md top-1.5 left-1.5 bottom-2 h-screen w-[20%] bg-gray-800 text-white z-10">
        {/* Logo */}  
        <div className='absolute left-1/2 top-3 -translate-x-1/2'>
          <div
            className="logo tracking-[6px]  center text-gray-100 center">
            <div>LUXUR<span className="italic font-bold text-purple-600">i</span>A </div>
          </div>
        </div>

        {/* Navlink */}
        <div className='mt-16 flex flex-col gap-2 p-1 mb-3'>
        <Navlink text={"Dashboard"} id={"/dashboard"} isSideBar={false} />
        <Navlink text={"Text to img"} id={"/text-to-img"} isSideBar={false} />
        <Navlink text={"Img to img"} id={"/img-to-img"} isSideBar={false} />
        <Navlink text={"History"} id={"/history"} isSideBar={false} />
        <Navlink text={"Purchase history"} id={"/purc-history"} isSideBar={false} />
        <Navlink text={"Settings"} id={"/settings"} isSideBar={false} />
        </div>

        {/*  Section - Top Up */}
        <div className='text-white  p-2   bg-purple-600 text-center rounded-md'>
          <p className='flex my-1 items-center justify-center text-xl font-bold bg-gradient-to-r from-purple-800 via-white to-yellow-600 bg-clip-text text-transparent'>
          Top up 
          <motion.span initial={{scale: 0.7}} animate={{scale: 1}} transition={{duration: 2, repeat: Infinity, repeatType: "reverse"}} className='ml-2'>
          <PiStarFourThin className='text-white text-xs font-bold' />
          </motion.span>
          </p>
          {/* top up description */}
          <p className='-tracking-tight text-sm my-1'>
            <span className='text-xs'>Top up your account to unlock premium features</span>
          </p>
          <p className='text-sm my-1'>
            <span className='font-bold mr-1'>
            Credits :
            </span>
              6
          </p>
          <Link href={"/topup"}>
          <Button className='my-1 cursor-pointer bg-gradient-to-r from-purple-800 via-white to-yellow-600 text-black duration-75  transition-all hover:scale-[105%] hover:font-semibold'>
            Top up Now
          </Button>
          </Link>
        </div>

        <div className='absolute w-full p-2 flex flex-col bottom-3 -ml-1'>
          <Link href={"/profile"}>
          
          <Button className='w-full my-3  bg-purple-600 hover:bg-purple-700'>
            Profile
          </Button>
          </Link>
          <Link href={"/logout"}>
          
          <Button className='w-full bg-purple-600 hover:bg-purple-700'>
            Logout
          </Button>
          </Link>
        </div>
        

      </div>

      {/* Main Content - 84% width with left margin to offset fixed sidebar */}
      <div className="max-[800px]:ml-0 ml-[20%] max-[800px]:w-full w-[80%] pr-8 pb-10">

<div className='hidden max-[800]:block'>
        <ResNavbar
         linksName={[
          {text: "Dashboard", href: "/dashboard"},
          {text: "Text to images", href: "text-to-img"},
          {text: "Image to Images", href: "img-to-img"},
          {text: "History", href: "/history"},
          {text: "Purchase history", href: "/purc-history"},
          {text: "Settings", href: "/settings"}   
        ]}

        topUp={
          <div className='text-white  p-2   bg-purple-600 text-center rounded-md'>
          <p className='flex my-1 items-center justify-center text-xl font-bold bg-gradient-to-r from-purple-800 via-white to-yellow-600 bg-clip-text text-transparent'>
          Top up 
          <motion.span initial={{scale: 0.7}} animate={{scale: 1}} transition={{duration: 2, repeat: Infinity, repeatType: "reverse"}} className='ml-2'>
          <PiStarFourThin className='text-white text-xs font-bold' />
          </motion.span>
          </p>
          {/* top up description */}
          <p className='-tracking-tight text-sm my-1'>
            <span className='text-xs'>Top up your account to unlock premium features</span>
          </p>
          <p className='text-sm my-1'>
            <span className='font-bold mr-1'>
            Credits :
            </span>
              6
          </p>
          <Link href={"/topup"}>
          <Button className='my-1 cursor-pointer bg-gradient-to-r from-purple-800 via-white to-yellow-600 text-black duration-75  transition-all hover:scale-[105%] hover:font-semibold'>
            Top up Now
          </Button>
          </Link>
        </div>
        }
        button={
          <div className='w-full p-2 flex justify-between bottom-3 -ml-1'>
          <Link href={"/profile"}>
          
          <Button className='w-full my-3  bg-purple-600 hover:bg-purple-700'>
            Profile
          </Button>
          </Link>
          <Link href={"/logout"}>
          <Button className='w-full bg-purple-600 hover:bg-purple-700'>
            Logout
          </Button>
          </Link>
          </div>
        }
        />

</div>
        {/* Avatar and secondary navbar */}
        <div className='fixed max-[800]:hidden flex top-0 right-0 h-16 '>
          <div className='absolute top-1/2 right-0 -translate-y-1/2'>
            <Avatar className='mr-5'>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className='mt-16'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout