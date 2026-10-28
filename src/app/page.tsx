import Navbar from "@/components/Navbar";
import Hero from "@/templates/Hero";
import About from "@/templates/About";
import Experience from "@/templates/Experience";
import Projects from "@/templates/Projects";
import Education from "@/templates/Education";
import Certifications from "@/templates/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
