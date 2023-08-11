import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <>
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
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

        {/* Projects */}

        {/* Contact */}



      </div>
    </>
  )
}
