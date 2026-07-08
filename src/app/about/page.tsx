import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import About from "@/components/sections/About";
import WhyChoose from "@/components/sections/WhyChoose";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description: "Learn more about SARVD Academy, our mission, vision, core values, and personalized mentorship approach.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="">
        <About />
        <WhyChoose />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
