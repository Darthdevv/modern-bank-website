import React,{useState} from 'react'
import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle,setToggle]=useState(false)
    return (
        <nav className='w-full items-center flex justify-between py-6 navbar'>
            <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((navLink, index) => (
                    <li key={navLink.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index===navLinks-1? 'mr-0': 'mr-10'} text-white hover:text-secondary`}>
                        <a href={`#${navLink.id}`}>
                            {navLink.title}
                        </a>
                    </li>
                ))}
            </ul>


            <div className='sm:hidden flex justify-end items-center flex-1'>
                <img src={toggle ? close : menu}
                    alt="menu"
                    className='w-[28px] h-[28px] object-contain'
                    onClick={()=>setToggle((prev)=>!prev)}
                />
            </div>

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar` }>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navLinks.map((navLink, index) => (
                    <li key={navLink.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index===navLinks-1? 'mb-0': 'mb-4'} text-white hover:text-secondary`}>
                        <a href={`#${navLink.id}`}>
                            {navLink.title}
                        </a>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
