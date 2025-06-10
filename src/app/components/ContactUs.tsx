'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormData {
  fullName: string
  email: string
  contactReasons: {
    webDesign: boolean
    collaboration: boolean
    mobileAppDesign: boolean
    others: boolean
  }
  message: string
}

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>()

  const [disabledCheckboxes, setDisabledCheckboxes] = useState(false)
  const contactReasons = watch('contactReasons')

  const handleCheckboxChange = (name: keyof FormData['contactReasons']) => {
    const currentValue = contactReasons?.[name] || false
    const newValue = !currentValue
    
    // Reset all checkboxes first
    setValue('contactReasons.webDesign', false)
    setValue('contactReasons.collaboration', false)
    setValue('contactReasons.mobileAppDesign', false)
    setValue('contactReasons.others', false)
    
    // Set the clicked checkbox to its new value
    setValue(`contactReasons.${name}`, newValue)
    
    // Enable/disable other checkboxes based on whether one is checked
    setDisabledCheckboxes(newValue)
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
  try {
    console.log('Form data:', data)
    toast.success('Form submitted successfully!')
  } catch (error) {
    toast.error(`Something went wrong. Please try again. ${error}`)
  }
}


  return (
    <section className='relative bg-[rgba(0,0,0,1)] lg:static px-4 py-8 lg:py-[118px] lg:px-[100px] text-white'>
      <div className="relative z-50 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[45%] flex flex-col justify-between">
          <div className="">
            <h4 className='font-bricolage text-[24px] lg:text-[60px] font-[700] leading-[100%] mb-[7px] lg:mb-[21px]'>Contact us</h4>
            <p className='font-inter mb-[20px] lg:mb-0 lg:text-[20px] text-[#FFFFFFA8] font-[300] leading-[120%]'>Prepared to boost your IT systems to the next level? Leverage the unmatched knowledge of experts who effortlessly advance your operations. Together, we&apos;ll optimize your tech capabilities. Seize this chance today!</p>
          </div>
          <Image src="/tiles.svg" width={300} height={300} alt="" className='hidden z-0 lg:block'/>
          <Image src="/tiles.svg" width={80} height={80} alt="" className='absolute bottom-14 -left-4 z-0 lg:hidden'/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="border z-50 border-[#262626] py-[16.12px] rounded-[10px] px-[20px] lg:p-[40px]">
          <div className="flex flex-col lg:flex-row gap-[30px] pb-[30px]">
            <div className="bg-[#262626] lg:py-[22px] p-[25px] lg:px-[40px] rounded-[8px] w-full">
              <p className='font-bricolage lg:text-[22px] font-[600] leading-[100%]'>Full Name</p>
              <input 
                type="text" 
                placeholder='Type here' 
                className='mt-[20px] p-1 rounded-[4px] focus:outline-none focus:ring-0 focus:border-transparent border-b border-[#656567] w-full bg-transparent' 
                {...register('fullName', { required: 'Full name is required' })}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
            </div>
            <div className="bg-[#262626] lg:py-[22px] p-[25px] lg:px-[40px] rounded-[8px] w-full">
              <p className='font-bricolage lg:text-[22px] font-[600] leading-[100%]'>Email</p>
              <input 
                type="email" 
                placeholder='Type here'  
                className='mt-[20px] p-1 rounded-[4px] focus:outline-none focus:ring-0 focus:border-transparent border-b border-[#656567] w-full bg-transparent'
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>
          <div className="bg-[#262626] p-[25px] lg:p-[40px] mb-[30px] rounded-[8px]">
            <h4 className='font-bricolage lg:text-[22px] font-[600] leading-[100%]'>Why are you contacting us?</h4>
            <div className="grid grid-cols-2 gap-4 mt-[30px]">
              <div className="flex items-center gap-1">
                <input 
                  type="checkbox" 
                  id="webDesign"
                  className="appearance-none w-5 h-5 bg-[#333333] checked:bg-[#333333] border border-gray-500 rounded-sm checked:after:content-['✓'] checked:after:text-[#3a44ff] checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center"
                  checked={contactReasons?.webDesign || false}
                  onChange={() => handleCheckboxChange('webDesign')}
                  disabled={disabledCheckboxes && !contactReasons?.webDesign}
                />
                <label htmlFor="webDesign" className='font-inter font-[400] text-[12px] lg:text-[18px] leading-[100%]'>Web Design</label>
              </div>
              <div className="flex items-center gap-1">
                <input 
                  type="checkbox" 
                  id="collaboration"
                  className="appearance-none w-5 h-5 bg-[#333333] checked:bg-[#333333] border border-gray-500 rounded-sm checked:after:content-['✓'] checked:after:text-[#3a44ff] checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center"
                  checked={contactReasons?.collaboration || false}
                  onChange={() => handleCheckboxChange('collaboration')}
                  disabled={disabledCheckboxes && !contactReasons?.collaboration}
                />
                <label htmlFor="collaboration" className='font-inter font-[400] text-[12px] lg:text-[18px] leading-[100%]'>Collaboration</label>
              </div>
              <div className="flex items-center gap-1">
                <input 
                  type="checkbox" 
                  id="mobileAppDesign"
                  className="appearance-none w-5 h-5 bg-[#333333] checked:bg-[#333333] border border-gray-500 rounded-sm checked:after:content-['✓'] checked:after:text-[#3a44ff] checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center"
                  checked={contactReasons?.mobileAppDesign || false}
                  onChange={() => handleCheckboxChange('mobileAppDesign')}
                  disabled={disabledCheckboxes && !contactReasons?.mobileAppDesign}
                />
                <label htmlFor="mobileAppDesign" className='font-inter font-[400] text-[12px] lg:text-[18px] leading-[100%]'>Mobile App Design</label>
              </div>
              <div className="flex items-center gap-1">
                <input 
                  type="checkbox" 
                  id="others"
                  className="appearance-none w-5 h-5 bg-[#333333] checked:bg-[#333333] border border-gray-500 rounded-sm checked:after:content-['✓'] checked:after:text-[#3a44ff] checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center"
                  checked={contactReasons?.others || false}
                  onChange={() => handleCheckboxChange('others')}
                  disabled={disabledCheckboxes && !contactReasons?.others}
                />
                <label htmlFor="others" className='font-inter font-[400] text-[12px] lg:text-[18px] leading-[100%]'>Others</label>
              </div>
            </div>
          </div>
          <div className="bg-[#262626]/80 p-[25px] lg:p-[40px] mb-[30px] rounded-[8px]">
            <h4 className='mb-[20px] font-bricolage lg:text-[22px] font-[600] leading-[100%]'>Your Message</h4>
            <span className='text-[#656567]'>Type Here</span>
            <div className="w-full h-[1px] bg-[#333333]"></div>
            <textarea 
              className='w-full focus:outline-none focus:ring-0 focus:border-transparent lg:h-100px bg-transparent'
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            <div className="w-full h-[1px] bg-[#333333]"></div>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>
          <div className="flex justify-center items-center">
            <button type="submit" className="primary-btn shadow-2xl py-2 px-8 rounded-[40px] text-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactUs