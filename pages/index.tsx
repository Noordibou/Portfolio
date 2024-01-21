import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import CWProjects from '../components/CWProjects';
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
      <div className="snap-y snap-mandatory scrollbar-thin font-titleFont scrollbar-track-gray-400/20 scrollbar-thumb-textDark/80 bg-[url('../public/258.jpg')] bg-no-repeat bg-cover text-white w-full h-screen overflow-y-scroll overflow-x-hidden z-50"
      >
        <Head>
          <title>Noor Dibou</title>
      
        </Head>

        <Header />

        <div className='w-full h-[88hv] xl:flex items-center justify-between md:px-10 gap-20 '>
          <div className='hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0 md-24 px-2'>
            <LeftSide />
          </div>

          <div className="h-[88hv] mx-auto p-5 px-10">
            <ScrollSection>
              <section id='hero' className="z-30 ">
                <Hero />
              </section>
            </ScrollSection>

              <section id='about'>
                <About />
              </section>
           
              <section id='skills'>
                <Skills />
              </section>
           

           
              <section id='projects'>
                <Projects />
              </section>

              <section id='cwprojects'>
                <CWProjects />
              </section>

           <ScrollSection>
              <section id='education'>
                <Education />
              </section>
            </ScrollSection>

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
