import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import Education from '../components/Education';
import { useInView } from 'react-intersection-observer';

interface ScrollSectionProps {
  children: React.ReactNode;
}

function ScrollSection({ children }: ScrollSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8
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

export default function Home() {
  return (
    <>
      <div className='snap-y snap-mandatory scrollbar-thin font-titleFont scrollbar-track-gray-400/20 scrollbar-thumb-textDark/80 bg-bodyColor text-white w-full h-screen overflow-y-scroll overflow-x-hidden z-50'>
        <Head>
          <title>Noor Dibou</title>
          <link href="https://icons8.com/icon/TOm8IWyqS5Ne/n" />
        </Head>

        <Header />

        <div className='w-full h-[88hv] xl:flex items-center justify-between md:px-10 gap-20 '>
          <div className='hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0 md-24 px-2'>
            <LeftSide />
          </div>

          <div className='h-[88hv] mx-auto p-5 px-10'>
            <ScrollSection>
              <section id='hero'>
                <Hero />
              </section>
            </ScrollSection>

              <section id='about'>
                <About />
              </section>

            <ScrollSection>
              <section id='education'>
                <Education />
              </section>
            </ScrollSection>

           
              <section id='skills'>
                <Skills />
              </section>
           

           
              <section id='projects'>
                <Projects />
              </section>
           

            <ScrollSection>
              <section id='contact'>
                <Contact />
              </section>
            </ScrollSection>
          </div>

          <div className='hidden lg:inline-flex w-32 h-full fixed pd-3 right-0 bottom-0'>
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
}
