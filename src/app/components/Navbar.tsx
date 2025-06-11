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
      className={`cursor-pointer w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.1)] ${
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
    <nav className="z-50 w-full flex justify-between rounded-[8px] lg:rounded-[10px] items-center bg-[rgb(255,255,255,0.06)] h-[60px] lg:h-[90px] pr-3 lg:px-6">
      <Link href="/" className="relative z-50" onClick={handleLogoClick}>
        <Image
          src="/Over the Board Logo2.svg"
          width={280}
          height={280}
          alt="OTB"
          className="hidden shadow opacity-100 lg:block cursor-pointer -ml-[4.4rem] z-50"
        />
        <Image
          src="/Over the Board Logo2.svg"
          width={180}
          height={180}
          alt="OTB"
          className="lg:hidden -ml-9 lg:-ml-0 opacity-100 cursor-pointer z-50"
        />
      </Link>

      <div className="flex items-center gap-4 lg:gap-[33px]">
        <button className="primary-btn cursor-pointer border-[1px] border-[rgba(3,16,247,1)] target_text text-[14px] lg:text-[18px] font-[500] leading-[100%] text-center rounded-[20px] lg:rounded-[40px] lg:h-[50px] py-3 px-4 lg:w-[166px]">
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