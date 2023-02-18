import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
    return (
        <section id='product' className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionImgReverse}`}>
                <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
                <div className='absolute z-[3] top-0 white__gradient w-[50%] h-[50%] rounded-full -left-1/2'></div>
                <div className='absolute z-[0] bottom-0 pink__gradient w-[50%] h-[50%] rounded-full -left-1/2'></div>
            </div>

            <div className={`${layout.sectionInfo}`}>
                <h4 className={`${styles.heading2}`}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h4>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                <img className='w-[128px] h-[42px] mr-5 cursor-pointer object-contain ' src={apple} alt="applestore" />
                <img className='w-[128px] h-[42px] cursor-pointer object-contain ' src={ google} alt="googleplay" />
                </div>
            </div>
        </section>
    )
}

export default Billing
