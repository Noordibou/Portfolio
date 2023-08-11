import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "< Hello, My Name is Noor Dibou />",
            "< I am a Software Engineer, with a background in Biochemistry />",
            "< I am a problem-solving enthusiast who thrives on turning complex challenges into successful software solutions />"

        ],
        loop: true,
        delaySpeed: 1500,
        typeSpeed: 150,
    });
    return (
        <div>
            <div className='h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden '>
                <img className='relative h-48 w-48 mx-auto rounded-full object-cover' src='https://img.freepik.com/premium-photo/3d-render-teenager-girl-portrait-generative-ai_384720-2096.jpg?w=2000' alt='Noor Dibou' />
                <BackgroundCircles />

                <div className='z-20'>
                    <h2 className='text-sm uppercase text-gray-500 pb-8 tracking-[15px]'>
                        Software Engineer
                    </h2>
                    <div>
                    <h1 className='text-2xl lg:text-3xl font semibold px-10 w-[700px]'>
                        <span className='mr-3 pd-6' >{text}</span>
                        <Cursor cursorColor='#F7AB0A' />
                    </h1>
                    </div>
                    <div className=' pt-10'>
                        <Link href={"#about"}>
                            <button className='heroButton'>About</button>
                        </Link>
                        <Link href={"#experience"}>
                            <button className='heroButton'>Experience</button>
                        </Link>
                        <Link href={"#skills"}>
                            <button className='heroButton'>Skills</button>
                        </Link>
                        <Link href={"#projects"}>
                            <button className='heroButton'>Projects</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
