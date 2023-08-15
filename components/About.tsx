import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative max-w-contentContainer mx-auto top-36 py-10 lgl:py-32 mdl:py-24 flex flex-col gap-20 '>
      < Section  title="About" />
      <div className='flex flex-col lgl:flex-row gap-20'>
        <div className='w-full lgl:w-2/3 gap-3 px-0 md:px-4 text-base font-medium flex flex-col'>
            <h4 className='text-4xl font-titleFont'>Here you will find {''}
              <span className='underline decoration-textGreen/50'>more</span> {''} information about me </h4>
            <p className='text-xl font-bodyFont text-textDark'> I am a biochemistry-trained software engineer passionate about environmental issues, animal welfare, and sustainability. With a unique combination of scientific expertise and software engineering skills, I’m passionate about developing  innovative solutions that bridge the gap between technology and environmental science. I am driven by the opportunity to make a positive impact by creating software applications and tools that empower individuals, organizations, and institutions to address environmental challenges and promote a more sustainable future.</p>
          </div>
        </div>
    </motion.section>
  )
}