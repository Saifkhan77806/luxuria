import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

interface linkContent{
  text: string;
  href: string;
}

interface ResNavbarProps {
  linksName: linkContent[];
  topUp?: React.ReactNode;
  button?: React.ReactNode;
}

export const ResNavbar = ({linksName, topUp, button}: ResNavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md p-4 z-50 lg:hidden">
          <div className="flex justify-between items-center">
          <div
      className="logo ml-3 tracking-[6px] text-gray-100">
        LUXUR<span className="italic font-bold text-purple-600">i</span>A
      </div>
    
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" focus:outline-none text-white cursor-pointer"
            >
              {isOpen ? <IoCloseOutline  size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
    
          {/* Mobile menu dropdown */}
          {isOpen && (
            <div className="mt-4 space-y-2">
              {
                linksName.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-white hover:bg-gray-100 hover:text-black rounded p-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                ))
              }
              {topUp}
              {button}
            </div>
          )}
        </nav>
      );
    }