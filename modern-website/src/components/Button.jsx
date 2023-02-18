import React from 'react'

const Button = ({styles}) => {
    return (
        <button type='button' className={`bg-blue-gradient px-6 py-4 rounded-lg font-poppins font-medium text-[18px] outline-none ${styles}`}>Get Started</button>
    )
}

export default Button
