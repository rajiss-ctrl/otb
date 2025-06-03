import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between rounded-[10px] items-center bg-[rgb(255,255,255,0.06)] py-8 px-8'>
        <Image src='/otb_logo.svg' width={90} height={50} alt='OTB'/>
        <div className="flex items-center gap-[33px]">
            <button className='primary-btn text-center rounded-[40px] h-[50px] w-[166px]'>Get in touch</button>
            <div className="w-[50px] h-[50px] rounded-[50%] bg-[rgba(255,255,255,0.1)] flex flex-col gap-3 justify-center items-center ">
                <Image src='/hambuger_menu.svg' width={40} height={40} alt='menu'/>
                <Image src='/hambuger_menu.svg' width={40} height={40} alt='menu'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar