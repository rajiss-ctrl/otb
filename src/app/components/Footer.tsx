import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#000000] lg:pl-[120.12px] lg:pr-[100px] border-t border-[#262626] text-white'>
        <div className="flex flex-col lg:flex-row justify-between items-center border-b py-[] border-[#262626]">
            <Link href={'/'}>
                <Image src='/otb_over_the_board_logo.svg' width={300} height={300} alt="otb" className='hidden lg:block'/>
                <Image src='/otb_over_the_board_logo.svg' width={400} height={400} alt="otb" className='lg:hidden'/>
            </Link>
            <div className="flex flex-col lg:flex-row items-center lg:gap-[96px]">
            <ul className='flex flex-col gap-[30px] text-[18px] font-[400] leading-[100%]  lg:flex-row items-center'>
                <li className='mb-[11.5px] lg:mb-0'><Link href={'/'}>Home</Link></li>
                <li className='mb-[11.5px] lg:mb-0'><Link href={'/'}>Services</Link></li>
                <li className='mb-[11.5px] lg:mb-0'><Link href={'/'}>Projects</Link></li>
                <li className='mb-[11.5px] lg:mb-0'><Link href={'/'}>About</Link></li>
                <li className='mb-[11.5px] lg:mb-0'><Link href={'/'}>Contact</Link></li>
            </ul>
            <ul className='flex flex-col lg:flex-row items-center gap-[20px] border border-[#262626] rounded-[12px] mb-[50px] lg:mb-0 mt-[30px] lg:mt-0 py-4 px-6 lg:p-[14px]'>
                <li className='text-[18px] font-[400] leading-[100%]'><p>Let’s be social</p></li>
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
        <div className="flex flex-col lg items-center pt-[38px] pb-[111px] ">
            <div className="flex flex-col lg:flex-row gap-[30px] items-center">
                <div className="flex items-center gap-[10px]  border-b pb-2 lg:pb-1 border-[#262626]">
                    <Image src='/email.svg' width={20} height={24} alt="otb"/>
                    <span className='text-[14px] font-[400] leading-[100%]'>hello@otbsolutions.co.uk</span>
                </div>
                <div className="flex items-center gap-[10px]  border-b pb-2 lg:pb-1 border-[#262626]">
                    <Image src='/phone.svg' width={20} height={24} alt="otb" />
                    <a href="tel:+447944704724" className='text-[14px] font-[400] leading-[100%]'>
                        +44 7944 704724
                    </a>
                </div>
                <div className="flex items-center gap-[10px] px-[5.9rem] lg:px-0 text-center lg:text-start border-b pb-2 lg:pb-1 border-[#262626]">
                    <Image src='/address.png' width={20} height={24} alt="otb" className='hidden lg:block'/>
                    <Image src='/address.png' width={30} height={24} alt="otb" className='lg:hidden'/>
                    <span className='text-[14px] font-[400] leading-[100%]'>2nd Floor College House, 17 King Edwards Road, Ruislip, London, HA4 7AE</span>
                </div>
                <p className='text-[14px] font-[400] mt-[40px] lg:mt-0 leading-[100%]'>© 2025 OTB. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer