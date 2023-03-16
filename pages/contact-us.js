'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { constantsUs, exploreWorlds } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space } from 'antd';

import ContactUS from '../components/contact-us';

const ContactUs = () => {
    const [size, setSize] = useState('large');
    return (
        <section id="explore" className='contact-us-section'>
            <video className='background-video object-cover'
                loop
                autoPlay
                muted>
                <source src="contact-us.mp4" type="video/mp4" />
                {/* <ContactUS /> */}
            </video>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} flex justify-around items-center flex-wrap w-screen contact-us-div`}
            >
                <ContactUS />
                {constantsUs.map((details, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                        className={`contact-us card relative flex items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
                    >
                        <p>{details.country}</p>
                        <p>{details.branch}</p>
                        <p>{details.phoneNo}</p>
                        <p>{details.emailId}</p>
                        <p>{details.block}</p>
                        <p>{details.area}</p>
                        <p>{details.pincode}</p>
                    </motion.div>
                ))}

            </motion.div>
                <Button  className="download-button" type="primary" icon={<DownloadOutlined className='mr-1'/>} size={size}>
                   <a href='assets/deal-sheet.docx' download>Download Deal Sheet</a>
                </Button>
            
        </section>
    );
};

export default ContactUs;
