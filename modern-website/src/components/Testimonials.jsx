import React from 'react'
import { feedback } from '../constants'
import styles, { layout } from '../style'
import FeedbackCard from './FeedbackCard'


const Testimonials = () => {
    return (
        <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}>
            <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] blue__gradient rounded-full'/>
            <div className=' w-full relative z-[1] flex md:flex-row flex-col justify-between items-center sm:mb-16px mb-6'>
                <h4 className={`${styles.heading2}`}>What people are <br className='sm:block hidden' /> saying about us</h4>
                <div className='w-full md:mt-0 mt-6'>
                <p className={`${styles.paragraph} text-left max-w-[450px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
            </div>

            <div className={`${layout.sectionImg} flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]`}>
                {feedback.map((feed, index) => (
                    <FeedbackCard
                        key={feed.id}
                        {...feed}
                        index={index}
                    />
                ))}
            </div>

        </section> 
    )
}

export default Testimonials
