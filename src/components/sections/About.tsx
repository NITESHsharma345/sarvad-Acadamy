"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Heart, Lightbulb, Shield, Users, Star, ArrowRight } from "lucide-react";
import { fadeUp, slideInLeft, slideInRight, stagger } from "@/lib/animations";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const values = [
  { icon: Target, title: "Mission-Driven", description: "Every decision centers on student success and growth." },
  { icon: Eye, title: "Transparent", description: "Honest counselling, clear pricing, and open communication." },
  { icon: Heart, title: "Student-First", description: "We genuinely care about each student's journey and wellbeing." },
  { icon: Lightbulb, title: "Innovative", description: "Modern teaching methods adapted to each learner's needs." },
  { icon: Shield, title: "Trustworthy", description: "Parents trust us to guide their children honestly and responsibly." },
  { icon: Users, title: "Community", description: "We build lasting relationships beyond the classroom." },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" id="about" style={{ background: "var(--color-surface)" }}>
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="section-label">
              <Star className="w-4 h-4" />
              About SARVD Academy
            </div>
            <h2 className="section-title">
              Every Student
              <br />
              <span className="text-gradient">Matters.</span>
            </h2>
            <div className="divider" />
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
              At SARVD Academy, <strong style={{ color: "var(--color-primary)" }}>students are not roll numbers.</strong>{" "}
              We believe every student learns differently — and our mission is to honour that uniqueness
              by providing deeply personalized guidance, mentorship, and academic support.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)" }}>
              Founded on the belief that small batches and dedicated mentors unlock extraordinary potential,
              SARVD Academy has helped hundreds of students discover their strengths, overcome challenges,
              and achieve their most ambitious academic and career goals.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl border" style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                  <span className="font-bold text-sm uppercase tracking-wider" style={{ color: "var(--color-primary)", fontFamily: "var(--font-accent)" }}>Our Mission</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  To make world-class personalized education accessible to every student — ensuring no dream goes unsupported.
                </p>
              </div>
              <div className="p-5 rounded-2xl border" style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                  <span className="font-bold text-sm uppercase tracking-wider" style={{ color: "var(--color-primary)", fontFamily: "var(--font-accent)" }}>Our Vision</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  To be India&apos;s most trusted education partner — where every student is truly seen, understood, and empowered.
                </p>
              </div>
            </div>

            <Link href={SITE_CONFIG.applyLink} target="_blank" className="btn btn-outline inline-flex gap-2">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Main Visual Card */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] flex items-center justify-center"
                style={{ background: "var(--gradient-primary)" }}>
                <div className="text-center p-12">
                  <div className="text-8xl font-black mb-4" style={{
                    fontFamily: "var(--font-heading)",
                    background: "var(--gradient-accent)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>
                    SARVD
                  </div>
                  <div className="text-white/80 text-lg font-semibold tracking-[0.25em] uppercase mb-4"
                    style={{ fontFamily: "var(--font-accent)" }}>
                    Academy
                  </div>
                  <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: "var(--gradient-accent)" }} />
                  <p className="text-white/65 text-sm leading-relaxed max-w-xs mx-auto">
                    Every Student Seen.<br />Every Dream Supported.
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 card p-4 rounded-2xl text-center min-w-[110px]"
              >
                <div className="text-3xl font-black" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>5★</div>
                <div className="text-xs font-semibold" style={{ color: "var(--color-text-muted)" }}>Rated by Parents</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 card p-4 rounded-2xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold" style={{ color: "var(--color-primary)" }}>Verified & Trusted</div>
                    <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>500+ families</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-center text-2xl font-bold mb-10" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
            Our Core Values
          </h3>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-3 gap-5"
          >
            {values.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="card p-6 text-center group"
              >
                <div className="mx-auto mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(225, 148, 36, 0.1)" }}>
                  <Icon className="w-6 h-6" style={{ color: "var(--color-accent)" }} />
                </div>
                <h4 className="font-bold text-base mb-2" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
                  {title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
