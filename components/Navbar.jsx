'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
   <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
    >
      <img
        src="/logo.png"
        alt="search"
        className="w-[114px] h-[114px] object-contain"
      />
      <ul className='navigation'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
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
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
