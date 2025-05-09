import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

type Skill = {
  icon: string;
  title: string;
};

type Props = {
  directionLeft?: boolean;
};


interface ScrollSectionProps {
  children: React.ReactNode;
}

function ScrollSection({ children }: ScrollSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
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


const skillsData: Skill[] = [
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/html-5--v1.png',
    title: 'HTML',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/css3.png',
    title: 'CSS',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/javascript.png',
    title: 'JavaScript',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/python.png',
    title: 'Python',
  },
  {
    icon: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-react-social-media-tanah-basah-glyph-tanah-basah.png',
    title: 'React',
  },
  {
    icon: 'https://img.icons8.com/windows/32/FFFFFF/nodejs.png',
    title: 'Node.js',
  },
  {
    icon: 'https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png',
    title: 'Next.js',
  },

  {
    icon: 'https://img.icons8.com/ios/50/FFFFFF/express-js.png',
    title: 'Express.js',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/api-settings.png',
    title: 'RESTful API',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/ubuntu.png',
    title: 'Ubuntu',
  },
  
  {
    icon: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png',
    title: 'MongoDB',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/postgreesql.png',
    title: 'PostgreSQL',
  },
  {
    icon: 'https://img.icons8.com/material-rounded/24/FFFFFF/tailwind_css.png',
    title: 'Tailwind',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/visual-studio.png',
    title: 'VS Code',
  },
  
  {
    icon: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-bootstrap-a-free-and-open-source-css-framework-logo-bold-tal-revivo.png',
    title: 'Bootstrap',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/github.png',
    title: 'GitHub',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/git.png',
    title: 'Git',
  },
  {
    icon: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-bold-tal-revivo.png',
    title: 'Django',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/jquery.png',
    title: 'jQuery',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/linux.png',
    title: 'Linux',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/figma--v1.png',
    title: 'Figma',
  },
  {
    icon: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-bold-tal-revivo.png',
    title: 'Jest',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=7ST6T6xV3OPb&format=png&color=FFFFFF',
    title: 'Svelte',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=q5mQxF1KBDAX&format=png&color=FFFFFF',
    title: 'Leaflet',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/mysql.png',
    title: 'MySQL',
  }
];

const Skills: React.FC<Props> = ({ directionLeft }) => {
  return (
    <div
    // initial={{
      //   x: directionLeft ? -200 : 200,
      //   opacity: 0,
      // }}
      // transition={{ duration: 1 }}
      // whileInView={{ opacity: 1, x: 0 }}
      className='max-w-6xl mx-auto px-4 mt-32 pb-16 flex flex-col '
      >
        <ScrollSection>
      <Section title="My Toolbox" />
      <div className='flex flex-col lgl:flex-row  mt-16 '>
        <div className='grid grid-cols-3 lgl:grid-cols-7 md:grid-cols-4 gap-4 items-center justify-center h-full text-md font-bodyFont group relative z-40'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className='hover:text-titleColor text-xs md:text-lg md:px-6 lg:px-8 md:py-4 cursor-pointer hover:-translate-y-2 transition-all duration-300'
            >
              <Image width={40} height={40} src={skill.icon} alt={skill.title} />
              <p className='text-xs '>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full absolute top-[14%] md:top-[25%] lgl:top-[36%] md:w-10/12 bg- thirdColor/10 rounded-md left-0 h-[600px] md:h-[620px] lgl:h-[440px] lgl:skew-x-0 z-0' />
      </ScrollSection>
    </div>
  );
};

export default Skills;
