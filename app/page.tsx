"use client";
import { useEffect, useRef, useState } from "react";
import { Figtree } from "next/font/google";
import Logo from "../public/images/logo.png";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import AbountMe from "./about-me";
import Proyects from "./proyects";
import Footer from "./components/footer";
import ContactSection from "./components/contact";
import Navigation from "./components/nav";
import SkillsSection from "./components/skill_section";
import { motion, AnimatePresence } from "framer-motion";
import ServicesSection from "./components/services";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const [activeText, setActiveText] = useState("Backend");
  const [isVisible, setIsVisible] = useState(true);

  const sections = {
    index: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const texts = ["Backend", "Frontend", "Mobile"];
    let index = 0;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setActiveText(texts[index]);
        setIsVisible(true);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionKey: keyof typeof sections) => {
    if (sections[sectionKey].current && containerRef.current) {
      const targetPosition = sections[sectionKey].current?.offsetTop || 0;
      containerRef.current.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigationProps = {
    handleIndexSection: () => scrollToSection('index'),
    handleProjectsSection: () => scrollToSection('projects'),
    handleAboutMeSection: () => scrollToSection('about'),
    handleContactSection: () => scrollToSection('contact'),
    handleSkillsSection: () => scrollToSection('skills'),
    handleServicesSection: () => scrollToSection('services'),
    logoSrc: Logo,
    fontClass: figtree.className,
  };

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      style={{
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <main id="index" className="relative">
        <section
          ref={sections.index}
          className="snap-start snap-always relative h-screen w-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-main bg-cover bg-center bg-no-repeat blur-sm scale-105" />
          <div className="absolute inset-0 bg-black/70">
            <div className="h-full w-full flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h1 className={`${figtree.className} text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight`}>
                    Desarrollador
                  </h1>
                  <AnimatePresence mode="wait">
                    {isVisible && (
                      <motion.p
                        key={activeText}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`${figtree.className} text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 text-transparent bg-clip-text`}
                      >
                        {activeText}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
              <div className="h-24 flex justify-center items-center">
                <IoIosArrowDown
                  className="w-12 h-12 text-white cursor-pointer animate-bounce hover:text-blue-500 transition-colors duration-300"
                  onClick={() => scrollToSection('about')}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          ref={sections.about}
          className="snap-start snap-always w-full min-h-screen bg-white"
        >
          <div className="container mx-auto px-4">
            <Navigation {...navigationProps} />
            <AbountMe />
          </div>
        </section>

        <section
          id="projects"
          ref={sections.projects}
          className="snap-start snap-always min-h-screen w-full bg-gray-50"
        >
          <Proyects />
        </section>

        <section
          id="skills"
          ref={sections.skills}
          className="snap-start snap-always min-h-screen w-full bg-white"
        >
          <SkillsSection />
        </section>

        <section
          id="services"
          ref={sections.services}
          className="snap-start snap-always min-h-screen w-full bg-white"
        >
          <ServicesSection />
        </section>


        <section
          id="contact"
          ref={sections.contact}
          className="snap-start snap-always min-h-screen w-full bg-gray-50"
        >
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
