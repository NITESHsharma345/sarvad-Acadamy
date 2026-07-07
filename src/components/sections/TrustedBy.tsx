"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Users, GraduationCap, TrendingUp, Award, BookOpen, Star } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const stats = [
  { value: 500, suffix: "+", label: "Students Mentored", icon: Users, color: "from-blue-500 to-indigo-600" },
  { value: 20, suffix: "+", label: "Expert Educators", icon: GraduationCap, color: "from-amber-500 to-orange-500" },
  { value: 95, suffix: "%+", label: "Success Rate", icon: TrendingUp, color: "from-green-500 to-teal-600" },
  { value: 5, suffix: "+", label: "Years of Excellence", icon: Award, color: "from-purple-500 to-pink-600" },
  { value: 1000, suffix: "+", label: "Classes Delivered", icon: BookOpen, color: "from-cyan-500 to-blue-600" },
  { value: 4.9, suffix: "/5", label: "Average Rating", icon: Star, decimals: 1, color: "from-rose-500 to-red-500" },
];

export default function TrustedBy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" id="stats">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">
            <TrendingUp className="w-4 h-4" />
            Trusted Across India
          </div>
          <h2 className="section-title text-center" style={{ color: "var(--color-text-primary)" }}>
            Numbers That <span className="text-gradient">Speak for Themselves</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Thousands of students and parents trust SARVD Academy for their most important academic journey.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {stats.map(({ value, suffix, label, icon: Icon, color, decimals }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="card p-4 sm:p-7 text-center group relative overflow-hidden"
            >
              {/* Background gradient blob */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-5 rounded-full -translate-y-8 translate-x-8 group-hover:opacity-10 transition-opacity`} />

              <div className={`mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>

              <div className="text-4xl font-black mb-1.5" style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary)"
              }}>
                {isInView && (
                  <CountUp
                    end={value}
                    duration={2.5}
                    decimals={decimals || 0}
                    separator=","
                    useEasing
                  />
                )}
                {suffix}
              </div>

              <div className="text-xs sm:text-sm font-semibold" style={{
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-accent)"
              }}>
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
