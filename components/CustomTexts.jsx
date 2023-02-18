'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles,fontSize }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal ${fontSize ? fontSize : 'text-[24px]'} text-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles,fontSize }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] ${fontSize ? fontSize : "md:text-[54px] text-[40px]"} text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
