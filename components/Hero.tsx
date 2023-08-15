import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    const text = [
        "I am a Full Stack Software Engineer, with a background in Biochemistry",
        "I am a problem-solving enthusiast who thrives on turning complex challenges into successful software solutions"
    ]
    return (
        <section
            className='relative max-w-contentContainer mx-auto py-20 lgl:py-32 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 top-24 z-0'>
            <div className='flex flex-col lgl:flex-row gap-16'>
                <div className='w-full lgl:w-2/3 text-base text-textDark flex flex-col gap-4'>
                    <motion.h1
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className='relative font-titleFont font-semibold tracking-[25px] flex flex-col text-5xl md:text-7xl lgl:text-9xl'
                    >
                        Noor <span className='display: flex flex-direction: column'> Dibou</span>
                    </motion.h1>
                    <div className='z-20'>
                        <h2 className='text-sm uppercase text-textGreen pt-4 pb-6 tracking-[8px] mdl:tracking-[10px] lgl:tracking-[20px]'>
                            Software Engineer
                        </h2>
                    </div>
                    <div>
                        <div className='relative mr-3 pd-2 text-2xl lgl:text-3xl ' > {text.map((line, index) => (
                            <div key={index}>{line}</div>
                        ))} </div>
                        <Cursor cursorColor='bg-textGreen' />
                    </div>
                </div>
                <div className='w-full lgl:w-1/3 lgl:top-24 relative group'>
                    <div className='absolute w-80 h-96 -top-6 -left-6 rounded-lg'>
                        <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                            <Image
                                className='rounded-lg h-full object-cover'
                                src='/nd1.jpg'
                                alt='Noor Dibou'
                                width={320}
                                height={320}
                            />
                        <div className='hidden absolute w-80 h-96 lgl:inline-block bg-textDark/40 rounded-md top-0 left-0 group-hover:bg-transparent duration-300' />
                        </div>
                    </div>
                    <div className='lgl:inline-flex w-80 h-96 border-2 border-textGreen rounded-md lgl:group-hover:-translate-x-2 lgl:group-hover:-translate-y-2 transition-transform duration-300' />

                </div>
            </div>

        </section>
    )
}
