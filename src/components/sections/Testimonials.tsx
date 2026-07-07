"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";
import { useState } from "react";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="section-padding bg-background" id="testimonials" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">
            <Star className="w-4 h-4" />
            Student Success Stories
          </div>
          <h2 className="section-title text-center">
            Hear From Our <span className="text-gradient">Happy Families</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Real stories from real students and parents who experienced the SARVD difference.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          {TESTIMONIALS.map(({ name, role, content, rating }, index) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="card p-8 relative group"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 mb-5 opacity-15" style={{ color: "var(--color-accent)" }} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-base leading-relaxed mb-6 italic" style={{ color: "var(--color-text-secondary)" }}>
                &ldquo;{content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: "var(--gradient-primary)", fontFamily: "var(--font-heading)" }}>
                  {name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
                    {name}
                  </div>
                  <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>{role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border"
            style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-xl" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>4.9</span>
            <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>Average rating from 500+ students</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
