'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto flex flex-col`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative flex w-full h-[100vh]"
      >
        <img src="/assets/images/global.jpg" className="ls-layer w-full h-full object-cover" alt="" decoding="async" ></img>
      </motion.div>
      <div className='absolute bottom-5 p-5 md:px-[100px]'>
        <div className='border'></div>
        <TypingText title="Operating Globally" fontSize={"text-[30px] md:text-[40px] !justify-start"} />
        <TitleText
          title={(
            <>
              Siddhi Global- FZCO has a penetration in the primary trading hubs and financial centres across the globe. Our approach involves forming partnerships and engaging in collaborative efforts with stakeholders worldwide to generate mutually beneficial partnerships.
            </>
          )}
          fontSize="md:text-[24px] text-[18px]"
        />
      </div>
    </motion.div>
  </section>
);

export default World;
