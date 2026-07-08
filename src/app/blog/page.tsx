import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import Blog from "@/components/sections/Blog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog & Resources",
  description: "Stay updated with the latest education tips, study strategies, board exam advice, and competitive exam preparation strategies.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="">
        <Blog />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
