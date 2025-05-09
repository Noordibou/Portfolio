import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';


type Props = {

};

export default function Education() {
  return (
    <section className='max-w-6xl mx-auto px-4 mt-36 pb-10 flex flex-col'>
      <div>
        <Section title="Education" />
        <div className='flex flex-col lgl:flex-row gap-10 pt-8 px-4'>
          <div>

            <EducationItem
              title="Bachelor's Degree in Biochemistry"
              institution="The University of Texas at Dallas"
            />
            <EducationItem
              title="Software Engineer Immersive Bootcamp "
              institution="General Assembly"
            />
            <EducationItem
              title="Associate of Science"
              institution="Collin College"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


const EducationItem = ({ title, institution }: { title: string, institution: string }) => (
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 1 }}
    className=" py-4 flex flex-col">
    <h3 className="text-lg font-semibold text-secondaryColor z-40">{title}</h3>
    <p className="text-thirdColor z-40">{institution}</p>
  </motion.div>
);
