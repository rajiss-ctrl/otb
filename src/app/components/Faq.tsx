'use client'
import React, { useState } from "react";
import { faqData } from "../data/faqData";
import Image from "next/image";

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative pt-24 lg:py-[100px] bg-[#61004B] rounded-t-[40px] lg:rounded-t-[100px] text-white px-4 lg:px-[250px]">
          <Image src="/faq_flower.svg" width={100} height={100} alt="flower" className="absolute -left-1 lg:left-52 top-[18%] lg:top-[15%]"/>
          <Image src="/oval.svg" width={200} height={200} alt="oval otb" className="absolute hidden lg:block right-40 bottom-[15%]"/>
          <Image src="/oval.svg" width={150} height={150} alt="oval otb" className="absolute lg:hidden right-4 bottom-0"/>
      <h2 className="text-xl lg:text-4xl text-center font-bold mb-10 leading-[100%]">Frequently Asked Questions</h2>
      <div className="text-white pb-24">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-[rgba(119,128,139,0.9)] pb-4  bg-white/5 backdrop-blur-md">
            <button
              className="flex justify-between items-center w-full text-left p-4 lg:py-8 lg:px-[40px] cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
                <div className="flex items-center gap-[22px]">
                    <div className="w-[30px] h-[30px] rounded-[10px] flex justify-center items-center bg-[linear-gradient(to_bottom,_#242424,_#2E2E2E00)]">
                        {item.num}
                    </div>
                <h3 className="text-[12px] lg:text-[28px] leading-[100%] font-semibold">{item.question}</h3>
                </div>
              <span className="text-2xl font-bold">
                {openIndex === index ? <Image src="/times.svg" width={20} height={20} alt="cancel"/> : <Image src="/plus.svg" width={20} height={20} alt="plus"/>}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-[#E6E6E6CC] text-[8px] lg:text-[18px] font-light leading-[150%] lg:leading-[100%] mt-2 transition-all duration-300 ease-in-out pl-16 lg:px-[90px]">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
