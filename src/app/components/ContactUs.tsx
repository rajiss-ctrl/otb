import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
  return (
    <section className='relative lg:static px-4 py-8 lg:py-[118px] lg:px-[100px] text-white'>
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col justify-between">
                <div className="">
                    <h4 className='text-[24px] lg:text-[50px] font-[700] leading-[100%] mb-[7px] lg:mb-[21px]'>Contact us</h4>
                    <p className='text-[14px] mb-[20px] lg:mb-0 lg:text-[20px] text-[#FFFFFFA8] font-[400] leading-[100%]'>Prepared to boost your IT systems to the next level? Leverage the unmatched knowledge of experts who effortlessly advance your operations. Together, we’ll optimize your tech capabilities. Seize this chance today!</p>
                </div>
                <Image src="/tiles.svg" width={300} height={300} alt="" className='hidden lg:block'/>
                <Image src="/tiles.svg" width={80} height={80} alt="" className='absolute bottom-8 -left-4 lg:hidden'/>
            </div>
            <form className="border border-[#262626] py-[16.12px] px-[20px] lg:p-[50px]">
                <div className="flex flex-col lg:flex-row gap-[30px] pb-[30px]">
                    <div className="bg-[#262626] lg:py-[22px] p-[25px] lg:px-[40px] rounded-[8px]">
                        <p className='text-[14px] lg:text-[22px] font-[600] leading-[100%]'>Full Name</p>
                        <input type="text" placeholder='Type here' className='mt-[20px] p-1 rounded-[4px] focus:outline-none focus:ring-0 focus:border-transparent border-b border-[#656567]' />
                    </div>
                    <div className="bg-[#262626] lg:py-[22px] p-[25px] lg:px-[40px] rounded-[8px]">
                        <p className='text-[14px] lg:text-[22px] font-[600] leading-[100%]'>Email</p>
                        <input type="email" placeholder='Type here'  className='mt-[20px] p-1 rounded-[4px] focus:outline-none focus:ring-0 focus:border-transparent border-b border-[#656567]'/>
                    </div>
                </div>
                <div className="bg-[#262626] p-[25px] lg:p-[40px] mb-[30px] rounded-[8px]">
                    <h4 className='text-[14px] lg:text-[22px] font-[600] leading-[100%]'>Why are you contacting us?</h4>
                    <div className="grid grid-cols-2 gap-4 mt-[30px]">
                        <div className="flex items-center gap-4">
                            <input type="checkbox" name="" id=""
                                 className="appearance-none w-5 h-5 bg-[#333333] checked:bg-[#333333]  border border-gray-500 rounded-sm checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center"
                            />
                            <span className='text-xs lg:text-sm'>Web Design</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="checkbox" name="" id=""
                                 className="appearance-none w-5 h-5 bg-[#333333] checked:bg-[#333333]  border border-gray-500 rounded-sm checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center"
                            />
                            <span className='text-xs lg:text-sm'>Collaboration</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="checkbox" name="" id=""
                                 className="appearance-none w-5 h-5 bg-[#333333] checked:bg-[#333333]  border border-gray-500 rounded-sm checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center"
                            />
                            <span className='text-xs lg:text-sm'>Mobile App Design</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="checkbox" name="" id=""
                                 className="appearance-none w-5 h-5 bg-[#333333] checked:bg-[#333333]  border border-gray-500 rounded-sm checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center"
                            />
                            <span className='text-xs lg:text-sm'>Others</span>
                        </div>
                    </div>

                </div>
                <div className="bg-[#262626] p-[25px] lg:p-[40px] mb-[30px] rounded-[8px]">
                    <h4 className='mb-[20px] text-[14px] lg:text-[22px] font-[600] leading-[100%]'>Your Message</h4>
                    <span className=' text-[#656567]'>Type Here</span>
                    <div className="w-full h-[1px] bg-[#333333]"></div>
                    <textarea name="" id="" className='w-full focus:outline-none focus:ring-0 focus:border-transparent lg:h-100px'></textarea>
                    <div className="w-full h-[1px] bg-[#333333]"></div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="primary-btn py-2 px-8 rounded-[40px] text-center">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactUs