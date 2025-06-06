import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section className='relative'>
        <Image src='/blur_circle_bg.svg' width={1000} height={1000} alt='project' className='absolute  -top-52 left-0 z-10'/>
        <div className='bg-[#262626] flex items-center rounded-[20px] pb-[40px] relative '>

            <div className="lg:py-[71px] lg:px-[100px] border-r border-[#666666]">
                <Image src='/project_img.svg' width={2000} height={2000} alt='project' className=''/>
            </div>
            <div className=" flex flex-col justify-between">
                <div className="lg:pl-[43px] lg:mb-[100px]">
                    <h3 className='text-[52px] font-[600] leading-[100%] mb-[14px]'>Eagle AI - Website</h3>
                    <div className="flex items-center gap-[12px]">
                        <Image src='/calendar.svg' width={20} height={20} alt='calendar'/>
                        <p className='text-[#E6E6E6] leading-[100%]'>October 2024 - December 2024</p>
                    </div>
                </div>
                <p className='lg:pl-[43px] lg:pr-[100px] text-[18px] font-[400] text-[#C4C4C4] leading-[100%]'>We designed a clean, intuitive platform for Eagle AI — a smart finance tool that helps users make better money moves. From seamless dashboards to smooth data flows, we made sure every part of the experience felt effortless. The result? A product that looks sharp, works fast, and actually makes finance feel less like a headache.</p>
            </div>
        </div>
    </section>
  )
}

export default Projects