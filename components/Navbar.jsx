'use client';
import { motion } from 'framer-motion';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  const { pathname, push } = useRouter()
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    if (navOpen === true) {
      setNavOpen(false)
    }
  }, [pathname])

  const iconVariants = {
    opened: {
      rotate: 135,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      top: "-90vh",
    },
  };


  return (
    <div className='bg-primary-black'>
      <motion.nav
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} fixed`}
      >
        <div className="footer-gradient  bg-primary-black" />
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className='flex justify-center items-center text-[#fff] font-bold cursor-pointer' onClick={() => push("/")}>
              <img
                src="/logo.png"
                alt="search"
                className="w-[74px] h-[74px] h:w-[114px] h:h-[114px] object-contain"
              />
              <p className='md:text-[20px] text-[#224283]'>Siddhi Global-FZCO</p>
            </div>

            <div className="flex items-center justify-between flex-wrap z-10 gap-4">
              <motion.ul
                initial={false}
                variants={menuVariants}
                animate={navOpen ? "opened" : "closed"}
                className={`navigation ${navOpen && "active"}`}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/who-we-are">Who we are</Link>
                </li>
                <li>
                  <Link href="/what-we-do">What we do</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </motion.ul>
              <motion.div
                variants={iconVariants}
                animate={navOpen ? "opened" : "closed"}
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer block md:hidden bg-black p-1 rounded-lg"
                onClick={() => setNavOpen(!navOpen)}>
                <img
                  src="/menu.svg"
                  alt="menu"
                  className="w-[24px] h-[24px] object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>

  )
};

export default Footer;
