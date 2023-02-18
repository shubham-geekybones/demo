'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import {TitleText } from '../components';

const Insights = () => (
  <section className={`relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto justify-center items-center flex flex-col how-we-operate`}
    >
      <div className="flex flex-col justify-center items-center gap-[15px] ">
        <div className='border'></div>
        <TitleText className={`text-center`} title={<>How We Operate</>} />
        <div className="mt-[5px] text-white text-center text-[24px] flex flex-col max-w-[550px] gap-[24px]">
          We conduct business under an integrated ESG Management Framework because we recognize the long-lasting impact our decisions have on people, communities, and the environment.
        </div>
      </div>
    </motion.div>
  </section>
);

export default Insights;
