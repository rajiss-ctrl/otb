'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Image from 'next/image'
import DesktopMenu from '../components/DesktopMenu'
import ValueProposition from '../components/ValueProposition'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'


const page = () => {
  
  
  return (
    <div className="relative">
      <DesktopMenu />
    <section className='text-white '>        
    <Image src='/blur_circle_bg.svg' width={2000} height={2000} alt='project' className='absolute  -top-[10rem] -left-72 z-0'/>
      <div className={`px-4 lg:px-[100px] mt-6 lg:mt-[50px] relative  z-30`}>
        <Navbar/> 
      </div>
      <div className="px-4 lg:px-[100px]">
        <div className="relative lg:h-[341px]  py-[20px] lg:py-[120px] px-[60px] lg:px-[300px] mt-[51px] mb-[100px] ">
          {/* Background image with color blend */}
          <div 
            className="absolute z-10 inset-0 bg-[url('/otb_over_the_board_bg.svg')] bg-cover bg-center"
            style={{
              backgroundColor: '#070707',
              backgroundBlendMode: 'overlay'
            }}
          ></div>
          
          {/* Content */}
          <div className="relative flex flex-col items-center justify-center h-full z-30">
            <h1 className='text-[24px] lg:text-[70px] font-[700] leading-[100%] mb-[14px]'>Our Projects</h1>
            <p className='text-[10px] lg:text-[18px] text-center text-[#E6E6E6] font-[400] leading-[100%] lg:px-10'>
              Here&apos;s a peek at the stuff we&apos;ve built — bold, clean, and made with purpose. 
              Every project here shows what happens when strategy meets good design.
            </p>
          </div>
        </div>

        {/* projects */}
        <div className="mb-[20px] lg:mb-[40px]">
          <Projects/>
        </div>
        <div className="mb-[20px] lg:mb-[40px]">
          <Projects/>
        </div>
        <div className="mb-[20px] lg:mb-[40px]">
          <Projects/>
        </div>
        <div className="mb-[20px] lg:mb-[40px]">
          <Projects/>
        </div>
        <div className="">
          <Projects/>
        </div>
      </div>
      <div className=" bg-[#060606]">
        <ValueProposition/>
      </div>
      <div className="">
        <ContactUs/>
      </div>
      <div className="">
        <Footer/>
      </div>
    </section>
    </div>
  )
}

export default page