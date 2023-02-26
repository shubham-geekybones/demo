'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 who-we-do`}
    >
      <motion.div
        variants={planetVariants('right')}
        className={`md:flex-1 ${styles.flexCenter}`}
      >
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col p-4"
      >
        <div className='border'></div>
        <TitleText title={<>What We Do</>} />

        <div className="mt-[31px] text-white text-[18px] md:text-[24px] flex flex-col max-w-[370px] gap-[24px]">
          Our global energy supply and transportation services are relied upon by our customers and partners to move a wide range of products safely, efficiently, and responsibly across the world.
        </div>
        <button className='learn-more p-3 mt-6 rounded bg-blue-500 hover:bg-blue-400 text-white 
        focus:shadow-outline font-bold cursor-pointer focus:outline-none'>
          <TypingText title="LEARN MORE" fontSize="text-[18px] w-full" />
        </button>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
