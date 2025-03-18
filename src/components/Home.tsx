import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
     <div className='relative h-[100vh] w-full top-0 lg:relative'> 
        <div className='absolute h-full w-full'>  
            <video src='/video.mp4' autoPlay loop muted typeof='videp/mp4' className='h-full w-full object-cover'></video>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute h-full top-[20%] bottom-[50%] sm:px-8 sm:justify-center sm:text-center sm:w-full md:w-full"
          style={{ padding: '0 1.3rem' }}
        >
            <h1 className="font-monument font-semibold text-4xl text-[#4B4376] sm:text-7xl sm:font-bold md:text-10xl md:font-extrabold md:max-w-[100%] md:mx-auto">
                Unlock Your Travel Dreams with Us!
            </h1>
            <p
                className="text-[#4B4376] font-medium sm:py-4 sm:max-w-[100%] sm:mx-auto md:py-4 md:max-w-[70%] md:mx-auto"
                style={{ padding: '1rem 0' }}
            >
                Discover the world&apos;s most beautiful places with us
            </p>
        </motion.div>
        
        {/* Arunachal Section - Now visible on all screen sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="flex absolute w-full items-center justify-center px-4"
          style={{ bottom: '5%' }}
        >
          <motion.div
            className="content max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
          >
            <motion.h3
              className="text-[#4B4376] text-xl sm:text-2xl font-semibold mb-2 sm:mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
            >
              Experience the Magic of Arunachal Pradesh
            </motion.h3>
            
            <motion.p
              className="text-[#4B4376] text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed bg-white/50 p-3 sm:p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1.2 }}
            >
              Nestled in the Eastern Himalayas, Arunachal Pradesh is India's hidden gem of pristine landscapes, diverse cultures, and breathtaking adventures. Our expert local guides and customized itineraries ensure your journey through this magical frontier state becomes more than just a trip—it transforms into cherished memories that last a lifetime.
            </motion.p>
          </motion.div>
        </motion.div>
    </div>
    </>
  )
}

export default Hero