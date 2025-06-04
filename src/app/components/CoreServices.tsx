import Image from 'next/image'
import React from 'react'

const CoreServices = () => {
  return (
    <section className='relative bg-[rgba(3,1,93,1)] text-white px-[18px] lg:x-0 pb-[70px] lg:pb-[120px] rounded-t-[40px] lg:rounded-t-[100px]'>
        <div className="flex flex-col lg:flex-row justify-between px-[38px] pt-[38px] pb-[50px] lg:px-[100px] lg:pt-[100px] lg:pb-[66px]">
            <h1 className='text-[24px] lg:text-[60px] font-[700] lg:w-1/2 leading-[100%] mb-4  lg;mb-0  lg:pr-8'>Here’s What <br className='lg:hidden'/> We Do Best</h1>
            <p className='text-[14px] lg:text-[22px] font-[400] lg:w-1/2 leading-[100%] lg:pl-24'>Got a wild idea but not sure how to bring it to life? That’s our thing. Strategy, design, development — we’ve got you. Whether you’re starting from scratch or need a serious upgrade, we’re here to make it happen.🚀</p>
        </div>
        <div className="mb-[40px] lg:px-[100px] py-4 lg:py-[30px] flex flex-col lg:flex-row justify-between lg:items-center border-t border-b  border-[rgb(255,255,255,0.8)]">
            <h3 className='text-start text-[20px] lg:text-[40px] pb-2 lg:pb-0 font-[600] leading-[100%] lg:w-[80%]'>Web & App Development</h3>
            <p className='text-start lg:text-end lg:pl- text-[18px] font-light leading-[100%] lg:w-[52%]'>Unlock your digital potential with our cutting-edge web and app development services. From sleek websites to innovative mobile apps</p>
        </div>
        <div className="mb-[40px] lg:px-[100px] py-4 lg:py-[30px] flex flex-col lg:flex-row justify-between lg:items-center border-t border-b  border-[rgb(255,255,255,0.8)]">
            <h3 className='text-start text-[20px] pb-2 lg:pb-0 lg:text-[40px] font-[600] leading-[100%] lg:w-[80%]'>Graphic Design 2D/3D</h3>
            <p className='text-start lg:text-end lg:pl- text-[18px] font-light leading-[100%] lg:w-[52%]'>Ignite your brand’s visual identity with our captivating 2D and 3D graphic designs. Our talented team of artists and designers will craft…</p>
        </div>
        <div className="mb-[40px] lg:px-[100px] py-4 lg:py-[30px] flex flex-col lg:flex-row justify-between lg:items-center border-t border-b  border-[rgb(255,255,255,0.8)]">
            <h3 className='text-start text-[20px] pb-2 lg:pb-0 lg:text-[40px] font-[600] leading-[100%] lg:w-[80%]'>UI/UX Design</h3>
            <p className='text-start lg:text-end lg:pl- text-[18px] font-light leading-[100%] lg:w-[52%]'>Create unforgettable user experiences with our exceptional UI/UX designs. We’ll blend creativity with intuitive interfaces…</p>
        </div>
        <div className="mb-[40px] lg:px-[100px] py-4 lg:py-[30px] flex flex-col lg:flex-row justify-between lg:items-center border-t border-b  border-[rgb(255,255,255,0.8)]">
            <h3 className='text-start text-[20px] pb-2 lg:pb-0 lg:text-[40px] font-[600] leading-[100%] lg:w-[80%]'>Digital Marketing</h3>
            <p className='text-start lg:text-end lg:pl- text-[18px] font-light leading-[100%] lg:w-[52%]'>Rise above the competition and dominate search engine rankings with our expert SEO services. We’ll optimise your website, increase organic…</p>
        </div>
        <div className="mb-[40px] lg:px-[100px] py-4 lg:py-[30px] flex flex-col lg:flex-row justify-between lg:items-center border-t border-b  border-[rgb(255,255,255,0.8)]">
            <h3 className='text-start text-[20px] pb-2 lg:pb-0 lg:text-[40px] font-[600] leading-[100%] lg:w-[80%]'>Custom Web Solutions</h3>
            <p className='text-start lg:text-end lg:pl- text-[18px] font-light leading-[100%] lg:w-[52%]'>Tailor-made for your unique needs, our custom web solutions deliver unmatched functionality and user-centric designs. From e-comm…</p>
        </div>
        <div className="mb-[40px] lg:px-[100px] py-4 lg:py-[30px] flex flex-col lg:flex-row justify-between lg:items-center border-t border-b  border-[rgb(255,255,255,0.8)]">
            <h3 className='lg:text-[40px] text-[20px] font-[600] pb-2 lg:pb-0 leading-[100%] lg:w-[80%]'>IT Consultations</h3>
            <p className='text-start lg:text-end lg:pl- text-[18px] font-light leading-[100%] lg:w-[52%]'>Empower your business with our innovative software designs. Our team of experienced developers will craft customised software…</p>
        </div>
             <Image src='/tiles.svg' width={80} height={80} alt="" className='lg:hidden absolute bottom-4 right-0 '/>
            <Image src='/tiles.svg' width={210} height={210} alt="" className='hidden lg:block absolute -bottom-6 right-[0px]'/>
    </section>
  )
}

export default CoreServices