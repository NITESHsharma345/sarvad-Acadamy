"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Check, Star, ArrowRight, Crown } from "lucide-react";
import { ELITE_FIVE_FEATURES } from "@/lib/constants";
import { fadeUp, slideInLeft, slideInRight, stagger } from "@/lib/animations";
import { UserCheck, Target, BarChart2, MessageSquare, Clock } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users, UserCheck, Target, BarChart2, MessageSquare, Clock
};

const comparison = [
  { feature: "Students per batch", elite5: "Max 5", regular: "30-60+" },
  { feature: "Individual attention", elite5: "High", regular: "Low" },
  { feature: "Dedicated mentor", elite5: "Yes", regular: "No" },
  { feature: "Weekly reports", elite5: "Yes", regular: "Rarely" },
  { feature: "Parent updates", elite5: "Regular", regular: "Occasional" },
  { feature: "Custom study plan", elite5: "Yes", regular: "No" },
];

export default function EliteFive() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding" id="elite5" style={{ background: "var(--color-surface)" }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">
            <Crown className="w-4 h-4" />
            Signature Program
          </div>
          <h2 className="section-title text-center">
            Elite 5 — <span className="text-gradient">The Gold Standard</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Maximum 5 students per batch. Maximum attention per student. Maximum results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Visual */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="rounded-3xl p-10 text-white relative overflow-hidden"
              style={{ background: "var(--gradient-primary)" }}>
              <div className="floating-shape w-64 h-64 bg-amber-500 -top-20 -right-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-black text-2xl" style={{ fontFamily: "var(--font-heading)" }}>Elite 5</div>
                    <div className="text-amber-400/80 text-sm">Premium Small Batch</div>
                  </div>
                </div>

                <p className="text-white/75 leading-relaxed mb-8">
                  In a world of overcrowded classrooms and impersonal teaching, Elite 5 is our promise:
                  every student in the batch receives individualized attention, custom feedback, and a
                  mentor who truly knows their strengths and weaknesses.
                </p>

                {/* 5 student visual */}
                <div className="flex items-center gap-3 mb-6">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div key={n}
                      className="w-12 h-12 rounded-full border-2 border-amber-400/50 bg-amber-400/10 flex items-center justify-center text-amber-400 font-bold text-sm"
                      style={{ fontFamily: "var(--font-heading)" }}>
                      S{n}
                    </div>
                  ))}
                  <div className="ml-2 text-amber-400/60 text-sm">Max 5 seats</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Students/Batch", value: "≤ 5" },
                    { label: "Success Rate", value: "98%" },
                    { label: "Weekly Tests", value: "Yes" },
                    { label: "Parent Updates", value: "Weekly" },
                  ].map(({ label, value }) => (
                    <div key={label} className="card-glass p-4 rounded-xl">
                      <div className="text-xl font-black text-amber-400" style={{ fontFamily: "var(--font-heading)" }}>{value}</div>
                      <div className="text-white/55 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div variants={slideInRight} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ELITE_FIVE_FEATURES.map(({ icon, title, description }) => {
                const Icon = iconMap[icon] || Star;
                return (
                  <div key={title} className="p-5 rounded-2xl border group hover:border-amber-300 transition-all"
                    style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}>
                    <div style={{ color: "var(--color-accent)" }}><Icon className="w-6 h-6 mb-3" /></div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
                      {title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
            <Link href={SITE_CONFIG.applyLink} target="_blank" className="btn btn-primary inline-flex gap-2">
              Join Elite 5 Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-center text-xl font-bold mb-8" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
            Elite 5 vs Regular Coaching
          </h3>
          <div className="max-w-2xl mx-auto overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--color-border)" }}>
            <div className="min-w-[500px]">
              <div className="grid grid-cols-3 text-sm font-bold py-4 px-6"
                style={{ background: "var(--gradient-primary)", color: "white" }}>
                <div>Feature</div>
                <div className="text-center text-amber-300">Elite 5</div>
                <div className="text-center text-white/60">Regular</div>
              </div>
              {comparison.map(({ feature, elite5, regular }, i) => (
                <div key={feature}
                  className={`grid grid-cols-3 py-4 px-6 text-sm ${i % 2 === 0 ? "" : "bg-gray-50"}`}
                  style={i % 2 === 0 ? { background: "white" } : { background: "var(--color-background)" }}>
                  <div style={{ color: "var(--color-text-primary)" }}>{feature}</div>
                  <div className="text-center font-semibold" style={{ color: "var(--color-accent-dark)" }}>
                    <Check className="w-4 h-4 inline mr-1 text-green-500" />{elite5}
                  </div>
                  <div className="text-center" style={{ color: "var(--color-text-muted)" }}>{regular}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
