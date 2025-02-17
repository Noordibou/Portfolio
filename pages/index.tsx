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
      {/* Full-width background container */}
      <div className="snap-y snap-mandatory scrollbar-thin font-titleFont scrollbar-track-gray-700/20 scrollbar-thumb- thirdColor/80 bg-slate-950 bg-no-repeat bg-cover text-white w-full h-screen overflow-y-scroll overflow-x-hidden z-50">
        <Head>
          <title>Noor Dibou</title>
          <meta name="description" content="Noor Dibou's Portfolio" />
          <link rel="icon" href="/dddivided.svg" sizes="32x32" />
        </Head>

        {/* Content wrapper with max-width */}
        <div className="max-w-contentContainer mx-auto relative px-4">
          {/* Sticky Header Container */}
          <div className="fixed md:top-10 top-20 md:px-20 xl:pr-44 right-0 w-auto z-50">
            <Header />
          </div>

          {/* Content area with LeftSide */}
          <div className="relative">
            <div className="absolute left-10 md:top-10 top-20 md:px-20 md:pt-3">
              <LeftSide />
            </div>
            <div className="inset-0 overflow-hidden pointer-events-none z-10">
              {/* First blob */}
              <div className="absolute top-0 -right-20 lg:right-20 w-[600px] h-[600px] bg-gradient-to-br from-red-700/30 to-red-900/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] filter blur-[70px] z-10 animate-morphBlob"></div>

              {/* Second blob */}
              <div className="absolute mt-64 -left-20 lg:left-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/40 to-cyan-500/40 rounded-[40%_60%_70%_30%/40%_40%_60%_50%] filter blur-[80px] z-10 animate-morphBlob2"></div>
            </div>
            {/* <div className="absolute -top-20 -right-60 w-[500px] h-[500px] bg-red-800/30 rounded-full filter blur-[128px]"></div> */}

            {/* Background blobs wrapper - full width */}
          </div>

          {/* Main content sections */}
          <div className="w-full h-[88hv] xl:flex items-center justify-between md:px-10 gap-20">
            <div className="h-[88hv] mx-auto px-10">
              <ScrollSection>
                <section id="hero" className="z-30">
                  <Hero />
                </section>
              </ScrollSection>

              <section id="awards">
                <Awards />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="skills">
                <Skills />
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
      </div>
    </>
  );
}
