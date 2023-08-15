import React from 'react';
import { motion } from 'framer-motion';
// import Skill from './Skill';
import Section from './Section';
import Image from 'next/image';

type Props = {
  directionLeft?: boolean;

};

export default function Skills({ directionLeft }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className='relative max-w-contentContainer mx-auto top-36 py-10 lgl:py-32 mdl:py-24 flex flex-col gap-20 '>
      < Section title="My Toolbox" />

      <div className='grid grid-cols-3 lgl:grid-cols-6 md:grid-cols-4 gap-5 items-center justify-center h-full text-md font-bodyFont group relative'>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/ios-filled/50/FFFFFF/html-5--v1.png" alt="html-5--v1" />
          <p className=''>HTML</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/ios-filled/50/FFFFFF/css3.png" alt="css3" />
          <p className=''>{'  '} CSS</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/ios-filled/50/FFFFFF/javascript.png" alt="javascript" />
          <p className=''>JavaScript</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/ios-filled/50/FFFFFF/python.png" alt="python" />
          <p className=''>Python</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-react-social-media-tanah-basah-glyph-tanah-basah.png" alt="react" />
          <p className=''>React</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/windows/32/FFFFFF/nodejs.png" alt="nodejs" />
          <p className=''>Node.js</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png" alt="next" />
          <p className=''>Next.js</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/ios/50/FFFFFF/express-js.png" alt="express-js" />
          <p className=''>Express.js</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/ios-filled/50/FFFFFF/postgreesql.png" alt="postgreesql" />
          <p className=''>PostgreSQL</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="mongodb" />
          <p className=''>MongoDB</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/ios-filled/50/FFFFFF/git.png" alt="git" />
          <p className=''>Git</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" alt="github" />
          <p className=''>GitHub</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/ios-filled/50/FFFFFF/visual-studio.png" alt="visual-studio" />
          <p className=''>VS Code</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/ios-filled/50/FFFFFF/ubuntu.png" alt="ubuntu" />
          <p className=''>Ubuntu</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/material-rounded/24/FFFFFF/tailwind_css.png" alt="tailwind_css" />
          <p className=''>Tailwind</p>
        </div>
        <div className=' hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <Image width={50} height={50} src="https://img.icons8.com/ios-filled/50/FFFFFF/api-settings.png" alt="restful api" />
          <p className=''>RESTful API</p>
        </div>
      </div>
    </motion.div>
  )
}
