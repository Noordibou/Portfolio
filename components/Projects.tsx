import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Link from 'next/link';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

interface ProjectProps {
  title: string;
  href: string;
  github: string;
  imageUrl: string;
  description: string;
  techStack: string[];
}
type Props = {
  directionLeft?: boolean;
};

interface ScrollSectionProps {
  children: React.ReactNode;
}

function ScrollSection({ children }: ScrollSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
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

const Project: React.FC<ProjectProps> = ({ title, href, github, imageUrl, description, techStack }) => (
  <div className='w-full flex flex-col items-center justify-center gap-8 top-24  px-8'>
    <div className='flex flex-col xl:flex-row gap-2 w-full max-w-screen-xl'>
      <Link className='md:w-full xl:w-1/2 relative group ' href={href} target='_blank'>
        <motion.div whileHover={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
          <div className='flex justify-center w-[400px] md:w-full '>
            <Image
              className='max-w-full md:max-w-xl md:h-[350px] h-[250px] px-8 md:px-0 object-fit rounded-md'
              src={imageUrl}
              alt={title}
              width={600}
              height={600}
            />
          </div>
        </motion.div>
      </Link>
      <div className='w-full xl:w-1/2 flex flex-col gap-6 lg:items-center xl:items-end items-end justify-between  xl:-ml-16 z-10'>
        <h3 className='text-2xl text-textDark font-bold tracking-wide pr-4'>{title}</h3>
        <p className='bg-textDark/40 text-sm md:text-base xl:w-auto lg:w-3/4 p-2 md:p-6 rounded-md mx-4'>{description}</p>
        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textLight pl-14 pr-4'>
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className='text-xl flex gap-4 pr-4'>
          <a className='hover:text-textBright text-textDark cursor-pointer hover:-translate-y-2 transition-all duration-300' href={github} target='_blank'>
            <BsGithub size={20} />
          </a>
          <a className='hover:text-textBright text-textDark cursor-pointer hover:-translate-y-2 transition-all duration-300' href={href} target='_blank'>
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  </div>


);

const Projects: React.FC<Props> = () => {
  const projects = [
    {
      title: 'Caffeine Chronicles',
      href: 'https://coffee-shop-blog.vercel.app/',
      github: 'https://github.com/Noordibou/Coffee-Shop-Blog',
      imageUrl: '/cc-main.png',
      description: 'Caffeine Chronicles is a coffee shop review app that allows users to share experiences about cafes through blog posts and profiles. Key features include user authentication, Google maps integration, blogging, and the ability to add, update, and delete shop details.',

      techStack: ['React', 'Express', 'NodeJS', 'MongoDB', 'HTML', 'CSS', 'TailwindCSS'],
    },
    {
      title: 'Time Totes',
      href: 'https://e-shop-unty.vercel.app/',
      github: 'https://github.com/Noordibou/E-shop',
      imageUrl: '/tt-main.png',
      description: 'Time Totes is an e-commerce app that allows users to browse and purchase watches, bags, and sunglasses with dedicated sections for both women and men. Key features include user authentication, shopping cart, and payment processing. The app is built with React, NextJS, and TailwindCSS on the frontend, and NodeJS, Express, and MongoDB on the backend.',
      techStack: ['React', 'NextJS', 'TypeScript', 'MongoDB', 'Stripe', 'TailwindCSS'],
    },
    {
      title: 'The Dessert Palette',
      href: 'https://long-breeze-6908.fly.dev/',
      github: 'https://github.com/Noordibou/Dessert-Palette-2.0',
      imageUrl: '/dp-main.png',
      description: 'A web app that uses Django, PostgreSQL and Python to build a robust platform for recipes, with key features like categories, featured recipes, recipe browsing, search, and responsiveness enabled by the technical stack. The backend handles structured data and logic while the frontend focuses on user interfaces and experiences.',
      techStack: ['Django', 'PostgreSQL', 'Python', 'Bootstrap'],
    },
    {
      title: 'Projects Planner',
      href: 'https://autumn-glade-2959.fly.dev/',
      github: 'https://github.com/Noordibou/CRUD-PROJECT',
      imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_ToDo_960x615_2x_1_RE3HTxG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain',
      description: 'The Projects Planner app is a straightforward software application designed to create and manage checklists for various purposes. It offers a user-friendly interface that allows individuals to create multiple project checklists, and mark items as completed or to edit them.This app allows users to create multiple checklists based on their needs. Each checklist represents a set of tasks or items to be completed. Users can add or delete items to their checklists. Users can add due date and expected time needed to finish the project.',
      techStack: ['Express', 'NodeJS', 'Mongoose', 'EJS', 'Bootstrap'],
    },
  ];

  return (
    <ScrollSection>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className='relative max-w-contentContainer px-4 mx-auto top-24 lgl:py-36 mdl:py-24 flex flex-col gap-20 pb-24 '>
        <Section title="Selected Projects" />
        {projects.map((project, index) => (
          <div key={index} className='w-full flex flex-col items-center justify-center mt-10 px-4'>
            <div className='flex flex-col xl:flex-row gap-4 px-4'>
              <Project {...project} />
            </div>
          </div>
        ))}
      </motion.div>
    </ScrollSection>
  );
}

export default Projects;


