'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto flex flex-col`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="https://mont-fort.com/wp-content/uploads/2021/08/slider_new_map.png" className="ls-layer w-full h-full object-cover" alt="" decoding="async" loading="lazy"
          data-ls="durationin:1500;easingin:easeOutQuint;scalexin:3;scaleyin:3;transformoriginin:50% 50% -500px;durationout:1500;scalexout:0.5;scaleyout:0.5;parallax:true;parallaxlevel:10;"
          data-ls-slidein="1" data-ls-slideout="1" data-ls-active=""></img>

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[35%] w-[65px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
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
