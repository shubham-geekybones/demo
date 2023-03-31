'use client';

import { HomeFilled, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  const { push } = useRouter()
  return (
    <div className='bg-primary-black'>
      <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relativ`}
      >
        <div className="footer-gradient  bg-primary-black" />
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <h4 className="font-bold md:text-[44px] text-[30px] text-white" onClick={() => push("/")}>
              SIDDHI GLOBAL-FZCO
            </h4>

            <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
              <img
                src="/headset.svg"
                alt="headset"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[16px] text-white">
                Enter Siddhi Global-FZCO
              </span>
            </button>
          </div>

          <div className="flex flex-col">
            <div className="mb-[50px] h-[2px] bg-white opacity-10" />
            <div className="flex items-end justify-between flex-wrap gap-4">
              {/* <h4 className="font-extrabold text-[24px] text-white">
                SIDDHI GLOBAL-FZCO
              </h4> */}
              <div className='text-[#fff]'>
                <p className='text-[34px] font-bold'>
                  CONTACT DETAILS
                </p>
                <p className='border-left'></p>
                <div className='font-normal text-[14px] text-white opacity-50'>
                  <p className='flex items-center mt-8'><HomeFilled className='mr-2 mb-[auto]' />DSO-IFZA-21589, IFZA Properties, <br></br>Dubai Silicon Oasis, Dubai, UAE</p>
                  <p className='flex items-center mt-3'><PhoneOutlined className='mr-2' />+971 58814 2255</p>
                  <p className='flex items-center mt-3'><MailOutlined className='mr-2' />rg@siddhi.global</p>
                </div>

              </div>
              <p className="font-normal text-[14px] text-white opacity-50">
                Copyright © 2022 - 2023 Siddhi Global-FZCO. All rights reserved.
                <br></br>
                We keep utmost privacy and confidentiality of any data shared with us
              </p>

              <div className="flex gap-4">
                {socials.map((social) => (
                  <img
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>

  )
};

export default Footer;
