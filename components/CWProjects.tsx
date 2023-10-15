import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { MdExpandMore } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';

interface CWProjectProps {
  title: string;
  href: string;
  github: string;
  imageUrls: string[];
  description: string;
  techStack: string[];
  certificate: string;
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

const CWProject: React.FC<CWProjectProps> = ({ title, href, github, imageUrls, description, techStack, certificate }) => {
  // Use the dangerouslySetInnerHTML prop to render HTML
  const formattedDescription = { __html: description };

  return (
    <div className='w-full items-center justify-center gap-8 top-20 '>
      <div className='flex flex-col gap-2 md:w-full w-96 '>
        <div>
            <div className='flex justify-center '>
              {imageUrls.map((imageUrl, index) => (
                <Image
                  key={index}
                  className=' md:h-[400px] h-[275px] md:w-[300px] w-40 m-2  object-fit rounded-md border-t-2 border-l-2 border-r-4 border-b-4 border-textDark'
                  src={imageUrl}
                  alt={title}
                  width={600}
                  height={600}
                />
              ))}
            </div>
        </div>
        <div className='flex flex-col gap-6 md:justify-center md:items-center items-end justify-between z-10'>
          <h3 className='text-2xl text-textDark font-bold tracking-wide pr-4'>{title}</h3>
          <p className='bg-textDark/40 text-sm md:text-base p-2 md:p-6 rounded-md mx-4' dangerouslySetInnerHTML={formattedDescription}></p>
            <div className='flex justify-center '>
                  <Image
                    className='md:h-[300px] h-[275px] md:w-[500px] w-80 mr-6 object-fit rounded-md border-t-2 border-l-2 border-r-4 border-b-4 border-textDark'
                    src={certificate}
                    alt={title}
                    width={600}
                    height={600}
                  />
              </div>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide  flex flex-wrap gap-2 md:gap-5 md:justify-center  justify-end text-textLight pl-14 pr-4'>
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className='text-xl flex gap-4 pr-4'>
            <a className='hover:text-textBright text-textDark cursor-pointer hover:-translate-y-2 transition-all duration-300 ' href={github} target='_blank'>
              <BsGithub size={20} />
            </a>
            {/* <a className='hover:text-textBright text-textDark cursor-pointer hover:-translate-y-2 transition-all duration-300' href={href} target='_blank'>
              <FiExternalLink size={20} />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const CWProjects: React.FC<Props> = () => {
  const projects: CWProjectProps[] = [
    {
      title: 'Feeling Friends',
      href: '',
      github: 'https://github.com/Noordibou/Mindful-Journal',
      imageUrls: ['/ffs1.png', '/fft.png'],
      description: `Feeling Friends is a user-friendly app designed with neurodiverse students in mind. It addresses a range of challenges they may face, including behavioral issues, emotional regulation, social interactions, and executive functioning. The app offers a dual perspective: one for students and one for teachers.<br><br>

      In the student view, at the beginning and end of each school day, students engage with a series of animated pages. They express their current emotions, outline their goals and needs for the day, and communicate with their teacher about how they're feeling. The app then provides tips and guidance to help them navigate these emotions effectively.<br><br>
      
      On the teacher's side, they can easily manage their class or classes, access student profiles, and make notes to better understand and support their students.<br><br>
    
      It's worth noting that Feeling Friends was developed collaboratively with a team of UX/UI experts and software engineers during a 3-day hackathon. We are currently working on updating the app to further enhance its capabilities. The app was built using various technologies such as React, Express, Node, MongoDB, Tailwind CSS, and design tools like Figma and Framer Motion, ensuring a seamless and intuitive experience for both students and teachers. Feeling Friends empowers neurodiverse students to express themselves and fosters a supportive and understanding learning environment.`,
      techStack: ['React', 'Express', 'NodeJS', 'MongoDB', 'HTML', 'CSS', 'TailwindCSS', 'Figma', 'Framer Motion'],
      certificate: '/ff.jpg'
    }
  ];

  const [visibleProjects, setVisibleProjects] = useState(2);
  const showMoreProjects = () => {
    setVisibleProjects(visibleProjects + 2);
  };

  return (
    <ScrollSection>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className='relative max-w-contentContainer  mx-auto top-24  flex flex-col gap-20 py-24 '>
        <Section title="On the Horizon" />
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className='w-full flex flex-col items-center justify-center mt-4 px-4'>
            <div className='flex flex-col xl:flex-row gap-4 px-4'>
              <CWProject {...project} />
            </div>
          </div>
        ))}
        {visibleProjects < projects.length && (
          <div className='w-full flex justify-center'>
            <button
              onClick={showMoreProjects}
              className='flex items-center justify-center  hover:text-textDark/40 text-textDark px-4  rounded-md'
            >
              <MdExpandMore size={62} />
            </button>
          </div>
        )}
      </motion.div>
    </ScrollSection>
  );
}

export default CWProjects;