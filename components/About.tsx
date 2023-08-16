import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

export default function About() {
  return (
    <section
      className='relative max-w-contentContainer mx-auto top-36 py-10 lgl:py-32 mdl:py-24 flex flex-col gap-20 '>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
      < Section  title="About" />
      <div className='flex flex-col lgl:flex-row gap-10'>
        <div>
        {/* <div className='w-full lgl:w-2/3 gap-3 px-0 md:px-4 text-base font-medium flex flex-col'> */}
            <h4 className='text-4xl py-8 font-titleFont'>Here you will find {''}
              <span className='underline decoration-textGreen/50'>more</span> {''} information about me </h4>
            <p className='text-xl font-bodyFont text-textDark'> Hello there! I&apos;m a dedicated software engineer who brings a strong foundation in biochemistry to the table. My heart beats for pressing environmental matters, animal welfare, and the drive toward sustainability. What sets me apart is the fusion of my scientific know-how and software engineering finesse, igniting a passion for crafting inventive remedies that marry technology and environmental science seamlessly. The thrill of the journey lies in my aspiration to instigate positive change, achieved through the creation of software applications and tools. These tools serve as a conduit, linking pioneering technology with the urgent needs of our environment. I find my purpose in propelling individuals, organizations, and institutions to tackle environmental hurdles head-on, paving the way for a world that thrives sustainably.</p>
          </div>
        </div>
          </motion.div>
    </section>
  )
}