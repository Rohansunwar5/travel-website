import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

import image1 from '../../public/home/Popularplaces4.jpg';
import image2 from '../../public/home/Popularplaces3.jpg';
import image3 from '../../public/home/Popularplaces2.jpg';
import image4 from '../../public/home/Popularplaces1.jpg';

const Hero = () => {
  return (
    <>
     <div className='relative h-[100vh] w-full top-0 lg:relative'> 
        <div className='absolute h-full w-full'>  
            <video src='/video.mp4' autoPlay loop muted typeof='videp/mp4' className='h-full w-full object-cover'></video>
        </div>
        {/* <AnimatedTitle
          title="Unlock<b>Y</b>our travel Dreams with us <br /> <b>D</b>iscover the worlds <b>M</b>ost beautiful places with us"
          containerClass="mt-5 !text-black text-center"
        /> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute h-full top-[20%] bottom-[50%] sm:px-8 sm:justify-center sm:text-center sm:w-full md:w-full"
          style={{ padding: '0 1.3rem' }}
        >
            <h1 className="font-ubuntu font-black text-7xl text-[#4B4376] sm:font-bold sm:text-10xl md:font-extrabold md:max-w-[100%] md:mx-auto">
                Unlock Your Travel Dreams with Us!
            </h1>
            <p
                className="text-[#4B4376] font-medium sm:py-4 sm:max-w-[100%] sm:mx-auto md:py-4 md:max-w-[70%] md:mx-auto"
                style={{ padding: '1rem 0' }}
            >
                Discover the world&apos;s most beautiful places with us
            </p>
            {/* <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-[#4B4376] rounded-[6px]  relative group transition duration-200 text-[#E8BCB9] hover:bg-transparent">
                Get started
            </div>
            </button> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="hidden md:flex absolute w-full items-center justify-center"
          style={{ bottom: '5%' }}
        >
      {/* Popular Places */}
      <motion.div
        className="content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
        style={{ marginTop: '0px' }}
      >
       <motion.h3
        className="text-[#4B4376] py-2 relative after:content-[''] after:w-[83%] after:h-[2px] after:bg-[#4B4376] after:right-0 after:bottom-1/2 after:absolute"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
        >
        Popular Places
        </motion.h3>


        <motion.div
          className="items-center justify-center gap-8 flex"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { staggerChildren: 0.3, duration: 0.8 },
            },
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <Image
              className="h-full w-[210px] object-cover rounded-xl"
              src={image1}
              alt=""
            />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <Image
              className="h-full w-[210px] object-cover rounded-xl"
              src={image2}
              alt=""
            />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <Image
              className="h-full w-[210px] object-cover rounded-xl"
              src={image3}
              alt=""
            />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <Image
              className="h-full w-[210px] object-cover rounded-xl"
              src={image4}
              alt=""
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
    </>
  )
}

export default Hero