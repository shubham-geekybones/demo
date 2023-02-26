'use client';
import { motion } from 'framer-motion';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  const { pathname } = useRouter()
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
        className={`${styles.xPaddings} relative`}
      >
        <div className="footer-gradient  bg-primary-black" />
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <img
              src="/logo.png"
              alt="search"
              className="w-[74px] h-[74px] h:w-[114px] h:h-[114px] object-contain"
            />
            <div className="flex items-center justify-between flex-wrap z-10 gap-4">
              <motion.ul
                initial={false}
                variants={menuVariants}
                animate={navOpen ? "opened" : "closed"}
                className={`navigation ${navOpen && "active"}`}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                {/* <li>
                  <Link href="/about">We are Riverdale</Link>
                </li>
                <li>
                  <Link href="/our-business">Our Business</Link>
                </li>
                <li>
                  <Link href="/what-is-value">What we value</Link>
                </li>
                <li>
                  <Link href="/meet-our-team">Meet our team</Link>
                </li> */}
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </motion.ul>
              <motion.div
                variants={iconVariants}
                animate={navOpen ? "opened" : "closed"}
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer block md:hidden"
                onClick={() => setNavOpen(!navOpen)}>
                <img
                  src="/menu.svg"
                  alt="menu"
                  className="w-[24px] h-[24px] object-contain"
                />
              </motion.div>
            </div>
          </div>
          <div className="h-[2px] bg-white opacity-10" />
        </div>
      </motion.nav>
    </div>

  )
};

export default Footer;
