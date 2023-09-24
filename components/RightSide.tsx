import React from 'react';
import { motion } from 'framer-motion';

export default function RightSide() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className='h-full flex flex-col items-center justify-end cursor-pointer space-y-20  '>

            <a href='mailto:noordibou.nd@gmail.com' target='_blank'>
                <p className='text-sm rotate-90 tracking-wide text-textDark hover:text-textBright cursor-pointer hover:-translate-y-2 transition-all duration-300'>noordibou.nd@gmail.com</p>
            </a>

            <span className='w-[2px] h-24 inline-flex bg-textDark' />

        </motion.div>
    )
}
