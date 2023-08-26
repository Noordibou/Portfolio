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
    github: string;
    imageUrl: string;
    description: string;
    techStack: string[];
}
type Props = {
    directionLeft?: boolean;
};

const Project: React.FC<ProjectProps> = ({ title, href, github, imageUrl, description, techStack }) => (
    <div className=' w-full flex flex-col items-center justify-center gap-8 '>
        <div className='flex flex-col xl:flex-row gap-2'>
            <Link className='w-full xl:w-1/2 h-auto relative group' href={href} target='_blank'>
                <motion.div whileHover={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                    <Image
                        className='w-screen h-[400px] object-fit rounded-md'
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
                        href={github} target='_blank'>
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

const Projects: React.FC<Props> = () => {
    const projects = [
        {
            title: 'Time Totes',
            href: 'https://e-shop-unty.vercel.app/',
            github: 'https://github.com/Noordibou/E-shop',
            imageUrl: '/eshop.png',
            description: 'Time Totes is an e-commerce app that allows users to browse and purchase watches, bags, and sunglasses with dedicated sections for both women and men. Key features include user authentication, shopping cart, and payment processing. The app is built with React, NextJS, and TailwindCSS on the frontend, and NodeJS, Express, and MongoDB on the backend.',
            techStack: ['React', 'NextJS','TypeScript', 'MongoDB','Stripe', 'TailwindCSS'],
        },
        {
            title: 'Caffeine Chronicles',
            href: 'https://bamncoffeeshops-lw86.onrender.com/',
            github: 'https://github.com/MichaelDang33/BAMN-coffee-shops',
            imageUrl: '/cc-m.png',
            description: 'Caffeine Chronicles is a coffee shop review app that allows users to share experiences about cafes through blog posts and profiles. Key features include user authentication, Google maps integration, blogging, and the ability to add, update, and delete shop details.',

            techStack: ['React', 'Express', 'NodeJS', 'MongoDB', 'HTML', 'CSS', 'Bootstrap'],
        },
        {
            title: 'Sweet Treats',
            href: '',
            github: 'https://github.com/veecastro/pastry-recipes-app',
            imageUrl: '/st-main.png',
            description: 'A web app that uses Django, PostgreSQL and Python to build a robust platform for recipes, with key features like recipe browsing, search, and responsiveness enabled by the technical stack. The backend handles structured data and logic while the frontend focuses on user interfaces and experiences.',
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
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='relative max-w-contentContainer px-4 mx-auto top-36 lgl:py-36 mdl:py-24 flex flex-col gap-20  '>
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


