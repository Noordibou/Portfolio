import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>Here you will find {''}
          <span className='underline decoration-[#F7AB0A]/50'>more</span> {''} information about me </h4>
          <p className='text-base'> I am a biochemistry-trained software engineer passionate about environmental issues, animal welfare, and sustainability. With a unique combination of scientific expertise and software engineering skills, I’m passionate about developing  innovative solutions that bridge the gap between technology and environmental science. I am driven by the opportunity to make a positive impact by creating software applications and tools that empower individuals, organizations, and institutions to address environmental challenges and promote a more sustainable future.</p>
        </div>
        </motion.div>
  )
}