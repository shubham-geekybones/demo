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
            <div className='w-full flex justify-between items-center flex-wrap rounded-lg padding-contact'>
                <div className='contact-form-download' >
                    <div className='bg-curve-shape'>
                        <ContactUS />
                    </div>
                </div>
                <div className='office-contact'>
                    <div className='rightHalf'>
                        <video className='background-video'
                            loop
                            autoPlay
                            muted>
                            <source src="contact-us.mp4" type="video/mp4" />
                        </video>
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
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center p-10'>
                <div className='product-offerings-text text-center'>
                    <p>
                        Downloadable Deal Sheet
                    </p>
                </div>
                <p className='text-center product-offerings'>
                    We trade in liquid and dry bulk commodities as per our product offerings.
                </p>
                <Button className="download-button" shape="round" type="primary" icon={<DownloadOutlined className='mr-1'/>} size={size}>
                   <a href='assets/deal-sheet.docx' download>Download Deal Sheet</a>
                </Button>
            </div>
        </section>
    );
};

export default ContactUs;
