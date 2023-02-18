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
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="https://mont-fort.com/wp-content/uploads/2021/08/slider_new_map.png" className="ls-layer w-full h-full object-cover" alt="" decoding="async" loading="lazy"
          data-ls="durationin:1500;easingin:easeOutQuint;scalexin:3;scaleyin:3;transformoriginin:50% 50% -500px;durationout:1500;scalexout:0.5;scaleyout:0.5;parallax:true;parallaxlevel:10;"
          srcset="https://mont-fort.com/wp-content/uploads/2021/08/slider_new_map-200x130.png 200w, https://mont-fort.com/wp-content/uploads/2021/08/slider_new_map-300x195.png 300w, https://mont-fort.com/wp-content/uploads/2021/08/slider_new_map-400x260.png 400w, https://mont-fort.com/wp-content/uploads/2021/08/slider_new_map-600x390.png 600w, https://mont-fort.com/wp-content/uploads/2021/08/slider_new_map-768x499.png 768w, https://mont-fort.com/wp-content/uploads/2021/08/slider_new_map-800x520.png 800w, https://mont-fort.com/wp-content/uploads/2021/08/slider_new_map.png 1005w" data-ls-slidein="1" data-ls-slideout="1" data-ls-active=""></img>
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

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
      <div className='absolute bottom-5'>
        <div className='border'></div>
        <TypingText title="Operating Globally" fontSize={"text-[40px]"} />
        <TitleText
          title={(
            <>
              Montfort is established in the world’s major trade hubs and financial markets. We build partnerships and work
              collaboratively with stakeholders worldwide to create shared value.
            </>
          )}
          fontSize="md:text-[24px] text-[28px]"
        />
      </div>
    </motion.div>
  </section>
);

export default World;
