import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Image from 'next/image';
import { BsGithub, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import { projects } from '../types/project';

const ProjectCarousel = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and adjust layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCenterIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCenterIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Calculate indices for left, center, and right projects
  const leftIndex = (centerIndex - 1 + projects.length) % projects.length;
  const rightIndex = (centerIndex + 1) % projects.length;
  const visibleProjects = isMobile
    ? [projects[centerIndex]]
    : [projects[leftIndex], projects[centerIndex], projects[rightIndex]];

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 py-10 mt-16"
    >
      <Section title="Selected Projects" />

      <div className="relative mt-12 md:mt-24">
        <div className="relative flex justify-center items-center h-[500px] overflow-hidden">
          {visibleProjects.map((project, index) => {
            const isCenter = isMobile || index === 1;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: isCenter ? 1 : 0.6,
                  x: isMobile ? 0 : isCenter ? 0 : index === 0 ? -300 : 300,
                  zIndex: isCenter ? 10 : 5,
                  scale: isCenter ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col rounded-lg overflow-hidden shadow-lg bg-gray-800 w-80 lg:w-96 h-[450px] group ${
                  isMobile ? 'relative mx-auto' : 'absolute'
                } ${isCenter ? 'cursor-pointer' : 'pointer-events-none'}`}
              >
                <Link href={`/projects/${project.slug}`} className="relative block w-full h-80">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                    priority={isCenter}
                  />
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-40 opacity-0 ${
                      isCenter ? 'group-hover:opacity-100 group-hover:scale-105' : ''
                    } transition-opacity duration-300 flex items-center justify-center`}
                  >
                    <span className="text-white text-sm font-medium">View Details</span>
                  </div>
                </Link>

                <div className="p-5 flex flex-col flex-grow">
                  <Link
                    href={`/projects/${project.slug}`}
                    className={`text-xl font-semibold ${
                      isCenter
                        ? 'text-primaryColor hover:text-secondaryColor'
                        : 'text-stone-400'
                    } transition-colors mb-3`}
                  >
                    {project.title}
                  </Link>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondaryColor/60 rounded-full text-xs text-primaryColor"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-stone-300 mb-4 flex-grow">{project.description}</p>

                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        isCenter ? 'text-thirdColor hover:text-secondaryColor' : 'text-stone-400'
                      } transition-colors`}
                      aria-label={`GitHub link for ${project.title}`}
                    >
                      <BsGithub size={20} />
                    </a>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        isCenter ? 'text-thirdColor hover:text-secondaryColor' : 'text-stone-400'
                      } transition-colors`}
                      aria-label={`External link for ${project.title}`}
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Side buttons for larger screens */}
          {!isMobile && projects.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primaryColor/20 text-titleColor hover:bg-primaryColor/40 transition-colors z-20"
                aria-label="Previous project"
              >
                <BsChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primaryColor/20 text-titleColor hover:bg-primaryColor/40 transition-colors z-20"
                aria-label="Next project"
              >
                <BsChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Bottom buttons for smaller screens */}
        {isMobile && projects.length > 1 && (
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-primaryColor/20 text-titleColor hover:bg-primaryColor/40 transition-colors"
              aria-label="Previous project"
            >
              <BsChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-primaryColor/20 text-titleColor hover:bg-primaryColor/40 transition-colors"
              aria-label="Next project"
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