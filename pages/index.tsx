import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Awards from "../components/Awards";
import Contact from "../components/Contact";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Education from "../components/Education";
import { useInView } from "react-intersection-observer";

interface ScrollSectionProps {
  children: React.ReactNode;
}

function ScrollSection({ children }: ScrollSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <div
      ref={ref}
      style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s" }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="snap-y snap-mandatory scrollbar-thin font-titleFont scrollbar-track-gray-700/20 scrollbar-thumb-textDark/80 bg-slate-950 bg-no-repeat bg-cover text-white w-full h-screen overflow-y-scroll overflow-x-hidden z-50">
        <Head>
          <title>Noor Dibou</title>
          <meta name="description" content="Noor Dibou's Portfolio" />
          <link rel="icon" href="/dddivided.svg" sizes="32x32" />
        </Head>

        {/* Wrapper for the layout */}
        <div className="w-full relative">
          {/* Sticky Header Container */}
          <div className="fixed md:top-10 top-20 right-0 w-auto z-50">
            <Header />
          </div>
          {/* <div className="absolute -top-20 -right-60 w-[500px] h-[500px] bg-red-800/30 rounded-full filter blur-[128px]"></div> */}

          {/* Content area with LeftSide */}
          <div className="relative">
            <div className="absolute left-10 md:top-10 top-20 md:px-20">
              <LeftSide />
          </div>
               {/* Background blobs wrapper */}
        <div className=" inset-0 overflow-hidden pointer-events-none">
          {/* First blob */}
          <div className="absolute top-0 -right-20 lg:right-20 w-[600px] h-[600px] bg-gradient-to-br from-fuchsia-300/30 to-red-500/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] filter blur-[70px] z-10 animate-morphBlob"></div>

          {/* Second blob */}
          <div className="absolute mt-64 -left-20 lg:left-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/40 to-cyan-500/40 rounded-[40%_60%_70%_30%/40%_40%_60%_50%] filter blur-[80px] z-10 animate-morphBlob2"></div>

          {/* Third blob - adds more dimension */}
          {/* <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-gradient-to-bl from-violet-400/40 to-fuchsia-500/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] filter blur-[75px] z-10 animate-morphBlob" style={{ animationDelay: '-4s' }}></div> */}
        </div>
            </div>
          {/* <div className="absolute mt-[460px] -left-60 w-[500px] h-[500px] bg-red-800/30 rounded-full filter blur-[128px]"></div> */}
        </div>

        <div className="w-full h-[88hv] xl:flex items-center justify-between md:px-10 gap-20 ">
          <div className="h-[88hv] mx-auto px-10">
            <ScrollSection>
              <section id="hero" className="z-30 ">
                <Hero />
              </section>
            </ScrollSection>

            <section id="about">
              <About />
              
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="Awards">
              <Awards />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <ScrollSection>
              <section id="education">
                <Education />
              </section>
            </ScrollSection>

            <ScrollSection>
              <section id="contact">
                <Contact />
              </section>
            </ScrollSection>
          </div>
        </div>
      </div>
    </>
  );
}
