import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <Head>
          <title>Noor's Porfolio</title>
        </Head>

        <Header />

        <section className='snap-start' id='hero'>
          <Hero />
        </section>

        <section className='snap-center' id='about'>
          < About />
        </section>

        <section className='snap-start' id='skills'>
          < Skills />
        </section>

        <section className='snap-start' id='projects'>
          < Projects />
        </section>

        <section className='snap-start' id='contact'>
          < Contact />
        </section>

        <Link href='#hero'>
          <footer className='sticky bottom-3 w-full cursor-pointer'>
          <div className='flex p-4'>
            <img src='https://img.icons8.com/sf-black/64/FAB005/home.png' alt='' className='w-10 h-10 filter grayscale hover:grayscale-0 cursor-pointer' />
            </div>
          </footer>
        </Link>



      </div>
    </>
  )
}
