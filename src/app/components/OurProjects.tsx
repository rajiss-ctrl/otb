import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurProjects = () => {
  return (
    <article className='relative z-50 flex justify-center items-center flex-col py-[84px] bg-[#000000]'>
        <div className='relative z-[60] bg-black font-inter border  border-[rgba(3,16,247,1)] p-4 text-[rgba(255,255,255,1)] lg:text-[26px] font-medium leading-[100%] rounded-[30px] mb-[60px]'>
            Our Projects
        </div>
        <div className="flex flex-col justify-start px-[25%] lg:px-[35%]">
            <h2 className='font-bricolage text-white text-[24px] lg:text-[50px] leading-[100%] font-bold'>This Ain&#39;t Just <br/> Portfolio Sh*t</h2>
            <p className='font-inter lg:text-[22px] leading-[100%] font-[400] text-[rgba(255,255,255,0.66)]  mt-4'>We Built Some Wild Projects — real work, real late nights, real results. Scroll through and see some of what we&#39;re on.</p>    
        </div>
       <Image 
            src='/cube.svg' 
            width={80} 
            height={80} 
            alt="" 
            className='z-0 lg:hidden absolute top-60 left-0 animate-[spin_8s_linear_infinite] hover:animate-[spin_2s_linear_infinite]'
            />
            <Image 
            src='/cube.svg' 
            width={200} 
            height={200} 
            alt="" 
            className='z-0 hidden lg:block absolute top-52 left-[60px] animate-[spin_8s_linear_infinite] hover:animate-[spin_2s_linear_infinite]'
            />
      <Image 
            src='/tiles.svg' 
            width={80} 
            height={80} 
            alt="" 
            className='z-0 lg:hidden absolute top-60 right-0 opacity-0 animate-[fadeInOut_6s_ease-in-out_infinite]'
            />
            <Image 
            src='/tiles.svg' 
            width={200} 
            height={200} 
            alt="" 
            className='z-0 hidden lg:block absolute top-32 right-[60px] opacity-0 animate-[fadeInOut_6s_ease-in-out_infinite]'
            />
        <div className="mt-[69px] w-full text-white px-4 lg:px-[80px] xl:px-[100px]">
            <div className="w-full border-t border-b border-[rgba(38,38,38,1)]">
                <div className="flex flex-col lg:flex-row justify-between">
                    <p className='hidden lg:block font-bricolage border-b lg:border-r border-[rgba(38,38,38,1)] lg:w-1/2 px-4 lg:px-[50px] py-[30px] text-[rgba(152,152,154,1)] text-start lg:text-[28px] font-[600] leading-[100%]'>A Finance Website</p>
                    <p className='font-bricolage border-b border-[rgba(38,38,38,1)] lg:w-1/2 px-4 lg:px-[50px] py-[30px] text-[rgba(152,152,154,1)] text-start lg:text-[28px] font-[600] leading-[100%]'>A Finance Website</p>
                </div>
                <div className="flex items-center flex-col lg:flex-row">
                    <div className="lg:border-r border-[rgba(38,38,38,1)] ">
                        <div className='px-4 lg:px-[50px]'>
                            <div className="mt-4">
                                <Image src='/project_img.svg' width={1000} height={1000} alt="" className='hidden lg:block'/>
                                <Image src='/project_img.svg' width={800} height={800} alt="" className='lg:hidden'/>
                            </div>
                            <div className="flex justify-between items-center my-[30px]">
                                <h3 className='font-bricolage text-[24px] leading-[100%] font-[700]'>Eagle AI Website</h3>
                              <div className="relative group cursor-pointer">
                                    <Image 
                                        src='/rotate_arrow.svg' 
                                        width={15} 
                                        height={15} 
                                        alt="" 
                                        className='bg-[rgba(38,38,38,1)] p-2 rounded-[8px] w-[30px] h-[30px]'
                                    />
                                    <div className="font-bricolage absolute opacity-0 group-hover:opacity-100 left-full top-0 -translate-y-1/2 ml-2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform group-hover:translate-x-0 -translate-x-1">
                                        Visit the site
                                    </div>
                                </div>
                            </div>
                            <p className='font-bricolage text-[rgba(152,152,154,1)] lg:text-[18px] font-[500] leading-[100%] mb-[50px]'>We designed a clean, intuitive platform for Eagle AI — a smart finance tool that helps users make better money moves. From seamless dashboards to smooth data flows, we made sure every part of the experience felt effortless. The result? A product that looks sharp, works fast, and actually makes finance feel less like a headache.</p>
                        </div>
                    </div>
                    <div className="">
                    <p className='lg:hidden font-bricolage border-b lg:border-r border-[rgba(38,38,38,1)] lg:w-1/2 px-4 lg:px-[50px] py-[30px] text-[rgba(152,152,154,1)] text-start lg:text-[28px] font-[600] leading-[100%]'>A Finance Website</p>

                        <div className='px-4 lg:px-[50px]'>
                            <div className="mt-4">
                                <Image src='/project_img.svg' width={1000} height={1000} alt=""/>
                            </div>
                            <div className="flex justify-between items-center my-[30px]">
                                <h3 className='font-bricolage text-[24px] leading-[100%] font-[700]'>Eagle AI Website</h3>
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src='/rotate_arrow.svg' 
                                        width={15} 
                                        height={15} 
                                        alt="" 
                                        className='bg-[rgba(38,38,38,1)] p-2 rounded-[8px] w-[30px] h-[30px]'
                                    />
                                    <div className="font-bricolage absolute opacity-0 group-hover:opacity-100 left-full top-0 -translate-y-1/2 ml-2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform group-hover:translate-x-0 -translate-x-1">
                                        Visit the site
                                    </div>
                                </div>
                                {/* <Image src='/rotate_arrow.svg' width={15} height={15} alt="" className='bg-[rgba(38,38,38,1)] p-2 rounded-[8px] w-[30px] h-[30px]'/> */}
                            </div>
                            <p className='font-bricolage text-[rgba(152,152,154,1)] lg:text-[18px] font-[500] leading-[100%] mb-[50px]'>We designed a clean, intuitive platform for Eagle AI — a smart finance tool that helps users make better money moves. From seamless dashboards to smooth data flows, we made sure every part of the experience felt effortless. The result? A product that looks sharp, works fast, and actually makes finance feel less like a headache.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col lg:flex-row justify-between">
                    <p className='hidden lg:block font-bricolage border-b lg:border-r border-[rgba(38,38,38,1)] lg:w-[50%] px-4 lg:px-[50px] py-[30px] text-[rgba(152,152,154,1)] text-start lg:text-[28px] font-[600] leading-[100%]'>A Finance Website</p>
                    <p className='font-bricolage border-b border-[rgba(38,38,38,1)] lg:w-[50%] px-4 lg:px-[50px] py-[30px] text-[rgba(152,152,154,1)] text-start lg:text-[28px] font-[600] leading-[100%]'>A Finance Website</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:border-r border-[rgba(38,38,38,1)] ">
                        <div className='px-4 lg:px-[50px]'>
                            <div className="mt-4">
                                <Image src='/project_img.svg' width={1000} height={1000} alt="" className='hidden lg:block'/>
                                <Image src='/project_img.svg' width={800} height={800} alt="" className='lg:hidden'/>
                            </div>
                            <div className="flex justify-between items-center my-[30px]">
                                <h3 className='font-bricolage text-[24px] leading-[100%] font-[700]'>Eagle AI Website</h3>
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src='/rotate_arrow.svg' 
                                        width={15} 
                                        height={15} 
                                        alt="" 
                                        className='bg-[rgba(38,38,38,1)] p-2 rounded-[8px] w-[30px] h-[30px]'
                                    />
                                    <div className="font-bricolage absolute opacity-0 group-hover:opacity-100 left-full top-0 -translate-y-1/2 ml-2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform group-hover:translate-x-0 -translate-x-1">
                                        Visit the site
                                    </div>
                                </div>
                               
                            </div>
                            <p className='font-bricolage text-[rgba(152,152,154,1)] lg:text-[18px] font-[500] leading-[100%] mb-[50px]'>We designed a clean, intuitive platform for Eagle AI — a smart finance tool that helps users make better money moves. From seamless dashboards to smooth data flows, we made sure every part of the experience felt effortless. The result? A product that looks sharp, works fast, and actually makes finance feel less like a headache.</p>
                        </div>
                    </div>
                    <div className=" ">
                    <p className='lg:hidden font-bricolage border-b border-t lg:border-r border-[rgba(38,38,38,1)] lg:w-1/2 px-4 lg:px-[50px] py-[30px] text-[rgba(152,152,154,1)] text-start lg:text-[28px] font-[600] leading-[100%]'>A Finance Website</p>
                        <div className='px-4 lg:px-[50px]'>

                            <div className="mt-4">
                                <Image src='/project_img.svg' width={1000} height={1000} alt=""/>
                            </div>
                            <div className="flex justify-between items-center my-[30px]">
                                <h3 className='font-bricolage text-[24px] leading-[100%] font-[700]'>Eagle AI Website</h3>
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src='/rotate_arrow.svg' 
                                        width={15} 
                                        height={15} 
                                        alt="" 
                                        className='bg-[rgba(38,38,38,1)] p-2 rounded-[8px] w-[30px] h-[30px]'
                                    />
                                    <div className="font-bricolage absolute opacity-0 group-hover:opacity-100 left-full top-0 -translate-y-1/2 ml-2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform group-hover:translate-x-0 -translate-x-1">
                                        Visit the site
                                    </div>
                                </div>
                                {/* <Image src='/rotate_arrow.svg' width={15} height={15} alt="" className='bg-[rgba(38,38,38,1)] p-2 rounded-[8px] w-[30px] h-[30px]'/> */}
                            </div>
                            <p className='font-bricolage text-[rgba(152,152,154,1)] lg:text-[18px] font-[500] leading-[100%] mb-[50px]'>We designed a clean, intuitive platform for Eagle AI — a smart finance tool that helps users make better money moves. From seamless dashboards to smooth data flows, we made sure every part of the experience felt effortless. The result? A product that looks sharp, works fast, and actually makes finance feel less like a headache.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Link href={'/projects'} className="font-inter relative z-50 primary-btn p-4 rounded-[30px] mt-[59px] border  border-[rgba(3,16,247,1)] text-[rgba(255,255,255,1)] text-[20px] font-[400] leading-[100%]">Explore more projects</Link>
    </article>
  )
}

export default OurProjects