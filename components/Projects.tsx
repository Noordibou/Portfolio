import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';
import { projects } from '../types/project';

const ProjectCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(1);

  // Update projectsPerPage based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setProjectsPerPage(3);
      } else if (window.innerWidth >= 768) { // md breakpoint
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(1);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) => {
      const nextIndex = prevIndex + projectsPerPage;
      return nextIndex >= projects.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => {
      const nextIndex = prevIndex - projectsPerPage;
      return nextIndex < 0 ? Math.max(0, projects.length - projectsPerPage) : nextIndex;
    });
  };

  const visibleProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 py-10 mt-16"
    >
      <Section title="Selected Projects" />
      
      <div className="relative mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-lg overflow-hidden h-full group"
            >
              <Link href={`/projects/${project.slug}`} className="relative">
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
                  href={`/projects/${project.slug}`}
                  className="text-xl font-bold text-primaryColor mb-3 hover:text-secondaryColor transition-colors"
                >
                  {project.title}
                </Link>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondaryColor/60   rounded-full text-xs text-primaryColor"
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

        {/* Navigation buttons */}
        {projects.length > projectsPerPage && (
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-primaryColor/20 text-titleColor hover:bg-primaryColor/40 transition-all"
              aria-label="Previous projects"
            >
              <BsChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-primaryColor/20 text-titleColor hover:bg-primaryColor/40 transition-all"
              aria-label="Next projects"
            >
              <BsChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCarousel;