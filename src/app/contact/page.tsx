import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import Contact from "@/components/sections/Contact";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Us",
  description: "Get in touch with SARVD Academy. Book a free demo class, schedule a counselling session, or query about fee structures.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="">
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
