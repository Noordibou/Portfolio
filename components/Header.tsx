// import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function Header() {
//     const [showSideNav, setShowSideNav] = useState(false);

//     const handleNavLinkClick = () => {
//         setShowSideNav(false);
//     };

//     return (
//         <nav className='sticky top-0 p-3 flex shadow-navbarShadow bg-bodyColor items-start justify-between lg:h-[12hv] mx-auto z-50 xl:items-center opacity-80'>
//             <motion.div
//                 initial={{ x: -100, opacity: 0, scale: 0.5 }}
//                 animate={{ x: 0, opacity: 1, scale: 1 }}
//                 transition={{ duration: 1.5 }}
//                 className='flex flex-row items-center'>
//                 <Link href='#hero'>
//                     <h1 className='text-4xl lgl:text-5xl font-titleFont text-textGreen hover:text-textDark cursor-pointer'>ND</h1>
//                 </Link>
//             </motion.div>
//             <div className='hidden md:inline-flex items-center space-x-5 px-5'>
//                 <motion.div
//                     initial={{ x: 500, opacity: 0, scale: 0.5 }}
//                     animate={{ x: 0, opacity: 1, scale: 1 }}
//                     transition={{ duration: 1.5 }}
//                     className='max-w-container h-full mx-auto py-5 font-titleFont flex items-center space-x-5 justify-between uppercase text-textDark cursor-pointer'>
//                     <Link className='hover:text-textGreen' href='#about' onClick={handleNavLinkClick}> About </Link>
//                     <Link className='hover:text-textGreen' href='#skills' onClick={handleNavLinkClick}> Skills </Link>
//                     <Link className='hover:text-textGreen' href='#projects' onClick={handleNavLinkClick}> Projects </Link>
//                     <Link className='hover:text-textGreen' href='#contact' onClick={handleNavLinkClick}> Contact</Link>
//                 </motion.div>
//                 <Link href='/resume.pdf' target='_blank' onClick={handleNavLinkClick}>
//                 <motion.button
//                     initial={{ x: 500, opacity: 0, scale: 0.5 }}
//                     animate={{ x: 0, opacity: 1, scale: 1 }}
//                     transition={{ duration: 1.5 }}
//                     className='py-2 px-4 font-titleFont rounded-md border border-textGreen hover:bg-hoverColor flex items-center justify-between uppercase text-textDark cursor-pointer'>
//                     Resume
//                 </motion.button>
//                 </Link>
//             </div>
//             <div className={`md:hidden fixed top-0 right-0 h-full bg-bodyColor ${showSideNav ? 'w-60' : 'w-0'} transition-all duration-300 shadow-navbarShadow`}>
//                 <div className='flex flex-col h-full p-5'>
//                     <Link className='py-2 text-textDark hover:text-textGreen' href='#about' onClick={handleNavLinkClick}> About </Link>
//                     <Link className='py-2 text-textDark hover:text-textGreen' href='#skills' onClick={handleNavLinkClick}> Skills </Link>
//                     <Link className='py-2 text-textDark hover:text-textGreen' href='#projects' onClick={handleNavLinkClick}> Projects </Link>
//                     <Link className='py-2 text-textDark hover:text-textGreen' href='#contact' onClick={handleNavLinkClick}> Contact</Link>
//                     <Link href='/resume.pdf' target='_blank' onClick={handleNavLinkClick}>
//                 <motion.button
//                     initial={{ x: 500, opacity: 0, scale: 0.5 }}
//                     animate={{ x: 0, opacity: 1, scale: 1 }}
//                     transition={{ duration: 1.5 }}
//                     className='py-2 px-4 font-titleFont rounded-md border border-textGreen hover:bg-hoverColor flex items-center justify-between uppercase text-textDark cursor-pointer'>
//                     Resume
//                 </motion.button>
//                 </Link>
//                 </div>
//             </div>
//             <button
//                 className='md:hidden p-2 text-textDark hover:text-textGreen'
//                 onClick={() => setShowSideNav(!showSideNav)}
//             >
//                 {showSideNav ? (
//                     <svg
//                         xmlns='http://www.w3.org/2000/svg'
//                         fill='none'
//                         viewBox='0 0 24 24'
//                         stroke='currentColor'
//                         className='h-6 w-6'
//                     >
//                         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
//                     </svg>
//                 ) : (
//                     <svg
//                         xmlns='http://www.w3.org/2000/svg'
//                         fill='none'
//                         viewBox='0 0 24 24'
//                         stroke='currentColor'
//                         className='h-6 w-6'
//                     >
//                         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
//                     </svg>
//                 )}
//             </button>
//         </nav>
//     );
// }
import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (event.target && isHTMLElement(event.target)) {
                if (!event.target.closest('nav')) {
                    setIsMenuOpen(false);
                }
            }
        }
        function isHTMLElement(target: EventTarget): target is HTMLElement {
            return target instanceof HTMLElement;
        }

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    function toggleMenu() {
        setIsMenuOpen(prev => !prev);
    }



    return (
        <div className='sticky top-0 bg-bodyColor  shadow-navbarShadow opacity-80 z-30'>
            <div className='flex items-center justify-between px-4 py-3'>
                <motion.div
                    initial={{ x: -100, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}>
                    <h2 className='text-4xl lgl:text-5xl font-titleFont text-textGreen hover:text-textDark cursor-pointer'>
                        <Link href='#hero' className='font-titleFont'>ND</Link>
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}>
                    <button
                        className='block lg:hidden text-bgColor p-2 text-textDark hover:text-textGreen'
                        onClick={toggleMenu}
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>
                </motion.div>
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden absolute top-16 left-0 w-full bg-bodyColor`}
                >
                    <ul className='flex flex-col items-center font-titleFont gap-4 px-8 py-8 text-bgColor uppercase cursor-pointer '>

                        <Link className='py-2 text-textDark hover:text-textGreen' href='#hero'>Home</Link>
                        <Link className='py-2 text-textDark hover:text-textGreen' href='#about'>About</Link>
                        <Link className='py-2 text-textDark hover:text-textGreen' href='#skills'>Skills</Link>
                        <Link className='py-2 text-textDark hover:text-textGreen' href='#projects'>Projects</Link>
                        <Link className='py-2 text-textDark hover:text-textGreen' href='#contact'>Contact</Link>
                        <Link className='py-2 text-textDark hover:text-textGreen' href='/resume.pdf' target='_blank' >Resume</Link>
                    </ul>
                </div>
                <motion.ul
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }} 
                    className='hidden lg:flex justify-center gap-6 text-bgColor uppercase text-[18px] font-titleFont'>
                    <Link href='#hero' className='py-2 text-textDark hover:text-textGreen' >Home</Link >
                    <Link href='#about' className='py-2 text-textDark hover:text-textGreen' >About</Link >
                    <Link href='#skills' className='py-2 text-textDark hover:text-textGreen' >Skills</Link>
                    <Link href='#projects' className='py-2 text-textDark hover:text-textGreen' >Projects</Link>
                    <Link href='#contact' className='py-2 text-textDark hover:text-textGreen' >Contact</Link>
                    <Link href='/resume.pdf' target='_blank' >
                        <motion.button
                            initial={{ x: 500, opacity: 0, scale: 0.5 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5 }}
                            className='py-2 px-4 font-titleFont rounded-md border border-textGreen hover:bg-hoverColor flex items-center justify-between uppercase text-textDark cursor-pointer'>
                            Resume
                        </motion.button>
                    </Link>
                </motion.ul>

            </div>
        </div>

    )
}
