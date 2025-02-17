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
    <div className='max-w-6xl mx-auto px-4 lg:py-32 md:py-24 flex flex-col gap-20'>
      <ScrollSection>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Section title="About" />
          <div className='flex flex-col lgl:flex-row gap-10'>
            <div>
              <h4 className='text-xl md:text-2xl py-8 font-bodyFont text-secondaryColor'>
                Here you will learn {''}
                <span className='underline decoration-titleColor/50'>more</span> {''} about me
              </h4>
              <p className='text-xs md:text-lg font-bodyFont text-primaryColor'>
                From biochemistry to software engineering, my journey has been driven by curiosity and a desire to make a difference. My scientific background has shaped my approach to problem-solving, giving me a unique perspective on complex systems and their interactions.
                <br /><br />
                This perspective led me to my current role as a software engineer at the <span className="font-bold">National Center for Computational Hydroscience and Engineering (NCCHE)</span>. Here, I work on transformative projects like DDS-WISE and AIMS, developing systems that play crucial roles in flood prediction and dam safety analysis. These tools help communities prepare for natural disasters and protect vital infrastructure, directly contributing to public safety and environmental resilience.
                <br /><br />
                Through this work, I've seen firsthand how technology can create meaningful change. Whether it's modeling flood impacts, building sustainable platforms, or developing environmental protection tools, I remain passionate about projects that make a real difference in people's lives and our environment.
              </p>
            </div>
          </div>
        </motion.div>
      </ScrollSection>
    </div>
  );
}