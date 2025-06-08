import Image from 'next/image'
import React from 'react'
import { useMenu } from '../context/MenuContext'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
}

const Navbar = () => {
  const { handleToggle, open, setOpen } = useMenu()

  const handleLogoClick = () => {
    if (open) setOpen(false)
  }

  const renderToggleButton = (isDesktop: boolean) => (
    <div
      onClick={handleToggle}
      className={`cursor-pointer w-[50px] h-[50px] rounded-full bg-[rgba(255,255,255,0.1)] ${
        isDesktop ? 'hidden lg:flex' : 'lg:hidden flex'
      } flex-col gap-3 justify-center items-center`}
    >
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.div
            key="hamburger"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={iconVariants}
            transition={{ duration: 0.3 }}
            className='flex flex-col gap-1'
          >
            <Image
              src="/hambuger_menu.svg"
              width={isDesktop ? 40 : 30}
              height={isDesktop ? 40 : 30}
              alt="menu"
              className="px-1"
            />
            <Image
              src="/hambuger_menu.svg"
              width={isDesktop ? 40 : 30}
              height={isDesktop ? 40 : 30}
              alt="menu"
              className="px-1"
            />
          </motion.div>
        ) : (
          <motion.div
            key="cancel"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={iconVariants}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/menu_cancel.png"
              width={isDesktop ? 40 : 30}
              height={isDesktop ? 40 : 30}
              alt="cancel"
              className="p-2"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <nav className="z-50 w-full flex justify-between rounded-[10px] items-center bg-[rgb(255,255,255,0.06)] px-2 py-3 lg:h-[90px] lg:px-6">
      <Link href="/" className="relative z-50" onClick={handleLogoClick}>
        <Image
          src="/otb_over_the_board_logo.svg"
          width={300}
          height={300}
          alt="OTB"
          className="hidden shadow opacity-100 -ml-14 lg:block cursor-pointer z-50"
        />
        <Image
          src="/otb_logo.svg"
          width={100}
          height={100}
          alt="OTB"
          className="lg:hidden opacity-100 cursor-pointer z-50"
        />
      </Link>

      <div className="flex items-center gap-2 lg:gap-[33px]">
        <button className="primary-btn cursor-pointer text-[18px] font-[500] leading-100%[] text-center rounded-[20px] lg:rounded-[40px] h-[40px] lg:h-[50px] px-4 lg:w-[166px]">
          Get in touch
        </button>

        {/* Desktop Toggle Button */}
        {renderToggleButton(true)}

        {/* Mobile Toggle Button */}
        {renderToggleButton(false)}
      </div>
    </nav>
  )
}

export default Navbar



          {/* <Image 
            src='/otbPNG.png' 
            width={100} 
            height={100} 
            alt='OTB' 
            className='hidden shadow opacity-100 lg:block cursor-pointer z-50'
          /> */}