import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Hero() {
    const text = [
        " Full Stack Software Engineer with a foundation in Biochemistry.",
        " problem-solving enthusiast who thrives on turning complex challenges into effective software solutions."
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [text.length]);


    return (
        <section
        className='relative max-w-contentContainer top-24 md:top-52 mx-auto py-10 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 z-0'>
        <motion.div className='flex flex-col lgl:flex-row gap-10 '
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                >
            <div className='w-full flex flex-col gap-4'>
                <h1 className='relative text-textDark font-titleFont uppercase font-semibold tracking-[25px] flex flex-col text-5xl md:text-7xl lgl:text-7xl'>
                    Noor Dibou
                </h1>
                <div className='z-20'>
                    <h2 className='text-sm uppercase text-textBright pt-4 pb-2 tracking-[8px] font-bold mdl:tracking-[10px] lgl:tracking-[20px]'>
                        Software Engineer
                    </h2>
                </div>
        
                <div>
                    <div className='relative mr-3 pb-8 text-xl lgl:text-2xl text-textLight md:w-3/4'>
                    {text.map((line, index) => (
                            <div
                                key={index}
                                className={`animated-text ${index === currentTextIndex ? 'visible' : 'hidden'}`}
                            >
                               Hello, my name is Noor Dibou, I&apos;m a <span className='text-textDark'> {line} </span>
                    </div>
                    ))}
                    </div>
                    <div className='z-30'>
                <div className='mr-3 md:pb-12 text-xl lgl:text-2xl text-textLight md:w-4/5'>
                    <p>Take a closer look at some of the <Link href='#projects' className=' bg-textLight/40  rounded-lg px-2 pb-1 md:py-2 underline decoration-textBright/50 z-40'>projects</Link> {''} I&apos;ve worked on.
                    </p>
                    </div>
                </div>
                </div>
                </div>
                {/* <div className='w-full lgl:w-1/3 lgl:top-24 relative group mt-2 '>
                    <div className='absolute w-60 h-64 md:w-80 md:h-96 -top-6 -left-6 rounded-lg'>
                        <div className='w-full h-full relative z-20 flex pl-6  lgl:pl-0'>
                            <Image
                                className='rounded-lg h-full object-fit'
                                src='/nd1.jpg'
                                alt='Noor Dibou'
                                width={320}
                                height={320}
                            />
                        <div className='hidden absolute w-80 h-96 lgl:inline-block bg-textDark/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300' />
                        </div>
                    </div>
                    <div className='lgl:inline-flex w-60 h-64 md:w-80 md:h-96 border-2 border-textBright rounded-md lgl:group-hover:-translate-x-2 lgl:group-hover:-translate-y-2 transition-transform duration-300' />

                </div> */}
            </motion.div>

        </section>
    )
}
