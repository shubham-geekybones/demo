'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { constantsUs, exploreWorlds } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const ContactUs = () => {
    const [active, setActive] = useState('world-2');

    return (
        <section id="explore" className='contact-us-section'>
            <video className='background-video w-full object-cover'
                loop
                autoPlay
                muted>
                <source src="contact-us.mp4" type="video/mp4" />
            </video>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} absolute mx-auto h-full flex flex-col contact-us`}
            >
                <div className="flex justify-center items-center lg:flex-row h-full flex-wrap gap-8">
                    {constantsUs.map((details, index) => (
                        <motion.div
                            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                            className={`relative flex items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
                        >
                            <div className='contact-us card '>
                                <p>{details.country}</p>
                                <p>{details.branch}</p>
                                <p>{details.phoneNo}</p>
                                <p>{details.emailId}</p>
                                <p>{details.block}</p>
                                <p>{details.area}</p>
                                <p>{details.pincode}</p>
                            </div>
                        </motion.div>
                        // <ExploreCard
                        //   key={world.id}
                        //   {...world}
                        //   index={index}
                        //   active={active}
                        //   handleClick={setActive}
                        // />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;
