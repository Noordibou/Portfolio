import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
   
    return (
        <header
            // className='sticky top-0 w-full shadow-navbarShadow h-20 lg:h-[12vh] z-50 bg-bodyColor px-4 '>
            className='sticky p-3 flex shadow-navbarShadow bg-bodyColor items-start justify-between lg:h-[12hv] mx-auto z-50 xl:items-center'>
            <motion.div
                initial={{ x: -100, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center'>
                <Link href='#hero'>
                <h1 className='text-4xl lgl:text-5xl font-titleFont  text-textGreen hover:text-textDark cursor-pointer'>ND</h1>
                </Link>
            </motion.div>
            <div className='hidden md:inline-flex items-center space-x-5 px-5'>
                <motion.div
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className='max-w-container h-full mx-auto py-5 font-titleFont flex items-center space-x-5 justify-between uppercase text-textDark cursor-pointer'>
                    <Link className=' hover:text-textGreen' href='#about'> About </Link>
                    <Link className=' hover:text-textGreen' href='#skills'> Skills </Link>
                    <Link className=' hover:text-textGreen' href='#projects' > Projects </Link>
                    <Link className=' hover:text-textGreen' href='#contact' >Contact</Link>
                </motion.div>
                <motion.button
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className='py-2 px-4  font-titleFont rounded-md border border-textGreen hover:bg-hoverColor flex items-center justify-between uppercase text-textDark cursor-pointer'>
                    Resume
                </motion.button>
            </div>
        </header>
    );
}
