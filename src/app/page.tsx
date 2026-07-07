import Navbar from "@/components/layout/Navbar";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import About from "@/components/sections/About";
import WhyChoose from "@/components/sections/WhyChoose";
import LearningJourney from "@/components/sections/LearningJourney";
import Programs from "@/components/sections/Programs";
import EliteFive from "@/components/sections/EliteFive";
import UltimateOne from "@/components/sections/UltimateOne";
import Scholarship from "@/components/sections/Scholarship";
import Testimonials from "@/components/sections/Testimonials";
import Faculty from "@/components/sections/Faculty";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <WhyChoose />
        <LearningJourney />
        <Programs />
        <EliteFive />
        <UltimateOne />
        <Scholarship />
        <Testimonials />
        <Faculty />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
