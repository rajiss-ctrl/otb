'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { useMenu } from '../context/MenuContext'

const DesktopMenu = () => {
  const { open, setOpen } = useMenu()
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null) 

  const handleLogoClick = () => {
    if (open) setOpen(false)
  }

  // Close menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname, setOpen])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, setOpen])

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, setOpen])

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const transition = {
    duration: 0.6,
    ease: [0.25, 0.8, 0.25, 1],
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          ref={menuRef} 
          className="bg-[#000000] fixed h-screen  top-0 left-0 z-[60] lg:z-50 text-white px-4 lg:px-[100px] pb-[100px] w-full flex flex-col"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          

          {/* Backgrounds */}
          <div className="hidden lg:block absolute inset-0 -z-10 overflow-hidden">
            <Image
              src="/desktop_menu_net.svg"
              alt="Background pattern"
              fill
              className="object-cover object-center"
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

          <motion.div
            className="flex flex-col lg:flex-row justify-start lg:justify-between w-full lg:flex-grow lg:items-end mt-[44px] lg:mt-0 pb-[53px] lg:pb-0 relative z-50 px-4 lg:px-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {/* First Column */}
            <motion.ul className="space-y-[40px]">
            {[
                { href: "/", icon: "/01", text: "Home", className: "home-num" },
                { href: "/services", icon: "/02", text: "Services", className: "serv-num" },
                { href: "/projects", icon: "/03", text: "Projects", className: "pro-num", onClick: handleLogoClick }
            ].map((item, index) => (
                <motion.li 
                key={index}
                variants={itemVariants}
                transition={transition}
                >
                <Link href={item.href} className="flex items-end gap-4">
                    {/* <Image src={item.icon} width={20} height={20} alt={item.text.toLowerCase()} /> */}
                    <p className={`${pathname === item.href ? 'text-blue-500 font-bold' : 'text-white'}`}>{item.icon}</p>
                    <motion.span 
                    className={`${item.className} text-[24px] lg:text-[70px] font-[400] lg:font-[700] leading-[100%] ${pathname === item.href ? 'text-blue-500 font-bold' : 'text-white'}`}
                    onClick={item.onClick}
                    >
                    {item.text}
                    </motion.span>
                </Link>
                </motion.li>
            ))}
            </motion.ul>

            {/* Second Column */}
            <motion.ul className="space-y-[40px] my-[30px] lg:my-0">
            {[
                { href: "/about", icon: "/04", text: "About", className: "home-num", onClick: handleLogoClick },
                { href: "/contact", icon: "/05", text: "Contact", className: "serv-num" }
            ].map((item, index) => (
                <motion.li 
                key={index}
                variants={itemVariants}
                transition={transition}
                >
                <Link href={item.href} className="flex items-end gap-4">
                    {/* <Image src={item.icon} width={20} height={20} alt={item.text.toLowerCase()} /> */}
                    <p className={`${pathname === item.href ? 'text-blue-500 font-bold' : 'text-white'}`}>{item.icon}</p>
                    <motion.span 
                    className={`${item.className} text-[24px] lg:text-[70px] font-[400] lg:font-[700] leading-[100%] ${pathname === item.href ? 'text-blue-500 font-bold' : 'text-white'}`}
                    onClick={item.onClick}
                    >
                    {item.text}
                    </motion.span>
                </Link>
                </motion.li>
            ))}
            </motion.ul>


            {/* Social for mobile */}
            <motion.div
              className="flex lg:hidden leading-[40.17px] flex-col w-[247px] mb-[32px] gap-[20px] rounded-[12px] border border-[#262626] pl-[24px] pr-[4px] py-[14px]"
              variants={itemVariants}
              transition={transition}
            >
              <motion.span variants={itemVariants} transition={transition}>
                Let&apos;s be social
              </motion.span>
              <motion.div 
                className="flex items-center gap-[20px]"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {['facebook', 'twitter', 'linkedin'].map((platform, i) => (
                  <motion.li
                    key={i}
                    className="w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[linear-gradient(to_bottom,_#242424,_#2E2E2E00)] p-2"
                    variants={itemVariants}
                    transition={transition}
                  >
                    <Link href="/">
                      <Image
                        src={`/${platform}.svg`}
                        width={24}
                        height={24}
                        alt={platform}
                      />
                    </Link>
                  </motion.li>
                ))}
              </motion.div>
            </motion.div>

            {/* Third Column */}
            <motion.ul className="space-y-[18px] lg:space-y-[18px]">
              {[
                { text: "Get in touch", className: "lg:ml-24 text-[22px] leading-[100%] text-[#FFFFFFB2]" },
                { 
                  content: (
                    <>
                      <Image src="/email.svg" width={20} height={20} alt="email" />
                      <span className='leading-[100%]'>hello@otbsolutions.co.uk</span>
                    </>
                  ),
                  className: "w-[247px] lg:w-auto border-b pb-2 border-[#262626] lg:ml-24 flex gap-1 items-center text-[18px] text-[#FDFDFD]"
                },
                { 
                  content: (
                    <>
                      <Image src="/phone.svg" width={20} height={20} alt="phone" />
                      <span className='leading-[100%]'>+44 7944 704724</span>
                    </>
                  ),
                  className: "w-[247px] lg:w-auto border-b pb-2 border-[#262626] lg:ml-24 flex gap-1 items-center text-[18px] text-[#FDFDFD]"
                }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  transition={transition}
                  className={item.className}
                >
                  {item.text || item.content}
                </motion.li>
              ))}

              {/* Social for desktop */}
              <motion.div
                className="hidden leading-[40.17px] lg:flex flex-col lg:flex-row items-center gap-[20px] rounded-[12px] border border-[#262626] pl-[24px] pr-[4px] py-[14px]"
                variants={itemVariants}
                transition={transition}
              >
                <motion.span variants={itemVariants} transition={transition}>
                  Let&apos;s be social
                </motion.span>
                <motion.div 
                  className="lg:flex lg:items-center gap-[20px]"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {['facebook', 'twitter', 'linkedin'].map((platform, i) => (
                    <motion.li
                      key={i}
                      className="w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[linear-gradient(to_bottom,_#242424,_#2E2E2E00)] p-2"
                      variants={itemVariants}
                      transition={transition}
                    >
                      <Link href="/">
                        <Image
                          src={`/${platform}.svg`}
                          width={24}
                          height={24}
                          alt={platform}
                        />
                      </Link>
                    </motion.li>
                  ))}
                </motion.div>
              </motion.div>
            </motion.ul>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default DesktopMenu