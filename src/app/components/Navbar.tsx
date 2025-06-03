import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between rounded-[10px] items-center bg-[rgb(255,255,255,0.06)] px-4 py-2 lg:py-8 lg:px-8'>
        <Image src='/otb_logo.svg' width={90} height={50} alt='OTB' className='hidden lg:block'/>
        <Image src='/otb_logo.svg' width={40} height={50} alt='OTB' className='lg:hidden'/>
        <div className="flex items-center gap-[33px]">
            <button className='primary-btn text-center rounded-[20px] lg:rounded-[40px] h-[40px] lg:h-[50px] px-4 lg:w-[166px]'>Get in touch</button>
            <div className="w-[50px] h-[50px] rounded-[50%] bg-[rgba(255,255,255,0.1)] flex flex-col gap-3 justify-center items-center ">
                <Image src='/hambuger_menu.svg' width={40} height={40} alt='menu'/>
                <Image src='/hambuger_menu.svg' width={40} height={40} alt='menu'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar