'use client';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';
import { useRouter } from 'next/router';

const WhatsNew = () => {
  const { push } = useRouter()
  return (
    <section className={`relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`w-full mx-auto flex items-center justify-end who-we-do`}
      >
        <motion.div
          className="px-[10px] mr-[20px] md:mr-[100px]"
        >
          <div className='border'></div>
          <TitleText title={<>What We Do</>} />

          <div className="mt-[31px] text-white text-[18px] md:text-[24px] flex flex-col max-w-[370px] gap-[24px]">
            Having worldwide penetration in Trade and expertise in Structured Finance, we facilitate trading opportunities across the globe.<br></br>We trade in liquid and dry bulk commodities as per our product offering
          </div>
          <div className='flex flex-col'>
            <button onClick={() => push('/what-we-do')} className='learn-more p-3 mt-6 rounded bg-blue-500 hover:bg-blue-400 text-white 
        focus:shadow-outline font-bold cursor-pointer focus:outline-none'>
              <TypingText title="TRADE AND STRUCTURED FINANCE" fontSize="text-[18px] w-full" />
            </button>
            <button onClick={() => push('/what-we-do?product=offering',"/what-we-do")} className='learn-more p-3 mt-6 rounded bg-blue-500 hover:bg-blue-400 text-white 
        focus:shadow-outline font-bold cursor-pointer focus:outline-none'>
              <TypingText title="PRODUCT OFFERING" fontSize="text-[18px] w-full" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhatsNew;
