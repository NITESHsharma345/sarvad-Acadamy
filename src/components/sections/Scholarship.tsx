"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Gift, CheckCircle, ArrowRight, Calendar, Percent } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const eligibility = [
  "Students scoring 80%+ in their last examination",
  "Demonstrated financial need (on case-by-case basis)",
  "Strong motivation and commitment to learning",
  "Parental support and engagement",
];

const process = [
  { step: 1, title: "Apply Online", desc: "Fill the scholarship application form" },
  { step: 2, title: "Assessment", desc: "Appear for a written and oral assessment" },
  { step: 3, title: "Interview", desc: "Personal interview with our counselling team" },
  { step: 4, title: "Award", desc: "Scholarship awarded within 7 days of selection" },
];

export default function Scholarship() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding" id="scholarship" style={{ background: "var(--gradient-primary)" }} ref={ref}>
      <div className="container relative z-10">
        {/* Blobs */}
        <div className="floating-shape w-80 h-80 bg-amber-500 top-0 right-0 opacity-10" />

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 badge-white badge mb-4 text-white/80">
            <Award className="w-4 h-4 text-amber-400" />
            Scholarship Program
          </div>
          <h2 className="section-title text-center text-white">
            No Dream Should Go <span style={{
              background: "var(--gradient-accent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Unsupported</span>
          </h2>
          <p className="section-subtitle mx-auto text-center" style={{ color: "rgba(255,255,255,0.7)" }}>
            SARVD Academy offers merit-based and need-based scholarships covering up to 50% of tuition — because every deserving student should have access to the best education.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Scholarship Cards */}
          <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="card-glass p-8 rounded-3xl col-span-1">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center mb-5">
              <Percent className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>Merit Scholarship</h3>
            <div className="text-4xl font-black mb-2" style={{
              fontFamily: "var(--font-heading)",
              background: "var(--gradient-accent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Up to 50%</div>
            <p className="text-white/60 text-sm mb-5">For students with outstanding academic performance (80%+)</p>
            <ul className="space-y-2">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-green-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Process */}
          <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="card-glass p-8 rounded-3xl col-span-1">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center mb-5">
              <Calendar className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Application Process</h3>
            <div className="space-y-4">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold text-amber-900"
                    style={{ background: "var(--gradient-accent)", fontFamily: "var(--font-heading)" }}>
                    {step}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white" style={{ fontFamily: "var(--font-heading)" }}>{title}</div>
                    <div className="text-white/55 text-xs">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="card-glass p-8 rounded-3xl col-span-1 flex flex-col">
            <Gift className="w-12 h-12 text-amber-400 mb-5" />
            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Apply for Scholarship
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
              Scholarship applications for 2025–26 batch are now open. Limited seats available. Apply today to secure your spot and your scholarship.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                Results announced within 7 days
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                No hidden conditions
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                Renewable every academic year
              </div>
            </div>
            <Link href={SITE_CONFIG.applyLink} target="_blank" className="btn btn-primary mt-6 justify-center">
              Apply for Scholarship
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
