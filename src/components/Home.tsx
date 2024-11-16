import React from 'react'
// import Video from '@/assests/video.mp4'
import Image from 'next/image'

import image1 from '../../public/home/Popularplaces4.jpg';
import image2 from '../../public/home/Popularplaces3.jpg';
import image3 from '../../public/home/Popularplaces2.jpg';
import image4 from '../../public/home/Popularplaces1.jpg';

const Hero = () => {
  return (
    <>
     <div className='relative h-[100vh] w-full top-0 lg:relative'>  {/*Home*/}
        <div className='absolute h-full w-full'>   {/*video Bg*/}
            <video src='/video.mp4' autoPlay loop muted typeof='videp/mp4' className='h-full w-full object-cover'></video>
        </div>

        <div className='absolute h-full top-[20%]  bottom-[50%] sm:px-8 sm:justify-center sm:text-center sm:w-full md:w-full' style={{ padding: '0 1.3rem'}}>  {/*sectionText*/}
            <h1 className='font-black  text-[#4B4376] sm:font-bold sm:text-10xl  md:font-extrabold md:max-w-[100%] md:mx-auto' style={{ fontSize: "3.5rem" }}> Unlock Your Travel Dreams with Us !</h1>
            <p className='font-medium  sm:py-4 sm:max-w-[100%] sm:mx-auto md:py-4 md:max-w-[70%] md:mx-auto' style={{padding :"1rem 0" }}>
                Discover the worlds most beautiful places with us
            </p>
            <button className='gap-2 px-8 border flex sm:auto  md:mx-auto'>
                Get started
            </button>
        </div>
        <div className="hidden  md:flex absolute w-full items-center justify-center" style={{ bottom: "10%"  }}>
        {/* Popular Places */}
        <div className="content " style={{marginTop: "0px" }}>
        <h3 className="text-white py-2 relative after:content-[''] after:w-[83%] after:h-[2px] after:bg-gray-300 after:right-0 after:bottom-1/2 after:absolute">
            Popular Places
        </h3>
        <div className="items-center justify-center gap-8 flex"> {/* Images */}
            <Image
            className="h-full w-[210px] object-cover rounded-xl"
            src={image1}
            alt=""
            />
            <Image
            className="h-full w-[210px] object-cover rounded-xl"
            src={image2}
            alt=""
            />
            <Image
            className="h-full w-[210px] object-cover rounded-xl"
            src={image3}
            alt=""
            />
            <Image
            className="h-full w-[210px] object-cover rounded-xl"
            src={image4}
            alt=""
            />
        </div>
        </div>
</div>


     </div>
    </>
  )
}

export default Hero