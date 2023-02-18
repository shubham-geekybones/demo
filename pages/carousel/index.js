import React from 'react'
import { TitleText, TypingText } from '../../components'
import { Carousel } from './carousel'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
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
                    className={`${styles.innerWidth} text-center mx-auto ${styles.flexCenter} flex-col`}
                >
                    <TitleText className={`text-center`} title={<>Global presence in mature
                        and emerging markets</>} />
                    <TypingText title="Learn more about Montfort" />
                </motion.div>
            </div>
        </div>
    )
}

export default CarouselMain