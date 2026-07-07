"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";
import Link from "next/link";

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding bg-background" id="blog" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">
            <BookOpen className="w-4 h-4" />
            Resources & Insights
          </div>
          <h2 className="section-title text-center">
            Education Insights & <span className="text-gradient">Study Strategies</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Expert articles, exam tips, and parent guides — to help every student excel.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {BLOG_POSTS.map(({ slug, title, excerpt, category, readTime, date }) => (
            <motion.article
              key={slug}
              variants={fadeUp}
              className="card overflow-hidden group"
            >
              {/* Placeholder image */}
              <div className="h-48 relative overflow-hidden"
                style={{ background: "var(--gradient-primary)" }}>
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <BookOpen className="w-32 h-32 text-white" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="badge badge-white text-xs">
                    {category}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-3 mb-4 text-xs" style={{ color: "var(--color-text-muted)" }}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {date}
                  </span>
                  <span>·</span>
                  <span>{readTime}</span>
                </div>

                <h3 className="font-bold text-lg mb-3 leading-snug group-hover:text-amber-600 transition-colors"
                  style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
                  {title}
                </h3>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-secondary)" }}>
                  {excerpt}
                </p>

                <Link href={`/blog/${slug}`}
                  className="text-sm font-semibold inline-flex items-center gap-1.5 transition-all"
                  style={{ color: "var(--color-accent-dark)" }}>
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-10"
        >
          <Link href="/blog" className="btn btn-outline inline-flex gap-2">
            View All Articles
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
