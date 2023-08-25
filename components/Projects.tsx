import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Link from 'next/link';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectProps {
    title: string;
    href: string;
    imageUrl: string;
    description: string;
    techStack: string[];
}
type Props = {
    directionLeft?: boolean;
};

const Project: React.FC<ProjectProps> = ({ title, href, imageUrl, description, techStack }) => (
    <div className=' w-full flex flex-col items-center justify-center gap-8 my-4'>
        <div className='flex flex-col xl:flex-row gap-2'>
            <Link className='w-full xl:w-1/2 h-auto relative group' href={href} target='_blank'>
                <motion.div whileHover={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                    <Image
                        className='w-full h-full object-contain rounded-md'
                        src={imageUrl}
                        alt={title}
                        width={600}
                        height={600}
                    />
                </motion.div>
            </Link>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 items-end justify-between xl:-ml-16 z-10'>
                <h3 className='text-2xl font-bold tracking-wide'>{title}</h3>
                <p className='bg-[#4A4B4F] text-sm md:text-base p-2 md:p-6 rounded-md'>{description}</p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark pl-14'>
                    {techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <div className='text-xl flex gap-4 '>
                    <a className='hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'
                        href={href} target='_blank'>
                        <BsGithub size={20} />
                    </a>
                    <a className='hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'
                        href={href} target='_blank'>
                        <FiExternalLink size={20} />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const Projects: React.FC<Props> = ({ directionLeft }) => {
    const projects = [
        {
            title: 'Caffeine Chronicles',
            href: 'https://bamncoffeeshops-lw86.onrender.com/',
            imageUrl: '/cc-m.png',
            description: 'Caffeine Chronicles is a coffee shop review app that allows users to share experiences about cafes through blog posts and profiles. Key features include user authentication, Google maps integration, blogging, and the ability to add, update, and delete shop details.',

            techStack: ['React', 'Express', 'NodeJS', 'MongoDB', 'HTML', 'CSS', 'Bootstrap'],
        },
        {
            title: 'Sweet Treats',
            href: '',
            imageUrl: '/st-main.png',
            description: 'A web app that uses Django, PostgreSQL and Python to build a robust platform for recipes, with key features like recipe browsing, search, and responsiveness enabled by the technical stack. The backend handles structured data and logic while the frontend focuses on user interfaces and experiences.',
            techStack: ['Django', 'PostgreSQL', 'Python', 'Bootstrap'],
        },
        {
            title: 'Projects Planner',
            href: 'https://autumn-glade-2959.fly.dev/',
            imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_ToDo_960x615_2x_1_RE3HTxG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain',
            description: 'The Projects Planner app is a straightforward software application designed to create and manage checklists for various purposes. It offers a user-friendly interface that allows individuals to create multiple project checklists, and mark items as completed or to edit them.This app allows users to create multiple checklists based on their needs. Each checklist represents a set of tasks or items to be completed. Users can add or delete items to their checklists. Users can add due date and expected time needed to finish the project.',
            techStack: ['Express', 'NodeJS', 'Mongoose', 'EJS', 'Bootstrap'],
        },
    ];

    return (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='relative max-w-contentContainer mx-auto top-36  lgl:py-36 mdl:py-24 flex flex-col gap-20  '>
            <Section title="Selected Projects" />
            {projects.map((project, index) => (
                <div key={index} className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row gap-4'>
                        <Project {...project} />
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

export default Projects;


{/* <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map((project, i) => (
                    <div key={project} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center  h-screen'>
                        <motion.img 
                        initial={{ y: -300, opacity: 0 }}
                        transition={{ duration: 1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true}}
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bSUTMQ8gGyZ7zpQtnifEZrcLeuNuC0HseA&usqp=CAU' alt='' />
                        <div  className='space-y-10 px-0 md:px-10 max-w-6xl' >
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                Case Study {i + 1} of {projects.length}:</span> {' '} Project Name
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                lorim ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                        </div>
                    </div>
                ))}
            </div> */}
