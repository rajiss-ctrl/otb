import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <header className='bg-[url("/pattern.svg")] relative z-40 overflow-hidden bg-cover bg-center bg-no-repeat bg-[rgba(0,0,0,1)] h-[690px] px-[100px] py-[33px]'>
        <Image src='/background_net.svg' fill alt='background' className='absolute z-0 inzet-10 object-contain'/>
        <Image src='/globe.svg' width={600} height={600} alt='background' className='spin-globe absolute top-[120px] -right-80 z-10 '/>
        <Navbar/>
        <div className="relative text-[rgba(255,255,255,1)] z-50 mt-[110px] lg:w-[900px]">
          <div className="light_blue_floating absolute w-[100px] h-[30px] bg-[rgba(71,111,255,1)] rotate-[17.14deg] -left-3 -top-6 text-[10px] pt-[6px] text-center pl-2 rounded-[20px]">Web Development</div>
          <div className="blue_floating absolute w-[100px] h-[30px] bg-[rgba(2,7,247,1)] rotate-[-17.14deg] -left-3 -bottom-16 text-[10px] pt-[6px] text-center pl-2 rounded-[20px]">UI/UX Design</div>
          <div className="green_floating absolute w-[100px] h-[30px] bg-[rgba(4,147,21,1)] rotate-[-17.14deg] right-[24rem] -top-8 text-[10px] pt-[6px] text-center pl-2 rounded-[20px]">Video Editing</div>
          <div className="pink_floating absolute w-[100px] h-[30px] bg-[rgba(255,20,203,1)] right-28 bottom-[54.6667%] text-[10px] pt-[6px] text-center pl-2 rounded-[20px]">Graphic Design</div>
          <div className="orange_floating absolute w-[130px] h-[30px] bg-[rgba(244,79,1,1)] rotate-[-17.14deg] -right-24 bottom-[25%] text-[10px] pt-[6px] text-center pl-2 rounded-[20px]">Software Development</div>
          
          <h1 className='text-[120px] leading-[100%] font-bold'>IT Services <br/> That Elevates</h1>
          <p className='text-[18px] mt-[10px] leading-[100%] text-[rgba(255,255,255,0.6)] lg:pr-44'>At OTB, we offer a unique and meticulous approach to web and app development, graphic design, custom solutions, software development and video editing</p>
        </div>
        <Image src='/hero_blur_right.svg' width={800} height={800} alt='background' className='absolute z-10 -bottom-1 right-0'/>
        <Image src='/hero_blur_left.svg' width={800} height={800} alt='background' className='absolute z-10 top-0 left-0'/>
        <Image src='/abstract _design.svg' width={800} height={800} alt='background' className='absolute z-20 top-1/2 right-1/2 translate-x-1/2 translate-y-1/2'/>
    </header>
  )
}

export default Hero