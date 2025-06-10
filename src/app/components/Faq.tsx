'use client'
import React, { useState } from "react";
import { faqData } from "../data/faqData";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 lg:py-[100px] bg-[#61004B] rounded-t-[40px] lg:rounded-t-[100px] text-white px-4 lg:px-[250px]">
      <Image src="/faq_flower.svg" width={100} height={100} alt="flower" className="absolute hidden lg:block left-48 top-[20%]" />
      <Image src="/faq_flower.svg" width={70} height={70} alt="flower" className="absolute lg:hidden -left-4  top-[18%]" />
      <Image src="/oval.svg" width={200} height={200} alt="oval otb" className="absolute hidden lg:block right-40 bottom-[2%]" />
      <Image src="/mobile_oval.svg" width={100} height={100} alt="oval otb" className="absolute lg:hidden -right-3 bottom-0" />

      <h2 className="font-bricolage text-[24px] lg:text-[60px] text-center font-bold mb-8 lg:mb-20 leading-[100%]">
        Frequently Asked Questions
      </h2>

      <div className="text-white py-4 lg:py-16 bg-white/5 backdrop-blur-xl">
      <div className="w-full h-[1px] border-b border-[#322130]"></div>
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-[#322130] pb-4 overflow-hidden">
            <button
              className="flex justify-between items-center w-full text-left p-4 lg:py-8 lg:px-[40px] cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="min-w-[40px] lg:min-w-[60px] w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] rounded-[10px] flex justify-center items-center bg-[linear-gradient(to_bottom,_#242424,_#2E2E2E00)]">
                  <span className="text-[16px] lg:text-[24px] font-bold">{item.num}</span>
                </div>
                <h3 className="font-bricolage text-[12px] lg:text-[28px] leading-[100%] font-semibold text-left">{item.question}</h3>
              </div>
              <span className="text-2xl font-bold">
                {openIndex === index ? (
                  <Image src="/times.svg" width={20} height={20} alt="cancel" />
                ) : (
                  <Image src="/plus.svg" width={20} height={20} alt="plus" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="flex gap-4 lg:gap-6">
                    <div className="min-w-[40px] lg:min-w-[60px] flex justify-center">
                      <span className="invisible text-[16px] lg:text-[24px] font-bold">{item.num}</span>
                    </div>
                    <p className="font-inter text-[#E6E6E6CC] text-[14px] lg:text-[18px] font-[400] leading-[150%] lg:leading-[100%] mt-2 px-4 lg:px-10 pb-4">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;