"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/router';
import {db } from '../app/config/firebase'
import { collection, addDoc } from "firebase/firestore";  

import {
  PiArrowUpRight,
  PiLinkedinLogoThin,
  PiBehanceLogoThin, 
  PiArrowDownThin,
  PiGithubLogoThin,
} from "react-icons/pi";
import { IoIosRocket } from "react-icons/io";

import { GrProjects } from "react-icons/gr";


import { IoIosMailUnread } from "react-icons/io";

import { RiTwitterXLine } from "react-icons/ri";

import { useTheme } from "next-themes";

import { Tooltip } from "@nextui-org/react";

import Link from "next/link";
import Image from "next/image";
// let Icons = [
//   { name: <PiTwitterLogoThin />, href: "https://twitter.com/Joenaldo" },
//   { name: <PiInstagramLogoThin />, href: "https://instagram.com/Joscriptt " },
//   { name: <PiGithubLogoLight />, href: "https://github.com/Joscriptt" },
// ];



function Homepage() {

  const downloadResume = () => {
    const url = "https://firebasestorage.googleapis.com/v0/b/for-testing-7ffc1.appspot.com/o/Akmal_Ashwin_CV%20(1).pdf?alt=media&token=8de36fca-4a94-4a02-a2a7-6175b4ae3ff7";
    const filename = "Akmal_Ashwin_CV.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  const ref = collection(db, "collab");

  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  const addMessage = async (e) => {
    if (!name) return;
    try {
      console.log(name);
      e.preventDefault();
     const submitted =  await addDoc(ref, {
        name: name,
      });

      if (submitted){
        setSuccess(true);
      }
      setName("");

    } catch (error) {
      console.error("Error adding document: ", error);
    }
   
  }

  function gotoLinkedIn() {
    window.open("https://www.linkedin.com/in/akmal-ashwin-0aa79b200/");
  
  }

  function toSindy() {
    window.open("https://sindy.ai");
  }
  const { theme } = useTheme();

  const myResume = () => {
    window.open("https://firebasestorage.googleapis.com/v0/b/for-testing-7ffc1.appspot.com/o/Akmal_Ashwin_CV%20(1).pdf?alt=media&token=8de36fca-4a94-4a02-a2a7-6175b4ae3ff7");
  }

  return (
    <div className=" w-full  px-4 pt-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
        <motion.div
         initial={{opacity: 0}}
         transition={{duration: 0.5, ease: "easeInOut"}}
         whileInView={{opacity: 1}} viewport={{once:true}}
          className="border cursor-pointer z-20 dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg sm:h-40"
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Location</p>
              <p className="text-neutral-500 text-xs ">Melbourne</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <motion.img
            whileHover={{ scale: 3 }}
            className="h-full w-full duration-300 transition-all ease-in-out object-cover"
            src="/Capture.PNG"
            alt=""
          />
        </motion.div>
        <motion.div  initial={{opacity: 0}}
         transition={{duration: 0.5, ease: "easeInOut"}}
         whileInView={{opacity: 1}} viewport={{once:true}} className="dark:bg-[#1E1E1E]  bg-white border dark:border-neutral-600 min-w-[100px]  border-neutral-400/60 shadow-xl relative rounded-lg h-44 sm:h-40  ">
          <div className=" absolute w-full p-2">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Mode</p>
              <div>
                <span>
                  <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
                    <span
                      className={`absolute flex  w-2 h-2 rounded-full  opacity-75 animation-delay-4000 animate-ping dark:bg-lime-500 bg-yellow-400`}
                    ></span>
                    <span
                      className={`relative inline-flex w-1 h-1 rounded-full dark:bg-lime-500 g-yellow-400`}
                    ></span>
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            <div className="">
              <p className="text-xs font-semibold mt-1 md:mt-4 w-full  ">
                Available for freelance  design projects. Hit me up 
                for a collab 🦾
              </p>

              <button onClick={gotoLinkedIn} className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60 mt-14  sm:mt-3 rounded-full p-1 px-2 dark:bg-neutral-700/40 sm:w-full">
                <span>Contact me</span>
                <PiArrowUpRight />
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          transition={{duration: 0.5, ease: "easeInOut", delay: 0.5}}
          whileInView={{opacity: 1}} viewport={{once:true}}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  z-20 cursor-pointer relative shadow-xl rounded-lg  col-span-2 "
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">About</p>
              <p className="text-neutral-500 text-xs ">Bio</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 px-3 pb-3">
            <p className="text-xs font-semibold   leading-5">
              I am Akmal Ashwin, an adventurous Software Engineer and creative Web Developer based in 
              Melbourne. With a keen eye for aesthetics, a
              passion for innovation, and a drive for designs that leaves a
              lasting impact. let's collaborate and bring your creative visions
              to life.
            </p>
          </div>
        </motion.div>
        <motion.div  initial={{opacity: 0}}
         transition={{duration: 1, ease: "easeInOut", delay: 1}}
         whileInView={{opacity: 1}} viewport={{once:true}}className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Experience & Education</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative ">
            {/* Starts */}
            <div className="flex gap-x-3 mt-16 px-2   ">
              <p className="dark:text-neutral-400 min-w-[100px]  text-xs w-20 shrink-0  ">
                2024 -- Present
              </p>
              <div>
                <h4 className="text-xs font-bold">Insane Ambition </h4>
                <p className="text-[11px] text-neutral-500">
                  Web Developer & Designer
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3 px-2 relative ">
              <p className="dark:text-neutral-400 min-w-[100px]  text-xs w-20 shrink-0  ">
                2024 -- Present
              </p>
              <div>
                <h4 className="text-xs font-bold">Sincidium</h4>
                <p className="text-[11px] text-neutral-500">
                  Software Engineer
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-neutral-400 min-w-[100px]   text-xs w-20 shrink-0  ">
                2019 -- 2022
              </p>
              <div>
                <h4 className="text-xs font-bold">RMIT University</h4>
                <p className="text-[11px] text-neutral-500">
                  Bachelor of information Technology (Software Engineering) 
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-neutral-400 min-w-[100px]  text-xs w-20 shrink-0  ">
                2022 -- 2023
              </p>
              <div>
                <h4 className="text-xs font-bold">Local Grown Salads</h4>
                <p className="text-[11px] text-neutral-500">Cloud Architect (Internship)</p>
              </div>
            </div>

          
            
          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </motion.div>
        <motion.div  initial={{opacity: 0}}
         transition={{duration: 0.5, ease: "easeInOut"}}
         whileInView={{opacity: 1}} viewport={{once:true}} className=" dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-2 relative ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Projects</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-8 px-2">
            <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
              <div className="flex justify-between items-center p-2  gap-x-2 mt-14">
                <Image
                  width={200}
                  height={200}
                  className="w-14 h-14 rounded-full object-cover"
                  src="/jo4.jpeg"
                  alt=""
                />

                <div>
                  <p className="text-xs"><a className="underline" href="https://sindy.ai" target="_blank" rel="noopener noreferrer">Sindy.ai</a></p>
                  <p className="text-xs  text-neutral-500">
                  Built using React, Firebase, and Framer Motion, this website showcases a range of cool, dynamic animations that bring each page to life.
                  </p>
                </div>

                <ul className="menu">
                  <a href="#0"></a>
                </ul>
              </div>
            </div>
            <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
              <div className="flex justify-between items-center p-2  gap-x-2 mt-4">
                <Image
                  width={300}
                  height={300}
                  className="w-14 h-14 rounded-full object-cover"
                  src="/jo4.jpeg"
                  alt=""
                />

                <div>
                <p className="text-xs"><a className="underline" href="https://fordeploy-production.up.railway.app/" target="_blank" rel="noopener noreferrer">E-commerce / Fitness site</a></p>

                  <p className="text-xs text-neutral-500">
                   MERN stack, React, Express, Node, MongoDB and Stripe was used to build this robust e-commerce platform and lists a range of workout exercises.
                  </p>
                </div>

                <ul className="menu">
                  <a href="#0"></a>
                </ul>
              </div>
            </div>
            <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
              <div className="flex justify-between items-center p-2  gap-x-2 mt-4">
                <Image
                  width={300}
                  height={300}
                  className="w-14 h-14 rounded-full object-cover"
                  src="/jo4.jpeg"
                  alt=""
                />

                <div>
                <p className="text-xs"><a className="underline" href="https://socialapp-8c7eb.web.app/login" target="_blank" rel="noopener noreferrer">Social Media / NebulaNest site</a></p>
                  <p className="text-xs text-neutral-500">
                  This social media platform was built using React and Firebase. It allows users to create posts, like and comment on other users' posts.
                  </p>
                </div>

                <ul className="menu">
                  <a href="#0"></a>
                </ul>
              </div>
            </div>
          </div>
          {/* <Products /> */}
        </motion.div>
        <motion.div  initial={{opacity: 0}}
         transition={{duration: 0.5, ease: "easeInOut"}}
         whileInView={{opacity: 1}} viewport={{once:true}} className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2  relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Animations/Creative projects (Framer Motion / GSAP)</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 mb-4">
            <div className="flex justify-center gap-x-2 px-2">
              <Tooltip showArrow={true} content="Zoom Parallax" color="#161616">
                <Link
                  href={"https://zoom-parallax-beta.vercel.app/"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiGithubLogoThin className="text-xl " />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="Parallax Scroll" color="#161616">
                <Link
                  href={"https://parallax-scroll-iota.vercel.app/"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiGithubLogoThin className="Floating Image (mouse activity)" />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="Floating images (mouse event)" color="#161616">
                <Link
                  href={"https://floating-gallery-mhj5.vercel.app/"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiGithubLogoThin className="text-xl" />
                </Link>
              </Tooltip>
              
            </div>
          </div>
        </motion.div>
        <motion.div  initial={{opacity: 0}}
         transition={{duration: 0.5, ease: "easeInOut"}}
         whileInView={{opacity: 1}} viewport={{once:true}} className=" dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg sm:min-h-[200px] md:min-h-[374px] col-span-2 row-span-3 md:row-span-2  ">
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Latest Work</p>
              <p className="text-neutral-500 text-xs "></p>
            </div>
            <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
    <div className="relative flex justify-center items-center h-[250px] md:h-full cursor-pointer " onClick={toSindy}>
          <Image
           
            className=" duration-300 hover:scale-110 transition-all ease-in-out object-cover"
            src={"/sindy_logo_Horizontal_light 1 (4).svg"}
            alt=""
            width={200}
            height={200}
          />
          </div>
        </motion.div>
        <motion.div  initial={{opacity: 0}}
         transition={{duration: 0.5, ease: "easeInOut"}}
         whileInView={{opacity: 1}} viewport={{once:true}} className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2  relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20 ">
            <p className="text-xs">Languages</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[180px] overflow-hidden scrollbar-hide scroll-smooth relative ">
            {/* Starts */}
            <div className="flex gap-x-3 mt-14 px-2  ">
              <p className="dark:text-white  text-xs w-20 shrink-0  ">
                Frontend
              </p>
              <div>
                
                <p className="text-[12px] text-neutral-100">Next.js, React, Framer Motion, GSAP, Tailwind, Responsive Design</p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3 px-2 relative ">
              <p className="text-white  text-xs w-20 shrink-0  ">Backend</p>
              <div>
              <p className="text-[12px] text-neutral-100">Node.js Firebase, MongoDB, Express.js, Stripe, API Integration</p>

              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-white  text-xs w-20 shrink-0  ">
                Others
              </p>
              <div>
                
                <p className="text-[12px] text-neutral-100">Github, Git, Figma</p>
              </div>
            </div>

            <div className="px-2 mb-8  sm:mb-8 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </motion.div>
        <div className=" rounded-lg  grid grid-cols-2 gap-2 col-span-2 row-span-2 z-40">
        <motion.div  initial={{opacity: 0}}
         transition={{duration: 0.5, ease: "easeInOut"}}
         whileInView={{opacity: 1}} viewport={{once:true}} className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg z-20 h-44 relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Get In Touch</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
      <AnimatePresence>
          {!success && <motion.div transition={{duration: 1, ease:"easeInOut"}} exit={{x: 100, opacity: 0}} className="c absolute mt-24 flex flex-col items-center justify-center w-full px-2 ">
            <input value={name} onChange={(e) => setName(e.target.value)} 
              className=" text-center rounded-full text-sm p-1 placeholder:text-neutral-700 outline-none border dark:border-neutral-600 border-neutral-400/60  bg-neutral-900 w-full"
              type="email"
              placeholder="name@email.com"
              name= "name"
            />
            <button onClick={addMessage} className="text-xs  w-full border dark:border-neutral-600 border-neutral-400/60  mt-2 rounded-full p-1 px-2 dark:bg-neutral-700/40">
              <span>Contact me</span>
            </button>
          </motion.div> }
          </AnimatePresence>
          
           {success && <motion.div  style={{
      backgroundImage: "linear-gradient(to bottom, #888, #fff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }} initial={{x:-200, opacity:0, y:0}} animate={{x:0, opacity:1}} transition={{duration: 1, ease:"easeInOut", }}  className=" absolute mt-24 flex flex-col items-center justify-center w-full px-2 ">
            You will be hearing from me soon! 🚀
            </motion.div>}
           
           
        </motion.div>
        <motion.div
         initial={{opacity: 0}}
         transition={{duration: 0.5, ease: "easeInOut"}}
         whileInView={{opacity: 1}}viewport={{once:true}}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2"
        >
          <div>
            <p className="text-[10px] mt-8">
              "Here is the link to my GitHub account"
            </p>

            <div className="flex items-center gap-x-2 mt-7">
              <Image
                height={400}
                width={400}
                className="w-8 h-8 rounded-full object-cover"
                src="/img_1690.png"
                alt=""
              />

              <div className="">
              
                <p className="text-xs text-neutral-500"><a className="underline" href=" https://github.com/lxuuryy" target="_blank" rel="noopener noreferrer">lxuuryy</a></p>                 

              </div>
            </div>
          </div>
        </motion.div>
        </div>
        <div className="  rounded-lg  grid grid-cols-2 gap-2 col-span-2 row-span-2 z-40">
          <motion.div
             initial={{opacity: 0}}
             transition={{duration: 0.5, ease: "easeInOut"}}
             whileInView={{opacity: 1}}
             viewport={{once:true}}
            className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg  h-44 p-2 relative "
          >
            <div className=" absolute w-full p-2 z-20">
              <p className="text-xs">Years of Experience</p>
              <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <div className="mt-10  w-full flex justify-center items-center">
              <h1 className="text-8xl">3</h1>
            </div>
          </motion.div>
          <motion.div initial={{opacity: 0}}
             transition={{duration: 0.5, ease: "easeInOut"}}
             whileInView={{opacity: 1}} viewport={{once:true}} className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2 relative z-40">
            <div>
              <div className=" absolute w-full p-2 z-20">
                <p className="text-xs">CV</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
              </div>
            </div>
            <div className="mt-24 w-full">
              <button onClick={myResume} className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40">
                <span>View</span>
                <PiArrowUpRight />
              </button>
              <button onClick={downloadResume} className="text-xs flex w-full mt-3 items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40">
                
                <span>Download</span>
                <PiArrowDownThin />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  ); 
}

export default Homepage;
