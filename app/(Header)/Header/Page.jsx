"use client";

import React from "react";

import { AnimatePresence, motion, useCycle } from "framer-motion";

import { useState } from "react";

import { useTheme } from "next-themes";
import { PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";

function HeaderPage() {
  const [open, cycleOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverTheme, setHovertheme] = useState(null);
  const { theme, systemTheme, setTheme } = useTheme();

  const links = [
    { name: "/jo1.jpeg", theme: "dark" },
    { name: "/jo2.jpeg", theme: "light" },
    { name: "/jo3.jpeg", theme: "system" },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const ButtonVariant = {
    closed: {
      height: "1.6rem",
      transition: { duration: 0.4 },
    },

    open: {
      height: "3.7rem",
      transition: { when: "beforeChildren", duration: 0.4 },
    },
  };

  let textvariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    cycleOpen(!open);
  };

  React.useEffect(() => {
    setTheme("dark");
  }, []);


  const toLinkedIn = () => {
    window.open("https://www.linkedin.com/in/akmal-ashwin-1b6b0b1b5/");
  }
  
  return (
    <div className="">
      {/* <i className="fi fi-rr-cart-arrow-down"></i> */}

     

      <nav className="flex justify-between items-center w-full  px-4 pt-10 max-w-6xl mx-auto">
        <div className="flex gap-x-3 items-center">
          <Image
            width={200}
            height={200}
            className="w-10 h-10 rounded-full object-cover"
            src="/IMG_1710.jpg"
            alt=""
          />

          <div>
            <h4 className="text-xs ">Akmal Ashwin</h4>
            <p className="text-[#828282] text-xs">Software Developer</p>
          </div>
        </div>

        <div>
          <button onClick={toLinkedIn} className="flex w-40 items-center justify-between border border-neutral-600 rounded-full p-1 px-5">
            <span className="text-xs">Connect with me</span>
            <PiArrowRightThin />
          </button>
        </div>
      </nav>

      <div className="mx-auto w-full max-w-[1120px] mt-4 flex justify-center relative">
        <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
      </div>
    </div>
  );
}

export default HeaderPage;
