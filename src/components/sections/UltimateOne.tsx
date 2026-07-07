"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Calendar, BookOpen, Zap, TrendingUp, Heart, ArrowRight, Diamond } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import { ULTIMATE_ONE_FEATURES } from "@/lib/constants";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User, Calendar, BookOpen, Zap, TrendingUp, Heart
};

export default function UltimateOne() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding relative overflow-hidden" id="ultimate-one" ref={ref}
      style={{ background: "var(--gradient-primary)" }}>
      {/* Blobs */}
      <div className="floating-shape w-96 h-96 bg-amber-500 top-[-20%] right-[-10%]" />
      <div className="floating-shape w-64 h-64 bg-indigo-600 bottom-[-10%] left-[-5%]" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="section-label justify-center badge-white inline-flex mb-4">
            <Diamond className="w-4 h-4 text-amber-400" />
            <span className="text-white/80 text-xs font-bold uppercase tracking-wider ml-2">Ultimate Experience</span>
          </div>
          <h2 className="section-title text-center text-white">
            Ultimate One — <span style={{
              background: "var(--gradient-accent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Just You & Your Mentor</span>
          </h2>
          <p className="section-subtitle mx-auto text-center" style={{ color: "rgba(255,255,255,0.7)" }}>
            The pinnacle of personalized education. One student. One dedicated mentor. One extraordinary journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Features */}
          <div className="lg:col-span-3">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {ULTIMATE_ONE_FEATURES.map(({ icon, title, description }) => {
                const Icon = iconMap[icon] || User;
                return (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="card-glass p-6 rounded-2xl"
                  >
                    <div className="w-11 h-11 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed">{description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* CTA Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="card-glass p-8 rounded-3xl text-center border border-amber-400/20">
              <div className="w-20 h-20 rounded-full bg-amber-400/20 border-2 border-amber-400/40 flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-amber-400" />
              </div>

              <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                1 : 1
              </h3>
              <p className="text-amber-400 font-bold text-sm mb-2" style={{ fontFamily: "var(--font-accent)" }}>
                Completely Private Sessions
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Your dedicated mentor is available exclusively for you. Schedule sessions anytime, learn at your pace, and get instant support.
              </p>

              <ul className="text-left space-y-3 mb-8">
                {[
                  "Personal mentor dedicated to you",
                  "Any time, any day scheduling",
                  "Custom-built curriculum",
                  "Instant doubt-clearing",
                  "Weekly performance reports",
                  "Parent counselling included",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/75">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3 h-3 text-green-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={SITE_CONFIG.applyLink}
                target="_blank"
                className="btn btn-primary w-full justify-center"
              >
                Book Your First Session
                <ArrowRight className="w-4 h-4" />
              </Link>

              <p className="text-white/40 text-xs mt-4">First demo session is completely FREE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
