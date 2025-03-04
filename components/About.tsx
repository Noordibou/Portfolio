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
          className='flex flex-col z-40'
        >
          <Section title="About" />
          <div className='flex flex-col lgl:flex-row gap-10 z-40'>
            <div>
              <h4 className='text-xl md:text-2xl py-8 font-bodyFont text-secondaryColor'>
                Here you will learn {''}
                <span className='underline decoration-titleColor/50'>more</span> {''} about me
              </h4>
              <p className='text-sm md:text-lg font-bodyFont text-primaryColor pt-8'> My journey from biochemistry to software engineering reflects my passion for solving complex problems with innovative solutions. I thrive on turning curiosity into action, which led me to join a team at the <span className="font-bold">National Center for Computational Hydroscience and Engineering (NCCHE)</span>. There, I’m helping develop the next generation of tools like <span className="font-bold">DDS-WISE</span> for flood prediction and <span className="font-bold">AIMS</span> for smarter agriculture—2.0 versions set to launch soon. I’m driven by creating technology that protects communities and sustains our environment, and I’m excited to see these projects make a lasting impact. </p>
            </div>
          </div>
        </motion.div>
      </ScrollSection>
    </div>
  );
}