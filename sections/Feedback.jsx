'use client';

import { motion } from 'framer-motion';
import { TitleText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Feedback = () => (
  <section className={`relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 giving-community`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] pl-20 max-w-[550px] flex justify-center flex-col"
      >
         <div className='border'></div>
        <TitleText title={<>Giving In Our Communities</>} />
        <div className="mt-[8px] text-white text-[24px] flex flex-wrap justify-between gap-[24px]">
          We give to reduce poverty. We give to fuel education. We give to empower women.
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
