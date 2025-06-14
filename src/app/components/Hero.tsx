import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <header className='relative z-0 overflow-hidden bg-black h-[533px] lg:h-[740px] px-4 py-6 lg:px-[80px] xl:px-[100px] lg:py-[33px]'>
        <Image src='/pattern 2.svg' fill alt='background' className='absolute z-50 inzet-0 object-cover'/>

        <video 
          src='/globe_video.mp4' 
          width={780} 
          height={780} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className='absolute top-[120px] -right-[24rem] z-0 hidden lg:block'
        />
        <video 
          src='/globe_video.mp4' 
          width={600} 
          height={600} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className='absolute top-[120px] -right-60 z-0 lg:hidden'
        />
        
        <div className="relative mt-2 lg:mt-0 z-50">
          <Navbar/>
        </div>
        <div className="relative text-[rgba(255,255,255,1)] z-50 mt-[120px] lg:mt-[14%] lg:w-[900px]">
          <div className="light_blue_floating absolute w-[80px] lg:w-[120px] h-[20px] lg:h-[30px] bg-[rgba(71,111,255,1)] rotate-[10.14deg] -left-3 -top-8 text-[7px] lg:text-[12px] pt-1 lg:pt-[6px] text-center pl-1 rounded-[20px]">Web Development</div>
          <div className="blue_floating absolute w-[68px] lg:w-[100px] h-[20px] lg:h-[30px] bg-[rgba(2,7,247,1)] rotate-[-17.14deg] -left-3 -bottom-16 text-[7px] lg:text-[12px] pt-1 lg:pt-[6px] text-center pl-2 rounded-[20px]">UI/UX Design</div>
          <div className="green_floating absolute w-[70px] lg:w-[100px] h-[20px] lg:h-[30px] bg-[rgba(4,147,21,1)] rotate-[-17.14deg] right-4 lg:right-[28rem] -top-8 text-[7px] lg:text-[12px] pt-1 lg:pt-[6px] text-center pl-2 rounded-[20px]">Video Editing</div>
          <div className="pink_floating absolute w-[80px] lg:w-[110px] h-[20px] lg:h-[30px] bg-[rgba(255,20,203,1)] right-6 lg:right-52 -bottom-[20%] lg:bottom-[54.6667%] text-[7px] lg:text-[12px] pt-1 lg:pt-[6px] text-center pl-2 rounded-[20px]">Graphic Design</div>
          <div className="orange_floating absolute w-[100px] lg:w-[150px] h-[20px] lg:h-[30px] bg-[rgba(244,79,1,1)] rotate-[-17.14deg] right-6 lg:-right-6 xl:-right-28 bottom-[55%] lg:bottom-[25%] text-[7px] lg:text-[12px] pt-1 lg:pt-[6px] text-center pl-2 rounded-[20px]">Software Development</div>
          
          <h1 className='font-bricolage text-[40px] lg:text-[110px] leading-[100%] font-bold'>IT Services <br className='hidden lg:block'/> That <br className='lg:hidden'/> Elevates</h1>
          <p className='font-inter lg:text-[22px] mt-[10px] leading-[110%] text-[rgba(255,255,255,0.6)] font-[400] '>At OTB, we offer a unique and meticulous approach to web and app development, graphic design, custom solutions, software development and video editing</p>
        </div>
        <Image src='/hero_blur_right.svg' width={800} height={800} alt='background' className='absolute z-0 -bottom-1 right-0'/>
        <Image src='/hero_blur_left.svg' width={800} height={800} alt='background' className='absolute z-0 top-0 left-0'/>
        <Image src='/abstract _design.svg' width={3000} height={3000} alt='background' className='absolute z-0 bottom-[9.5rem] right-1/2 translate-x-1/2 translate-y-1/2 hidden lg:block'/>
        <Image src='/abstract_design_mobile.svg' width={800} height={800} alt='background' className='absolute z-0 bottom-24 right-1/2 translate-x-1/2 translate-y-1/2 lg:hidden'/>
    </header>
  )
}

export default Hero