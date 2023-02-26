import React from 'react';
import { TitleText, TypingText } from '../../components';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
import styles from '../../styles';
const CarouselMain = () => {

    return (
        <div className="carousel-container">
            <video className='background-video w-full h-full object-cover'
                loop
                autoPlay
                muted>
                <source src="home.mp4" type="video/mp4" />
            </video>
            <div className={`home-text absolute`}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} text-center ${styles.flexCenter} flex-col section-one-padding`}
                >
                    <TitleText className={`text-center`} title={<>Presence worldwide across both developed and developing markets</>} />
                    <TypingText title="Learn More about Siddhi Global FZCO" />
                </motion.div>
            </div>
        </div>
    )
}

export default CarouselMain;