import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import Programs from "@/components/sections/Programs";
import EliteFive from "@/components/sections/EliteFive";
import UltimateOne from "@/components/sections/UltimateOne";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Programs",
  description: "Explore our Elite 5 batches, Ultimate One 1-on-1 mentorship, school programs, competitive exams, and skill development courses.",
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Programs />
        <EliteFive />
        <UltimateOne />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
