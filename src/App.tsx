/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { LenisProvider } from "./components/LenisProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Reviews = lazy(() => import("./components/Reviews"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <LenisProvider>
      <ScrollProgress />
      <CustomCursor />
      <div className="relative min-h-screen overflow-x-clip selection:bg-dusk-blue/50 selection:text-alabaster-grey font-sans">
        {/* Background noise and blobs */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-ink-black h-full w-full">
          <div className="absolute opacity-[0.03] inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-prussian-blue/30 blur-[120px] mix-blend-screen opacity-50" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-dusk-blue/20 blur-[100px] mix-blend-screen opacity-40" />
        </div>

        <Navbar />
        <main className="flex flex-col">
          <Hero />
          <Suspense fallback={<div className="h-32 flex w-full items-center justify-center"><div className="w-8 h-8 rounded-full border-t-2 border-dusty-denim animate-spin"></div></div>}>
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Reviews />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      </div>
    </LenisProvider>
  );
}
