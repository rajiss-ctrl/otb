import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurProjects = () => {
  return (
    <article className='relative z-50 flex justify-center items-center flex-col py-[84px] bg-[#000000]'>
        <Link href='/projects' className='relative z-[60] primary-btn border-[1px] border-[rgba(3,16,247,1)] p-4 text-white lg:text-[26px] font-medium leading-[100%] rounded-[30px] mb-[60px]'>
            Our Projects
        </Link>
        <div className="flex flex-col justify-start px-[25%] lg:px-[35%]">
            <h2 className='font-bricolage text-white text-[30px] lg:text-[50px] leading-[100%] font-bold'>This Ain&#39;t Just <br/> Portfolio Sh*t</h2>
            <p className='font-inter lg:text-[22px] leading-[100%] font-[400] text-[rgba(255,255,255,0.66)]  mt-4'>We Built Some Wild Projects — real work, real late nights, real results. Scroll through and see some of what we&#39;re on.</p>    
        </div>
        <Image src='/cube.svg' width={80} height={80} alt="" className='z-0 lg:hidden absolute top-60 left-0 '/>
        <Image src='/cube.svg' width={200} height={200} alt="" className='z-0 hidden lg:block absolute top-52 left-[60px]'/>
      
        <Image src='/tiles.svg' width={80} height={80} alt="" className='z-0 lg:hidden absolute top-60 right-0 '/>
        <Image src='/tiles.svg' width={200} height={200} alt="" className='z-0 hidden lg:block absolute top-32 right-[60px]'/>
      
        <div className="mt-[69px] w-full text-white px-4 lg:px-[100px]">
            <div className="w-full border-t-[1px] border-b-[1px] border-[rgba(38,38,38,1)]">
                <div className="flex flex-col lg:flex-row justify-between">
                    <p className='font-bricolage border-b-[1px] lg:border-r-[1px] border-[rgba(38,38,38,1)] lg:w-1/2 px-[50px] py-[30px] text-[rgba(152,152,154,1)] text-start text-[28px] font-[600] leading-[100%]'>A Finance Website</p>
                    <p className='font-bricolage border-b-[1px] border-[rgba(38,38,38,1)] lg:w-1/2 px-[50px] py-[30px] text-[rgba(152,152,154,1)] text-start text-[28px] font-[600] leading-[100%]'>A Finance Website</p>
                </div>
                <div className="flex items-center flex-col lg:flex-row">
                    <div className="lg:border-r-[1px] border-b-[1px] border-[rgba(38,38,38,1)] ">
                        <div className='px-4 lg:px-[58px]'>
                            <div className="mt-4">
                                <Image src='/project_img.svg' width={1000} height={1000} alt="" className='hidden lg:block'/>
                                <Image src='/project_img.svg' width={800} height={800} alt="" className='lg:hidden'/>
                            </div>
                            <div className="flex justify-between items-center my-[30px]">
                                <h3 className='font-bricolage text-[24px] leading-[100%] font-[700]'>Eagle AI Website</h3>
                                <Image src='/rotate_arrow.svg' width={15} height={15} alt="" className='bg-[rgba(38,38,38,1)] p-2 rounded-[8px] w-[30px] h-[30px]'/>
                            </div>
                            <p className='font-bricolage text-[rgba(152,152,154,1)] lg:text-[18px] font-[500] leading-[100%] mb-[50px]'>We designed a clean, intuitive platform for Eagle AI — a smart finance tool that helps users make better money moves. From seamless dashboards to smooth data flows, we made sure every part of the experience felt effortless. The result? A product that looks sharp, works fast, and actually makes finance feel less like a headache.</p>
                        </div>
                    </div>
                    <div className="border-b-[1px] border-[rgba(38,38,38,1)] ">
                        <div className='px-4 lg:px-[58px]'>
                            <div className="mt-4">
                                <Image src='/project_img.svg' width={1000} height={1000} alt=""/>
                            </div>
                            <div className="flex justify-between items-center my-[30px]">
                                <h3 className='font-bricolage text-[24px] leading-[100%] font-[700]'>Eagle AI Website</h3>
                                <Image src='/rotate_arrow.svg' width={15} height={15} alt="" className='bg-[rgba(38,38,38,1)] p-2 rounded-[8px] w-[30px] h-[30px]'/>
                            </div>
                            <p className='font-bricolage text-[rgba(152,152,154,1)] lg:text-[18px] font-[500] leading-[100%] mb-[50px]'>We designed a clean, intuitive platform for Eagle AI — a smart finance tool that helps users make better money moves. From seamless dashboards to smooth data flows, we made sure every part of the experience felt effortless. The result? A product that looks sharp, works fast, and actually makes finance feel less like a headache.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col lg:flex-row justify-between">
                    <p className='font-bricolage border-b-[1px] lg:border-r-[1px] border-[rgba(38,38,38,1)] lg:w-1/2 px-[50px] py-[30px] text-[rgba(152,152,154,1)] text-start text-[28px] font-[600] leading-[100%]'>A Finance Website</p>
                    <p className='font-bricolage border-b-[1px] border-[rgba(38,38,38,1)] lg:w-1/2 px-[50px] py-[30px] text-[rgba(152,152,154,1)] text-start text-[28px] font-[600] leading-[100%]'>A Finance Website</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:border-r-[1px] border-[rgba(38,38,38,1)] ">
                        <div className='px-4 lg:px-[58px]'>
                            <div className="mt-4">
                                <Image src='/project_img.svg' width={1000} height={1000} alt="" className='hidden lg:block'/>
                                <Image src='/project_img.svg' width={800} height={800} alt="" className='lg:hidden'/>
                            </div>
                            <div className="flex justify-between items-center my-[30px]">
                                <h3 className='font-bricolage text-[24px] leading-[100%] font-[700]'>Eagle AI Website</h3>
                                <Image src='/rotate_arrow.svg' width={15} height={15} alt="" className='bg-[rgba(38,38,38,1)] p-2 rounded-[8px] w-[30px] h-[30px]'/>
                            </div>
                            <p className='font-bricolage text-[rgba(152,152,154,1)] lg:text-[18px] font-[500] leading-[100%] mb-[50px]'>We designed a clean, intuitive platform for Eagle AI — a smart finance tool that helps users make better money moves. From seamless dashboards to smooth data flows, we made sure every part of the experience felt effortless. The result? A product that looks sharp, works fast, and actually makes finance feel less like a headache.</p>
                        </div>
                    </div>
                    <div className=" ">
                        <div className='px-4 lg:px-[58px]'>
                            <div className="mt-4">
                                <Image src='/project_img.svg' width={1000} height={1000} alt=""/>
                            </div>
                            <div className="flex justify-between items-center my-[30px]">
                                <h3 className='font-bricolage text-[24px] leading-[100%] font-[700]'>Eagle AI Website</h3>
                                <Image src='/rotate_arrow.svg' width={15} height={15} alt="" className='bg-[rgba(38,38,38,1)] p-2 rounded-[8px] w-[30px] h-[30px]'/>
                            </div>
                            <p className='font-bricolage text-[rgba(152,152,154,1)] lg:text-[18px] font-[500] leading-[100%] mb-[50px]'>We designed a clean, intuitive platform for Eagle AI — a smart finance tool that helps users make better money moves. From seamless dashboards to smooth data flows, we made sure every part of the experience felt effortless. The result? A product that looks sharp, works fast, and actually makes finance feel less like a headache.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Link href={'/projects'} className="relative z-50 primary-btn p-4 rounded-[30px] mt-[59px] text-[rgba(255,255,255,1)] text-[20px] font-light leading-[100%]">Explore more projects</Link>
    </article>
  )
}

export default OurProjects