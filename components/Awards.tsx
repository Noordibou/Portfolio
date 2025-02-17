// pages/awards/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import Section from '../components/Section';
import { AwardedProject, awardedProjects } from '../types/award';

const AwardsSection: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 py-10 mt-32"
    >
      <Section title="Award-Winning Projects" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {awardedProjects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col rounded-lg overflow-hidden h-full group"
          >
            <Link href={`/awards/${project.slug}`} className="relative">
              <div className="relative w-full h-96">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105">
                  <div className="flex justify-center items-center h-full">
                    <span className="text-white text-sm font-medium">View Details</span>
                  </div>
                </div>
              </div>
            </Link>

            <div className="p-6 flex flex-col flex-grow">
              <Link 
                href={`/awards/${project.slug}`}
                className="text-xl font-bold text-primaryColor mb-2 hover:text-secondaryColor transition-colors"
              >
                {project.title}
              </Link>

              <div className="mb-3">
                <span className="inline-block bg-titleColor text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {project.award.title}
                </span>
                
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-secondaryColor/60 rounded-full text-xs text-primaryColor"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-stone-300 mb-4">
                {project.description}
              </p>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-thirdColor hover:text-secondaryColor transition-colors"
                >
                  <BsGithub size={20} />
                </a>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-thirdColor hover:text-secondaryColor transition-colors"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AwardsSection;