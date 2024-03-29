'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const GetStarted = () => {
  const { push } = useRouter()
  return (
    <section className={`relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex justify-end items-center gap-8 who-we-are`}
      >
        <motion.div className='px-[10px] mr-[20px] md:mr-[100px]'>
          <div className='border'></div>
          <TitleText title={<>Who We Are</>} />

          <div className="mt-[31px] text-white text-[18px] md:text-[24px] flex flex-col max-w-[370px] gap-[24px]">
          We are engaged in commodity trading with financial muscle in terms of Trade and Structured Finance.
          </div>
          <button className='relative learn-more p-3 mt-6 rounded bg-blue-500 hover:bg-blue-400 text-white 
        focus:shadow-outline font-bold cursor-pointer focus:outline-none'>
            <TypingText onClick={() => push("/who-we-are")} title="LEARN MORE" fontSize="text-[18px] w-full" />
          </button>

        </motion.div>
      </motion.div>
    </section>
  )
};

export default GetStarted;
