import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/ImageSlider.module.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if(!Array.isArray(slides) || length <= 0){
        return null
    }

    return (
        <section className={styles.slider}>
            <FaArrowAltCircleLeft className={styles["left-arrow"]} onClick={prevSlide}/>
            <FaArrowAltCircleRight className={styles["right-arrow"]} onClick={nextSlide}/>
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? `${styles.slide} ${styles.active}` : `${styles.slide}`} key={index}>
                        {index === current && (<Image src={slide.image} className={styles.image} width={360} height={640} />)}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider;