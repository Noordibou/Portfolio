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
    <ScrollSection>
    <section
      className='relative max-w-contentContainer mx-auto top-36 md:top-60 py-20 lgl:py-32 mdl:py-24 flex flex-col gap-20  '>
      <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}>
        < Section title="About" />
        <div className='flex flex-col lgl:flex-row gap-10 '>
          <div>
            <h4 className='text-xl md:text-2xl py-8 font-titleFont text-textLight'>Here you will learn {''}
              <span className='underline decoration-textBright/50'>more</span> {''} about me </h4>
            <p className='text-xs md:text-lg font-titleFont text-[#1d1f0c] font-semibold'>I started out studying biochemistry in college. I&apos;ve always loved learning how the natural world works on a molecular level. But I also realized I have a knack for programming and software engineering.
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
    </ScrollSection>
  )
}