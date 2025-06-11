import Image from 'next/image'
import React from 'react'
import { coreServicesTexts } from '../data/coreServicesContent'


const CoreServices = () => {
  return (
    <section className='relative bg-[rgba(3,1,93,1)] text-white px-[18px] lg:px-0 pb-[70px] lg:pb-[120px] rounded-t-[40px] lg:rounded-t-[100px]'>
      <div className="flex flex-col lg:flex-row justify-between px-[38px] pt-[38px] pb-[50px] lg:px-[80px] xl:px-[100px] lg:pt-[100px] lg:pb-[66px]">
        <h1 className='font-bricolage text-[24px] lg:text-[60px] font-[700] lg:w-1/2 leading-[100%] mb-4  lg;mb-0  lg:pr-8'>
          {coreServicesTexts.heading.split(" ").map((word, idx) => (
            <React.Fragment key={idx}>
              {word === "We" ? <><br className='lg:hidden' />{} {word}</> : `  ${word}`}
            </React.Fragment>
          ))}
        </h1>
        <p className='font-bricolage lg:text-[22px] font-[400] lg:w-1/2 leading-[100%] lg:pl-24'>
          {coreServicesTexts.description}
        </p>
      </div>

          {coreServicesTexts.services.map((service, index) => (
            <div 
              key={index} 
              className="group relative mb-[40px] cursor-pointer py-4 lg:py-[30px] flex flex-col lg:flex-row justify-between lg:items-center border-t border-b border-[rgb(255,255,255,0.8)] hover:border-transparent transition-all duration-300"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[rgba(255,255,255,0.5)] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              
              <div className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 w-24 h-24 lg:w-32 lg:h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="20" y="25" width="60" height="40" rx="2" fill="#334155"/>
                  <rect x="25" y="30" width="50" height="30" fill="#1e293b"/>
                  <rect x="30" y="35" width="40" height="20" fill="#0ea5e9"/>
                  <path d="M35 40 L65 40 L50 55 Z" fill="#ffffff"/>
                  <rect x="45" y="65" width="10" height="5" fill="#64748b"/>
                  <rect x="40" y="70" width="20" height="3" fill="#94a3b8"/>
                  <rect x="30" y="75" width="40" height="10" rx="1" fill="#475569"/>
                </svg> */}
                <Image src='/programmer_pc.svg' width={200} height={200} alt='computer'/>
              </div>

              
              <h3 className='font-bricolage text-start text-[20px] pb-2 lg:pb-0 lg:text-[40px] font-[600] leading-[100%] lg:pl-[100px] lg:w-[80%] group-hover:text-gray-800 transition-colors duration-300'>
                {service.title}
              </h3>
              <p className='font-inter text-start lg:text-end lg:pl- text-[18px] font-[400] leading-[100%] lg:pr-[100px] lg:w-[52%] group-hover:text-gray-700 transition-colors duration-300'>
                {service.description}
              </p>
            </div>
          ))}

      <Image src='/tiles.svg' width={80} height={80} alt="" className='lg:hidden absolute bottom-4 right-0' />
      <Image src='/tiles.svg' width={210} height={210} alt="" className='hidden lg:block absolute -bottom-6 right-[0px]' />
    </section>
  )
}

export default CoreServices
