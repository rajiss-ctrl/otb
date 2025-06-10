import Image from 'next/image'
import React from 'react'
import { coreServicesTexts } from '../data/coreServicesContent'


const CoreServices = () => {
  return (
    <section className='relative bg-[rgba(3,1,93,1)] text-white px-[18px] lg:x-0 pb-[70px] lg:pb-[120px] rounded-t-[40px] lg:rounded-t-[100px]'>
      <div className="flex flex-col lg:flex-row justify-between px-[38px] pt-[38px] pb-[50px] lg:px-[100px] lg:pt-[100px] lg:pb-[66px]">
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
        <div key={index} className="mb-[40px]  py-4 lg:py-[30px] flex flex-col lg:flex-row justify-between lg:items-center border-t border-b  border-[rgb(255,255,255,0.8)]">
          <h3 className='font-bricolage text-start text-[20px] pb-2 lg:pb-0 lg:text-[40px] font-[600] leading-[100%] lg:pl-[100px] lg:w-[80%]'>
            {service.title}
          </h3>
          <p className='font-inter text-start lg:text-end lg:pl- text-[18px] font-[400] leading-[100%] lg:pr-[100px] lg:w-[52%]'>
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
