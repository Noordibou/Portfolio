import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';


type Props = {

};

export default function Education() {
  return (
    <section className='relative max-w-contentContainer mx-auto top-24 py-10 lgl:py-32 mdl:py-24 flex flex-col mt-16'>
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
    className="py-4 ">
    <h3 className="text-lg font-semibold text-textLight">{title}</h3>
    <p className="text-textDark">{institution}</p>
  </motion.div>
);
