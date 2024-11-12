import React from 'react'
// import Video from '@/assests/video.mp4'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
     <div className='relative h-[100vh] w-full top-0'>  {/*Home*/}
        <div className='absolute h-full w-full'>   {/*video Bg*/}
            <video src='/video.mp4' autoPlay loop muted typeof='videp/mp4' className='h-full w-full object-cover'></video>
        </div>

        <div className='absolute h-full top-[30%] bottom-[50%] sm:px-8 sm:justify-center sm:text-center sm:w-full md:w-full' style={{ padding: '0 1.3rem' }}>  {/*sectionText*/}
            <h1 className='font-black text-7xl text-[#4B4376] sm:font-bold sm:text-10xl  md:font-extrabold md:max-w-[70%] md:mx-auto'> Unlock Your Travel Dreams with Us !</h1>
            <p className='font-medium  sm:py-4 sm:max-w-[100%] sm:mx-auto md:py-4 md:max-w-[70%] md:mx-auto' style={{padding :"1rem 0" }}>
                Discover the worlds most beautiful places with us
            </p>
            <button className='gap-2 px-8 border flex sm:auto  md:mx-auto'>
                Get started
            </button>
        </div>
        <div className='popularPlaces'>
            <div className='content'>
                <h3>Popular Places</h3>
                <div className='images flex'>
                    {/* <Image src={}/>
                    <Image src={}/>
                    <Image src={}/>
                    <Image src={}/> */}
                </div>
            </div>    
        </div>

     </div>
    </>
  )
}

export default Hero