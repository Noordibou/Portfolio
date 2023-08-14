import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import LeftSide from '../components/LeftSide';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <div
        // className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
         className='bg-bodyColor text-white w-full h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'> 
        <Head>
          <title>Noor Dibou</title>
          <link href="https://icons8.com/icon/TOm8IWyqS5Ne/n" />
        </Head>

        <Header />

        <section className='w-full h-[88hv] xl:flex items-center justify-between gap-20'>
          <div className='hidden xl:inline-flex w-96 h-full fixed left-0 bottom-0'>
            <LeftSide />
          </div>
          <div></div>
          <div></div>
        </section>

        <section  id='hero'>
          <Hero />
        </section>

        <section  id='about'>
          < About />
        </section>

        <section  id='skills'>
          < Skills />
        </section>

        <section id='projects'>
          < Projects />
        </section>

        <section id='contact'>
          < Contact />
        </section>
      </div>
    </>
  )
}
