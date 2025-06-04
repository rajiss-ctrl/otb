import Image from 'next/image'
import React from 'react'

const ValueProposition = () => {
  return (
    <section className='bg-[#060606] flex flex-col justify-center items-center pb-[102px] px-[16px] text-white lg:px-[100px]'>
        <h1 className='my-[80px] text-[20px] lg:text-[40px] leading-[100%] font-bold'>Why Choose Us?</h1>
        <div className="">
            <div className="flex flex-col lg:flex-row items-center border-t lg:border-b border-gray-900">
                <div className="lg:border-r lg:border-gray-900 p-10">
                    <div className="flex items-center gap-4">
                        <div className="w-[50px] h-[50px] rounded-[10px] p-2 bg-[linear-gradient(to_bottom,_#3A44FF80,_#24242400)]">
                            <Image src="/award.svg" width={40} height={40} alt="award icon"/>
                        </div>
                        <h3 className='text-[20px] font-[600] leading-[100%] '>Experience and Expertise</h3>
                    </div>
                    <p className='text-[16px] font-light leading-[100%] mt-6'>With years of experience in the field, we bring a wealth of industry knowledge and expertise to every project.</p>
                </div>
                <div className=" p-10">
                    <div className="flex items-center gap-4">
                        <div className="w-[50px] h-[50px] rounded-[10px] p-2 bg-[linear-gradient(to_bottom,_#3A44FF80,_#24242400)]">
                            <Image src="/crown.svg" width={40} height={40} alt="award icon"/>
                        </div>
                        <h3 className='text-[20px] font-[600] leading-[100%] '>Experience and Expertise</h3>
                    </div>
                    <p className='text-[16px] font-light leading-[100%] mt-6'>With years of experience in the field, we bring a wealth of industry knowledge and expertise to every project.</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:border-r border-gray-900 p-10">
                    <div className="flex items-center gap-4">
                        <div className="w-[50px] h-[50px] rounded-[10px] p-2 bg-[linear-gradient(to_bottom,_#3A44FF80,_#24242400)]">
                            <Image src="/badge.svg" width={40} height={40} alt="award icon"/>
                        </div>
                        <h3 className='text-[20px] font-[600] leading-[100%] '>Experience and Expertise</h3>
                    </div>
                    <p className='text-[16px] font-light leading-[100%] mt-6'>With years of experience in the field, we bring a wealth of industry knowledge and expertise to every project.</p>
                </div>
                <div className=" p-10">
                    <div className="flex items-center gap-4">
                        <div className="w-[50px] h-[50px] rounded-[10px] p-2 bg-[linear-gradient(to_bottom,_#3A44FF80,_#24242400)]">
                            <Image src="/community.svg" width={40} height={40} alt="award icon"/>
                        </div>
                        <h3 className='text-[20px] font-[600] leading-[100%] '>Experience and Expertise</h3>
                    </div>
                    <p className='text-[16px] font-light leading-[100%] mt-6'>With years of experience in the field, we bring a wealth of industry knowledge and expertise to every project.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ValueProposition