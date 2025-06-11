import Image from 'next/image'
import React from 'react'

const ValueProposition = () => {
  return (
    <section className='bg-[#060606] flex flex-col justify-center items-center pb-[102px] px-[16px] text-white lg:px-[80px] xl:px-[100px]'>
        <h1 className='font-bricolage my-[80px] text-[32px] lg:text-[60px] leading-[100%] font-bold'>Why Choose Us?</h1>
        <div className="">
            <div className="flex flex-col lg:flex-row items-center border-t lg:border-b border-gray-900">
                <div className="lg:border-r lg:border-gray-900 lg:w-1/2 p-10">
                    <div className="flex items-center gap-4">
                        <div className="w-[50px] h-[50px] rounded-[10px] p-2 bg-[linear-gradient(to_bottom,_#3A44FF80,_#24242400)]">
                            <Image src="/award.svg" width={40} height={40} alt="award icon"/>
                        </div>
                        <h3 className='font-bricolage text-[18px] lg:text-[28px] font-[600] leading-[100%] '>Experience and Expertise</h3>
                    </div>
                    <p className='font-inter lg:text-[20px] text-[rgba(230,230,230,0.7)] font-[400] leading-[100%] mt-6'>With years of experience in the field, we bring a wealth of industry knowledge and expertise to every project.</p>
                </div>
                <div className=" lg:w-1/2 p-10">
                    <div className="flex items-center gap-4">
                        <div className="w-[50px] h-[50px] rounded-[10px] p-2 bg-[linear-gradient(to_bottom,_#3A44FF80,_#24242400)]">
                            <Image src="/crown.svg" width={40} height={40} alt="award icon"/>
                        </div>
                        <h3 className='font-bricolage text-[18px] lg:text-[28px] font-[600] leading-[100%] '>Creative Innovation</h3>
                    </div>
                    <p className='font-inter lg:text-[20px] text-[rgba(230,230,230,0.7)] font-[400] leading-[100%] mt-6'>We stay at the forefront of technological advancements to provide innovative solutions that give your business a competitive edge.</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:border-r border-gray-900 lg:w-1/2 p-10">
                    <div className="flex items-center gap-4">
                        <div className="w-[50px] h-[50px] rounded-[10px] p-2 bg-[linear-gradient(to_bottom,_#3A44FF80,_#24242400)]">
                            <Image src="/badge.svg" width={40} height={40} alt="award icon"/>
                        </div>
                        <h3 className='font-bricolage text-[18px] lg:text-[28px] font-[600] leading-[100%] '>Quality Assurance</h3>
                    </div>
                    <p className='font-inter lg:text-[20px] text-[rgba(230,230,230,0.7)] font-[400] leading-[100%] mt-6'>We pay meticulous attention to every aspect of our work, ensuring high-quality deliverables that meet and exceed industry standards.</p>
                </div>
                <div className=" p-10 lg:w-1/2">
                    <div className="flex items-center gap-4">
                        <div className="w-[50px] h-[50px] rounded-[10px] p-2 bg-[linear-gradient(to_bottom,_#3A44FF80,_#24242400)]">
                            <Image src="/community.svg" width={40} height={40} alt="award icon"/>
                        </div>
                        <h3 className='font-bricolage text-[18px] lg:text-[28px] font-[600] leading-[100%] '>Client-Centric Approach</h3>
                    </div>
                    <p className='font-inter lg:text-[20px] text-[rgba(230,230,230,0.7)] font-[400] leading-[100%] mt-6'>We value open communication and collaboration, working closely with clients to understand their goals and deliver solutions that align with their vision.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ValueProposition