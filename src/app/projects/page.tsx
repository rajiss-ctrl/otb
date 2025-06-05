import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Image from 'next/image'

const page = () => {
  return (
    <section className='text-white px-4 lg:px-[100px]'>        
    <Image src='/blur_circle_bg.svg' width={2000} height={2000} alt='project' className='absolute  -top-[10rem] -left-72 z-10'/>
      <div className="mt-[33px]">
        <Navbar/> 
      </div>
      <div className="relative lg:h-[341px] py-[20px] lg:py-[120px] px-[60px] lg:px-[300px] mt-[51px] mb-[100px]">
        {/* Background image with color blend */}
        <div 
          className="absolute inset-0 bg-[url('/otb_over_the_board_bg.svg')] bg-cover bg-center"
          style={{
            backgroundColor: '#070707',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className='text-[24px] lg:text-[70px] font-[700] leading-[100%] mb-[14px]'>Our Projects</h1>
          <p className='text-[10px] lg:text-[18px] text-center text-[#E6E6E6] font-[400] leading-[100%] lg:px-10'>
            Here&apos;s a peek at the stuff we&apos;ve built — bold, clean, and made with purpose. 
            Every project here shows what happens when strategy meets good design.
          </p>
        </div>
      </div>

      {/* projects */}
      <div className="mb-[40px]">
        <Projects/>
      </div>
      <div className="mb-[40px]">
        <Projects/>
      </div>
      <div className="mb-[40px]">
        <Projects/>
      </div>
      <div className="mb-[40px]">
        <Projects/>
      </div>
      <div className="mb-[40px]">
        <Projects/>
      </div>
    </section>
  )
}

export default page