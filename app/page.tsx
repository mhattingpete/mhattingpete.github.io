import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Research from "@/components/sections/Research";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Research />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog />
      <Contact />
    </main>
  );
}
