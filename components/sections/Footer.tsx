import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { BsThreads, BsTwitter } from "react-icons/bs";
import Link from "next/link";

export const Footer = () => {
    return (
        <>
            <div className='border-t border-b border-gray-500 py-5 px-5 relative flex justify-between bg-black text-white overflow-hidden max-sm:flex-col'>

                {/* gradient */}
                <div className="absolute w-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 -rotate-10 bg-purple-600 rounded-full opacity-30 blur-3xl"></div>

                <div>
                    <div className="logo tracking-[6px] text-gray-100">
                        LUXUR<span className="italic font-bold text-purple-600">i</span>A
                    </div>
                    <p className='text-gray-400 my-2'>We are here to help you with anything you need</p>

                    <div className="flex gap-3 my-7">
                        <div className="p-1.5 rounded-md bg-gray-600">
                            <IoLogoInstagram />
                        </div>
                        <div className="p-1.5 rounded-md bg-gray-600">
                            <CiLinkedin />
                        </div>
                        <div className="p-1.5 rounded-md bg-gray-600">
                            <BsTwitter />
                        </div>
                        <div className="p-1.5 rounded-md bg-gray-600">
                            <BsThreads />
                        </div>

                    </div>
                </div>

                <div className="flex gap-10 text-gray-400">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-xl text-white">Section</h1>
                        <Link href={"#process"} className="hover:text-white text-sm cursor-pointer font-bold">Process</Link>
                        <Link href={"#process"} className="hover:text-white text-sm cursor-pointer font-bold">Services</Link>
                        <Link href={"#process"} className="hover:text-white text-sm cursor-pointer font-bold">Benefits</Link>
                        <Link href={"#process"} className="hover:text-white text-sm cursor-pointer font-bold">Plans</Link>
                        <Link href={"#process"} className="hover:text-white text-sm cursor-pointer font-bold">Testimonails</Link>
                        <Link href={"#process"} className="hover:text-white text-sm cursor-pointer font-bold">Contact</Link>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="font-bold text-xl text-white">Pages</h1>
                        <Link href={"#process"} className="hover:text-white text-sm cursor-pointer font-bold">Home</Link>
                        <Link  href={"#process"} className="hover:text-white text-sm cursor-pointer font-bold">Coming soon</Link>
                        <Link href={"#process"} className="hover:text-white text-sm cursor-pointer font-bold">404</Link>

                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center bg-black text-gray-400 py-5 px-5">
                <div className="text-sm">© 2023 Luxuria. All rights reserved.</div>
                <div className="flex gap-5">
                    <p className="hover:text-white text-sm cursor-pointer font-bold">Privacy Policy</p>
                    <p className="hover:text-white text-sm cursor-pointer font-bold">Terms of Service</p>
                    <p className="hover:text-white text-sm cursor-pointer font-bold">Cookie Policy</p>  
                </div>

            </div>
        </>
    )
}
