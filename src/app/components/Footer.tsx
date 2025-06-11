import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#000000] relative lg:pl-[120.12px]  lg:pr-[100px] border-t border-[#262626] text-white'>
            <Image src='/otb_footer_bg.png' width={1000} height={1000} alt="otb" className='absolute z-30 bottom-6 lg:-bottom-2 right-1/2 translate-y-1/2 translate-x-1/2'/>
        <div className="flex flex-col lg:flex-row justify-between items-center py-3 border-b  border-[#262626]">
            <Link href={'/'}>
                <Image src='/Over the Board Logo2.svg' width={300} height={300} alt="otb" className='-ml-16 hidden lg:block'/>
                <Image src='/Over the Board Logo2.svg' width={400} height={400} alt="otb" className='lg:hidden'/>
            </Link>
            <div className="flex flex-col lg:flex-row items-center -mt-8 lg:-mt-0 lg:gap-[96px]">
            <ul className='flex flex-col gap-4 lg:gap-[30px] text-[18px] font-[400] leading-[100%]  lg:flex-row items-center'>
                <li className='font-inter lg:text-[18px] font-[400] mb-[11.5px] lg:mb-0'><Link href={'/'}>Home</Link></li>
                <li className='font-inter lg:text-[18px] font-[400] mb-[11.5px] lg:mb-0'><Link href={'/'}>Services</Link></li>
                <li className='font-inter lg:text-[18px] font-[400] mb-[11.5px] lg:mb-0'><Link href={'/projects'}>Projects</Link></li>
                <li className='font-inter lg:text-[18px] font-[400] mb-[11.5px] lg:mb-0'><Link href={'/'}>About</Link></li>
                <li className='font-inter lg:text-[18px] font-[400] mb-[11.5px] lg:mb-0'><Link href={'/'}>Contact</Link></li>
            </ul>
            <ul className='flex flex-col lg:flex-row lg:justify-between items-center lg:w-[398px] gap-[8px] border border-[#262626] rounded-[12px] mb-[50px] lg:mb-0 mt-[30px] lg:mt-0 py-4 px-6 lg:p-[14px]'>
                <li className='font-inter lg:text-[18px] font-[400] leading-[100%]'><p>Let’s be social</p></li>
                <div className="flex items-center gap-[14px] ">
                    <li className='w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[linear-gradient(to_bottom,_#242424,_#2E2E2E00)] p-2'>
                        <Link href={'/'}>
                        <Image src='/facebook.svg' width={24} height={24} alt="otb"/>
                        </Link>
                    </li>
                    <li className='w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[linear-gradient(to_bottom,_#242424,_#2E2E2E00)] p-2'>
                        <Link href={'/'}>
                        <Image src='/twitter.svg' width={24} height={24} alt="otb"/>
                        </Link>
                    </li>
                    <li className='w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[linear-gradient(to_bottom,_#242424,_#2E2E2E00)] p-2'>
                        <Link href={'/'}>
                        <Image src='/linkedin.svg' width={24} height={24} alt="otb"/>
                        </Link>
                    </li>
                </div>
            </ul>
            </div>
        </div>
        <div className="flex flex-col lg items-center pt-[38px] pb-[50px] lg:pb-[111px] ">
            <div className="w-full flex flex-col lg:flex-row justify-between items-center">
                <div className="flex items-center gap-[4px]  border-b pb-2 lg:pb-1 border-[#262626]">
                    <Image src='/email.svg' width={20} height={24} alt="otb"className='p-[1px]'/>
                    <span className='font-inter text-[12px] font-[400] leading-[100%]'>hello@otbsolutions.co.uk</span>
                </div>
                <div className="flex items-center gap-[4px]  border-b pb-2 lg:pb-1 border-[#262626]">
                    <Image src='/phone.svg' width={20} height={24} alt="otb" className='p-[1px]'/>
                    <a href="tel:+447944704724" className='font-inter text-[12px] font-[400] leading-[100%]'>
                        +44 7944 704724
                    </a>
                </div>
                <div className="flex items-center gap-[4px] px-[5.9rem] lg:px-0 text-center lg:text-start border-b pb-2 lg:pb-1 border-[#262626]">
                    <Image src='/address.png' width={20} height={24} alt="otb" className='hidden lg:block p-[1px]'/>
                    <Image src='/address.png' width={40} height={40} alt="otb" className='lg:hidden'/>
                    <span className='font-inter text-[12px] font-[400] leading-[100%]'>2nd Floor College House, 17 King Edwards Road, Ruislip, London, HA4 7AE</span>
                </div>
                <p className='font-bricolage text-[14px] text-[rgba(152,152,154,1)] font-[400] my-[30px] lg:mt-0 leading-[100%]'>© 2025 OTB. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer