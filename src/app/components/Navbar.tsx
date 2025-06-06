// components/Navbar.tsx
import Image from 'next/image'
import React from 'react'
import { useMenu } from '../context/MenuContext'
import Link from 'next/link'

const Navbar = () => {
  const { handleToggle, open, setOpen } = useMenu()
  
  const handleLogoClick = () => {
    // Close the menu if it's open
    if (open) {
      setOpen(false)
    }
  }

  return (
    <nav className={`z-50 w-full flex justify-between rounded-[10px] items-center bg-[rgb(255,255,255,0.06)] px-4 py-2 lg:py-8 lg:px-8`}>
        <Link 
          href='/' 
          className='relative z-50'
          onClick={handleLogoClick} // Add click handler here
        >
          <Image 
            src='/otb_logo.svg' 
            width={90} 
            height={50} 
            alt='OTB' 
            className='hidden lg:block cursor-pointer z-50'
          />
          <Image 
            src='/otb_logo.svg' 
            width={40} 
            height={50} 
            alt='OTB' 
            className='lg:hidden cursor-pointer z-50'
          />
        </Link>
        <div className="flex items-center gap-2 lg:gap-[33px]">
            <button className='primary-btn cursor-pointer text-center rounded-[20px] lg:rounded-[40px] h-[40px] lg:h-[50px] px-4 lg:w-[166px]'>
              Get in touch
            </button>
            <div 
              onClick={handleToggle} 
              className="hidden lg:flex cursor-pointer w-[50px] h-[50px] rounded-[50%] bg-[rgba(255,255,255,0.1)]  flex-col gap-3 justify-center items-center"
            >
                <Image 
                  src='/hambuger_menu.svg' 
                  width={40} 
                  height={40} 
                  alt='menu' 
                  className={`${!open ? 'block' : 'hidden'}`}
                />
                <Image 
                  src='/hambuger_menu.svg' 
                  width={40} 
                  height={40} 
                  alt='menu' 
                  className={`${!open ? 'block' : 'hidden'}`}
                />
                <Image 
                  src='/menu_cancel.png' 
                  width={40} 
                  height={40} 
                  alt='cancel' 
                  className={`${open ? 'block p-2' : 'hidden'}`}
                />
            </div>
            <div 
              onClick={handleToggle} 
              className="cursor-pointer w-[50px] h-[50px] rounded-[50%] bg-[rgba(255,255,255,0.1)] lg:hidden  flex flex-col gap-3 justify-center items-center"
            >
                <Image 
                  src='/hambuger_menu.svg' 
                  width={30} 
                  height={30} 
                  alt='menu' 
                  className={`${!open ? 'block' : 'hidden'}`}
                />
                <Image 
                  src='/hambuger_menu.svg' 
                  width={30} 
                  height={30} 
                  alt='menu' 
                  className={`${!open ? 'block' : 'hidden'}`}
                />
                <Image 
                  src='/menu_cancel.png' 
                  width={30} 
                  height={30} 
                  alt='cancel' 
                  className={`${open ? 'block p-2' : 'hidden'}`}
                />
            </div>
        </div>
    </nav>
  )
}

export default Navbar