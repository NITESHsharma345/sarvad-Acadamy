import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import { BLOG_POSTS } from "@/lib/constants";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, BookOpen, Quote } from "lucide-react";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container max-w-3xl">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:text-amber-600 transition-colors"
            style={{ color: "var(--color-primary)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article>
            <div className="mb-6">
              <span className="badge badge-primary text-xs mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4" style={{ color: "var(--color-primary-dark)", fontFamily: "var(--font-heading)" }}>
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500" style={{ fontFamily: "var(--font-accent)" }}>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Banner placeholder */}
            <div className="h-64 sm:h-96 rounded-3xl overflow-hidden mb-10 relative flex items-center justify-center"
              style={{ background: "var(--gradient-primary)" }}>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <BookOpen className="w-48 h-48 text-white" />
              </div>
              <span className="text-white/80 text-xl font-bold z-10" style={{ fontFamily: "var(--font-heading)" }}>
                {post.category} Insight
              </span>
            </div>

            {/* Article Content */}
            <div className="space-y-6 text-base leading-relaxed text-gray-700" style={{ fontFamily: "var(--font-body)" }}>
              <p className="font-semibold text-lg text-gray-900 leading-normal">
                {post.excerpt}
              </p>
              <p>
                In the modern educational landscape, the one-size-fits-all classroom model is showing its limitations. Students have diverse learning speeds, strengths, and goals. At SARVD Academy, we have pioneered the Elite 5 and Ultimate One mentorship models to bridge these gaps, offering tailored attention that leads directly to academic excellence.
              </p>
              <h2 className="text-2xl font-bold mt-8 text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                Why Batch Size Matters
              </h2>
              <p>
                When a teacher is responsible for 40 to 60 students in a traditional coaching classroom, individual attention becomes a statistical impossibility. Questions go unasked, doubts accumulate, and students who need a slightly different explanation are left behind.
              </p>
              <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-amber-500 my-6 flex gap-4">
                <Quote className="w-8 h-8 text-amber-500 shrink-0 opacity-40" />
                <p className="italic text-gray-700 font-medium">
                  &ldquo;Personalized education is not a luxury — it is the most effective way to ensure every student reaches their full, unique potential.&rdquo;
                </p>
              </div>
              <p>
                By strictly limiting our batches to 5 students, we ensure that every student is active in every discussion, receives constant feedback, and is tracked weekly by a dedicated personal mentor who partners with parents to guide their academic growth.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
