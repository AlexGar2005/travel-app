"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image'
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";


const Navbar = () => {
    const fadeInAnimationsVariants = {
        initial: {
          opacity: 0,
        },
        animate: {
          transition: {
            duration: 2,
          },
          opacity: 1,
        }
      }

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <motion.nav 
        className="flexBetween max-container padding-container relative z-30 py-5"
        variants={fadeInAnimationsVariants}
        initial = 'initial'
        whileInView='animate'
        viewport={{
          once: true,
        }}
    >
        <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key = {link.key} className="regular-116 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all duration-300 hover:font-bold">
                        {link.label}
                    </Link>
                ))}
        </ul>
        <div className="lg:flexCenter hidden">
            <Button 
                type = 'button'
                title = 'Log in'
                icon = '/user.svg'
                variant = 'btn_dark_green'
            />
        </div>
        <Image 
            src='menu.svg'
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
            onClick={handleNav}
        />
        <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#ffffff]  ease-out duration-500" : 'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">HI<span className="text-black">LINK</span></h1>
            <ul className="p-4 ">
                <li className="p-4 border-b border-gray-600">HOME</li>
                <li className="p-4 border-b border-gray-600">HOW HILINK WORK?</li>
                <li className="p-4 border-b border-gray-600">SERVICES</li>
                <li className="p-4 border-b border-gray-600">PRICING</li>
                <li className="p-4 border-b border-gray-600">CONTACT</li>
            </ul>
        </div>
    </motion.nav>
  )
}

export default Navbar