import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';




export default function LeftSide() {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className=' h-full flex flex-col items-center justify-end cursor-pointer gap-2 '>
            <div className='flex flex-col gap-2 '>
                <a href='https://www.linkedin.com/in/noordibou/' target='_blank'>
                    <span className='w-10 h-10 inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <BsGithub size={24} />
                    </span>
                </a>
                <a href='https://www.linkedin.com/in/noordibou/' target='_blank'>
                    <span className='w-10 h-10 inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <FiLinkedin size={24} />
                    </span>
                </a>
            </div>
            <div className='w-[2px] h-44 bg-textDark' />
        </motion.div>
    )
}
