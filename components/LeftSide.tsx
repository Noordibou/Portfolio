import React from 'react';
import {BsGithub} from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';




export default function LeftSide() {
    return (
        <div className='relative top-0 left-0 h-full flex flex-col items-center justify-end p-2 cursor-pointer'>
            <div className='flex flex-col space-y-2'>
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
            <div className='w-[2px] h-56  bg-textDark'/>
        </div>
    )
}
