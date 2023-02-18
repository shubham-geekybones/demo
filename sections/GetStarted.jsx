'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 who-we-are`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`md:flex-1 ${styles.flexCenter}`}
      >
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <div className='border'></div>
        <TitleText title={<>Who We Are</>} />

        <div className="mt-[31px] text-white text-[24px] flex flex-col max-w-[370px] gap-[24px]">
          We are a global commodity trading and related-asset investment company.
        </div>
        <button className='learn-more p-3 mt-6 rounded bg-blue-500 hover:bg-blue-400 text-white 
        focus:shadow-outline font-bold cursor-pointer focus:outline-none'>
          <TypingText title="LEARN MORE" fontSize="text-[18px]"/>
        </button>
        
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
