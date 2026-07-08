import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import Scholarship from "@/components/sections/Scholarship";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Scholarships",
  description: "Apply for SARVD Academy scholarships. Merit-based and need-based financial support for school and competitive exam aspirants.",
  path: "/scholarships",
});

export default function ScholarshipsPage() {
  return (
    <>
      <Navbar />
      <main className="">
        <Scholarship />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
