import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { useInView } from 'react-intersection-observer';

interface ScrollSectionProps {
  children: React.ReactNode;
}

function ScrollSection({ children }: ScrollSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8
  });

  return (
    <div
      ref={ref}
      style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s' }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className='relative max-w-contentContainer mx-auto top-44 md:top-60 py-8 lgl:py-32 mdl:py-24 flex flex-col gap-20'>
    <ScrollSection>
      <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}>
        < Section title="About" />
        <div className='flex flex-col lgl:flex-row gap-10 '>
          <div>
            <h4 className='text-xl md:text-2xl py-8 font-titleFont text-textLight'>Here you will learn {''}
              <span className='underline decoration-textBright/50'>more</span> {''} about me </h4>
            <p className='text-xs md:text-lg font-titleFont text-[#1d1f0c] font-semibold'>I started my career studying biochemistry. I&apos;ve always been fascinated by the molecular foundations of life and nature. But over time, I realized I also have a passion for programming. So I made the switch to software engineering, while still holding onto my love of science.
              <br></br>
              <br></br>

              My background in biochemistry gave me an appreciation for the complex balance of systems in our natural world. I care deeply about issues like climate change, pollution, conservation, and animal welfare. As a software engineer now, I&apos;m motivated to use my skills to make a positive difference on these causes.
              <br></br>
              <br></br>
              There are so many ways technology can empower people and organizations to create change. I get really excited when I can build apps, platforms and tools that promote sustainability, environmental education, animal rights, or improve people&apos;s life in general. My goal is to collaborate with others to develop innovative solutions that speak to my values.
              <br></br>
              <br></br>
              I believe technology and environmentalism go hand in hand. By bringing together people from different backgrounds, we can harness the power of software for good. I'm always eager to brainstorm new ideas, let me know if you have any projects in mind where we could apply technology to benefit the planet and its inhabitants..
            </p>
          </div>
        </div>
      </motion.div>
    </ScrollSection>
    </div>
  )
}
