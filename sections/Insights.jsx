'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText } from '../components';

const Insights = () => (
  <section className={`relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto justify-center items-center flex flex-col how-we-operate`}
    >
      <div className="flex flex-col justify-center items-center gap-[15px] p-5 md:px-[150px]">
        <div className='border'></div>
        <TitleText className={`text-center`} title={<>How We Operate</>} />
        <TitleText
          className={`text-center`}
          fontSize="text-[18px] md:text-[24px]"
          title={<>Our business operates within an integrated ESG Management Framework, acknowledging the enduring consequences our choices can have on individuals, societies, and the natural world.</>} />

      </div>
    </motion.div>
  </section>
);

export default Insights;
