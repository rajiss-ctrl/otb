import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { useMenu } from '../context/MenuContext'




const DesktopMenu = () => {
    const {  open, setOpen } = useMenu()

  // Animation variants
  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  }
  
  const handleLogoClick = () => {
    // Close the menu if it's open
    if (open) {
      setOpen(false)
    }
  }
  return (
        <AnimatePresence>
      {open && (
        <motion.nav 
          className="bg-[#000000] fixed h-[730px] lg:h-[600px] top-0 left-0 z-[60] lg:z-50 text-white px-4 lg:px-[100px] pb-[100px] w-full flex flex-col"
          initial="visible"
          animate={scrollY > 50 ? "hidden" : "visible"}
          exit="hidden"
          variants={menuVariants}
        >
          {/* Background Image */}
          <div className="hidden lg:block absolute inset-0 -z-10 overflow-hidden">
              <Image 
                  src="/desktop_menu_net.svg" 
                  alt="Background pattern"
                  fill
                  className=" object-cover object-center"
                  style={{ opacity: 0.5 }}
              />
          </div>
          <div className="lg:hidden absolute inset-0 -z-10 overflow-hidden">
              <Image 
                  src="/mobile_menu_net.svg" 
                  alt="Background pattern"
                  fill
                  className="object-cover object-center"
                  style={{ opacity: 0.5 }}
              />
          </div>
          <div className="mt-8">
            <Navbar />
          </div>
          <div className="flex flex-col lg:flex-row justify-start lg:justify-between w-full lg:flex-grow lg:items-end mt-[44px] lg:mt-0 pb-[53px] lg:pb-0 relative z-50">
              <ul className="">
                  <Link href='/' className='flex items-end gap-4 mb-[30px]'>
                      <Image src='/01.svg' width={20} height={20} alt="phone"/>
                      <li className='home-num text-xl lg:text-[30px] font-[400] lg:font-[700] leading-[100%] '>Home</li>
                  </Link>
                  <Link href='/' className='flex items-end gap-4 mb-[30px]'>
                      <Image src='/02.svg' width={20} height={20} alt="phone"/>
                      <li className='serv-num text-xl lg:text-[30px] font-[400] lg:font-[700] leading-[100%]'>Services</li>
                  </Link>
                  <Link  href='/projects' className='flex items-end gap-4 mb-[30px]'>
                      <Image src='/03.svg' width={20} height={20} alt="phone"/>
                      <li onClick={handleLogoClick} className='pro-num text-xl lg:text-[30px] font-[400] lg:font-[700] leading-[100%]'>Projects</li>
                  </Link>
              </ul>
              <ul className="">
                  <Link href='/' className='flex items-end gap-4 mb-[30px]'>
                      <Image src='/04.svg' width={20} height={20} alt="phone"/>
                      <li onClick={handleLogoClick} className='home-num text-xl lg:text-[30px] font-[400] lg:font-[700] leading-[100%]'>About</li>
                  </Link>
                  <Link href='/' className='flex items-end gap-4 mb-[30px]'>
                      <Image src='/05.svg' width={20} height={20} alt="phone"/>
                      <li className='serv-num text-xl lg:text-[30px] font-[400] lg:font-[700] leading-[100%]'>Contact</li>
                  </Link>
              </ul>
              <div className='flex lg:hidden flex-col w-[247px] mb-[32px] gap-[20px] rounded-[12px] border border-[#262626] pl-[24px] pr-[4px] py-[14px]'>
                      <span>Let&apos;s be social</span>
                      <div className="flex items-center gap-[20px] ">
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
                  </div>
              <ul className="">
                  <Link href='/'>
                      <li className='lg:ml-24 text-[22px] mb-[18px] text-[#FFFFFFB2] font-[400] leading-[100%]'>Get in touch</li>
                  </Link>
                  <Link href='/'>
                      <li className='w-[247px] lg:w-auto border-b pb-4 border-[#262626] lg:ml-24 flex gap-1 items-center mb-[36px] text-[18px] font-[400] leading-[150%] text-[#FDFDFD]'>
                          <Image src='/email.svg' width={20} height={20} alt="phone"/>
                          <span>hello@otbsolutions.co.uk</span>
                      </li>
                  </Link>
                  <Link href='/'>
                      <li className='w-[247px] lg:w-auto border-b pb-4 border-[#262626] lg:ml-24 flex gap-1 items-center mb-[36px] text-[18px] font-[400] leading-[150%] text-[#FDFDFD]'>
                          <Image src='/phone.svg' width={20} height={20} alt="phone"/>
                          <span>+44 7944 704724</span>
                      </li>
                  </Link>
                  <div className='hidden lg:flex flex-col lg:flex-row items-center gap-[20px] rounded-[12px] border border-[#262626] pl-[24px] pr-[4px] py-[14px]'>
                      <span>Let&apos;s be social</span>
                      <div className="lg:flex lg:items-center gap-[20px] ">
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
              </div>
              </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default DesktopMenu;