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
        < Section title="About" />
        <div className='flex flex-col lgl:flex-row gap-10'>
          <div>
            {/* <div className='w-full lgl:w-2/3 gap-3 px-0 md:px-4 text-base font-medium flex flex-col'> */}
            <h4 className='text-xl md:text-2xl py-8 font-titleFont'>Here you will find {''}
              <span className='underline decoration-textGreen/50'>more</span> {''} information about me </h4>
            <p className='text-xs md:text-lg font-bodyFont text-textDark'>I started out studying biochemistry in college. I&apos;ve always loved learning how the natural world works on a molecular level. But I also realized I have a knack for programming and software engineering.
              <br></br>
              <br></br>

              Over the years, my passion for environmental sustainability has grown. I think my science background gave me an appreciation for the intricate balance of our ecosystems. I care deeply about issues like climate change, pollution, and habitat destruction. I also love animals and think we need to treat them more humanely.
              <br></br>
              <br></br>
              As a software engineer now, I&apos;m motivated to use my skills to make a positive difference. There are so many ways technology can help promote sustainability, environmental education, conservation, and animal welfare. My goal is to develop innovative solutions that speak to my values. I get really excited when I can create apps, tools and platforms that empower people and organizations to create change.
              <br></br>
              <br></br>
              I believe technology and environmentalism go hand in hand. There&apos;s so much potential when people from different backgrounds come together. I&apos;m always eager to collaborate and brainstorm new ideas. So let me know what projects we could work on together to make this world a little greener?
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}