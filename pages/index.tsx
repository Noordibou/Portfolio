import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <div
        //snap-y  snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
        // className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
        className='bg-bodyColor text-white w-full h-screen p-5 overflow-y-scroll overflow-x-hidden'>
        <Head>
          <title>Noor Dibou</title>
          <link href="https://icons8.com/icon/TOm8IWyqS5Ne/n" />
        </Head>

        <Header />

        <div className='w-full h-[88hv] xl:flex items-center justify-between gap-20 '>

          <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0 px-4'>
            <LeftSide />
          </div>

          <div className='h-[88hv] mx-auto p-5 ' >
            <section id='hero'>
              <Hero />
            </section>

            <section id='about'>
              < About />
            </section>

            <section id='skills'>
              < Skills />
            </section>

          </div>

          <div className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
            <RightSide />
          </div>
        </div>


        {/*}

        <section id='projects'>
          < Projects />
        </section>

        <section id='contact'>
          < Contact />
        </section>   */}
      </div>
    </>
  )
}
