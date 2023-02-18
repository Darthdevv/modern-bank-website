import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
    return (
        <div className={`group ${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:bg-primary`}>
            <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full  bg-primary  hover:bg-gradient-to-b from-[#bef3f5]  via-[#7de7eb]  to-[#33bbcf]`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className='font-poppins font-medium text-[18px] leading-[23px] mr-1'>
                        <span className='text-white group-hover:invert'>Get</span>
                    </p>
                        <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain group-hover:invert' />
                </div>
                <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                        <span className='text-white group-hover:invert'>Started</span>
                </p>
            </div>
        </div>
    )
}

export default GetStarted
